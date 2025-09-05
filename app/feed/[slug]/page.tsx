import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Eye, ArrowLeft, Bookmark, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { blogArticles } from "@/lib/blog-data"
import { RelatedArticles } from "@/components/related-articles"
import { ArticleContent } from "@/components/article-content"
import { SocialShare } from "@/components/social-share"
import CopyButton from "@/components/copy-button"


export default async function ArticlePage(context: Promise<{ params: { slug: string } }>) {
  const { params } = await context
  const { slug } = await params

  const article = blogArticles.find((article) => article.slug === slug)

  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = blogArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">

      <main className="pt-20">
        {/* Article Header */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Navigation */}
              <div className="mb-8">
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                  <Link href="/feed" className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Feed</span>
                  </Link>
                </Button>
              </div>

              {/* Article Meta */}
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Article Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Article Excerpt */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{article.excerpt}</p>

              {/* Article Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
                {article.views && <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{article.views.toLocaleString()} views</span>
                </div>}
                <div className="flex items-center space-x-2">
                  <CopyButton slug={article.slug} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative h-64 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ArticleContent content={article.content} />
            </div>
          </div>
        </section>

        {/* Article Footer */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Author Bio */}
              <Card className="mb-12">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{article.author}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Expert contributor to The Nascence Group's industry insights, specializing in federal
                        contracting, compliance, and business development strategies. With extensive experience in
                        government services, our authors provide practical guidance for navigating the complex federal
                        marketplace.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Share */}
              <div className="text-center mb-12">
                <h3 className="text-lg font-semibold text-foreground mb-4">Share this article</h3>
                <SocialShare article={article} />
              </div>

              <Separator className="mb-12" />

              {/* Related Articles */}
              {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Stay Informed</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest insights on federal contracting delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
