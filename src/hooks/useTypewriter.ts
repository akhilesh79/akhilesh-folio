import { useEffect, useMemo, useState } from 'react'

type Options = {
  typingMs?: number
  deletingMs?: number
  pauseMs?: number
}

export function useTypewriter(words: string[], options: Options = {}) {
  const typingMs = options.typingMs ?? 55
  const deletingMs = options.deletingMs ?? 32
  const pauseMs = options.pauseMs ?? 950

  const safeWords = useMemo(() => words.filter(Boolean), [words])

  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (safeWords.length === 0) return

    const full = safeWords[index % safeWords.length]
    const doneTyping = !isDeleting && text === full
    const doneDeleting = isDeleting && text === ''

    const delay = doneTyping ? pauseMs : isDeleting ? deletingMs : typingMs

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setIsDeleting(true)
        return
      }

      if (doneDeleting) {
        setIsDeleting(false)
        setIndex((v) => (v + 1) % safeWords.length)
        return
      }

      const next = isDeleting
        ? full.slice(0, Math.max(0, text.length - 1))
        : full.slice(0, text.length + 1)

      setText(next)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deletingMs, index, isDeleting, pauseMs, safeWords, text, typingMs])

  return { text, isDeleting }
}

