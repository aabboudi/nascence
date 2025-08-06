"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import type { BlogArticle } from "@/lib/blog-data"

interface SpotlightArticleProps {
  article: BlogArticle
}

export function SpotlightArticle({ article }: SpotlightArticleProps) {
  return (
    <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group bg-card border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Featured</Badge>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="flex items-center space-x-2 text-white text-sm">
              <Eye className="w-4 h-4" />
              <span>{article.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              {article.category}
            </Badge>
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <h1 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {article.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>

          {/* Meta Information */}
          <div className="flex items-center justify-between mb-8 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group/btn"
          >
            <Link href={`/feed/${article.slug}`}>
              Read Full Article
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
