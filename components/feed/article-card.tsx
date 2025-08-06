"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { BlogArticle } from "@/lib/blog-data.ts"

interface ArticleCardProps {
  article: BlogArticle
  index: number
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <Card
      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-card border-border"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-1 text-white text-xs">
            <Eye className="w-3 h-3" />
            <span>{article.views.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-1 mb-2">
          {article.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          <Link href={`/feed/${article.slug}`}>{article.title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}m</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

        <Link
          href={`/feed/${article.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </CardContent>
    </Card>
  )
}
