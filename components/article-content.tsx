"use client"
import type React from "react"

interface ArticleContentProps {
  content: string
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Inline formatter for bold + links
  const formatInline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    let remaining = text
    let match: RegExpExecArray | null

    const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
    let lastIndex = 0

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(remaining.substring(lastIndex, match.index))
      }

      if (match[1]) {
        // Bold
        parts.push(<strong key={parts.length}>{match[1]}</strong>)
      } else if (match[2] && match[3]) {
        // Link
        parts.push(
          <a
            key={parts.length}
            href={match[3]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {match[2]}
          </a>,
        )
      }

      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts
  }

  const formatContent = (text: string) => {
    const lines = text.trim().split("\n")
    const elements: React.JSX.Element[] = []
    let currentIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue

      // Headers
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={currentIndex++} className="text-3xl font-bold text-foreground mb-6 mt-8">
            {formatInline(line.substring(2))}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={currentIndex++} className="text-2xl font-bold text-foreground mb-4 mt-8">
            {formatInline(line.substring(3))}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={currentIndex++} className="text-xl font-semibold text-foreground mb-3 mt-6">
            {formatInline(line.substring(4))}
          </h3>,
        )
      } else if (line.startsWith("#### ")) {
        elements.push(
          <h4 key={currentIndex++} className="text-lg font-semibold text-foreground mb-2 mt-4">
            {formatInline(line.substring(5))}
          </h4>,
        )
      }
      // Lists
      else if (line.startsWith("- ")) {
        const listItems = []
        let j = i
        while (j < lines.length && lines[j].trim().startsWith("- ")) {
          listItems.push(lines[j].trim().substring(2))
          j++
        }
        elements.push(
          <ul key={currentIndex++} className="list-disc list-inside mb-6 space-y-2 text-foreground/80">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {formatInline(item)}
              </li>
            ))}
          </ul>,
        )
        i = j - 1
      }
      // Paragraphs
      else {
        elements.push(
          <p key={currentIndex++} className="text-foreground/80 leading-relaxed mb-6">
            {formatInline(line)}
          </p>,
        )
      }
    }

    return elements
  }

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="space-y-4">{formatContent(content)}</div>
    </div>
  )
}
