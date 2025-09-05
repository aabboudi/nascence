"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { BlogArticle } from "@/lib/blog-data"

interface RelatedArticlesProps {
  articles: BlogArticle[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
          >
            <div className="relative h-32 overflow-hidden rounded-t-lg">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="text-xs">
                  {article.category}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                <Link href={`/feed/${article.slug}`}>{article.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}m</span>
                </div>
              </div>
              <Link
                href={`/feed/${article.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm mt-3 group/link"
              >
                Read More
                <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
