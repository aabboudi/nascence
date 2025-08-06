"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { type BlogArticle, blogArticles } from "@/lib/blog-data"
import { SpotlightArticle } from "@/components/feed/spotlight-article"
import { ArticleCard } from "@/components/feed/article-card"
import { BlogPagination } from "@/components/feed/blog-pagination"
import { BlogFilters } from "@/components/feed/blog-filters"
import { CTA } from "@/components/cta"
import { SectionTitle } from "@/components/section-title"

const ARTICLES_PER_PAGE = 6

export default function FeedPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTag, setSelectedTag] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Get the latest article for spotlight
  const spotlightArticle = blogArticles[0]

  // Filter articles (excluding spotlight article)
  useEffect(() => {
    setIsLoading(true)

    let filtered = blogArticles.slice(1) // Exclude spotlight article

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    // Apply tag filter
    if (selectedTag !== "all") {
      filtered = filtered.filter((article) => article.tags.includes(selectedTag))
    }

    setFilteredArticles(filtered)
    setCurrentPage(1) // Reset to first page when filters change

    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 300)
  }, [searchQuery, selectedCategory, selectedTag])

  // Paginate articles
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)

  // Get unique categories and tags
  const categories = Array.from(new Set(blogArticles.map((article) => article.category)))
  const allTags = Array.from(new Set(blogArticles.flatMap((article) => article.tags)))

  return (
    <main>
      <SectionTitle
        isHero={true}
        badge="Industry Insights"
        title="The Nascence Feed"
        subtitle="Stay informed with the latest insights on federal contracting, industry trends, compliance updates, and best practices from our expert team."
      />

      {/* Spotlight Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 px-4 py-2">
                  Featured Article
                </Badge>
                <h2 className="text-3xl font-bold text-foreground">Latest Insights</h2>
              </div> */}
            <SpotlightArticle article={spotlightArticle} />
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/70 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>

              {/* Filters */}
              <BlogFilters
                categories={categories}
                tags={allTags}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
                onCategoryChange={setSelectedCategory}
                onTagChange={setSelectedTag}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {searchQuery || selectedCategory !== "all" || selectedTag !== "all"
                    ? "Search Results"
                    : "All Articles"}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory !== "all" || selectedTag !== "all") && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                    setSelectedTag("all")
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <div className="h-48 bg-slate-200 rounded-t-lg" />
                    <CardContent className="p-6">
                      <div className="h-4 bg-slate-200 rounded mb-2" />
                      <div className="h-4 bg-slate-200 rounded w-3/4 mb-4" />
                      <div className="h-3 bg-slate-200 rounded mb-2" />
                      <div className="h-3 bg-slate-200 rounded w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                {/* Articles Grid */}
                {paginatedArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {paginatedArticles.map((article, index) => (
                      <ArticleCard key={article.id} article={article} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">No articles found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("all")
                        setSelectedTag("all")
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  )
}
