"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionPanel, AccordionItem, AccordionTrigger } from "@/components/ui/base-accordion"
import { Search, HelpCircle, X, Loader2 } from "lucide-react"
import { faqData, faqCategories, allFaqTags, type FAQ } from "@/lib/faq-data"
import { FAQFilters } from "@/components/faq-filters"

const ITEMS_PER_PAGE = 10

interface GroupedFAQs {
  [category: string]: FAQ[]
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqData)
  const [displayedFAQs, setDisplayedFAQs] = useState<FAQ[]>([])
  const [groupedFAQs, setGroupedFAQs] = useState<GroupedFAQs>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Filter FAQs based on search query, category, and tags
  useEffect(() => {
    setIsLoading(true)

    let filtered = faqData

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory)
    }

    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter((faq) => selectedTags.some((selectedTag) => faq.tags.includes(selectedTag)))
    }

    setFilteredFAQs(filtered)
    setCurrentPage(1)

    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 200)
  }, [searchQuery, selectedCategory, selectedTags])

  // Update displayed FAQs and group them when filtered FAQs or current page changes
  useEffect(() => {
    const startIndex = 0
    const endIndex = currentPage * ITEMS_PER_PAGE
    const displayed = filteredFAQs.slice(startIndex, endIndex)
    setDisplayedFAQs(displayed)

    // Group displayed FAQs by category
    const grouped = displayed.reduce((acc: GroupedFAQs, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = []
      }
      acc[faq.category].push(faq)
      return acc
    }, {})

    setGroupedFAQs(grouped)
  }, [filteredFAQs, currentPage])

  const handleLoadMore = () => {
    setIsLoadingMore(true)

    // Simulate loading delay
    setTimeout(() => {
      setCurrentPage((prev) => prev + 1)
      setIsLoadingMore(false)
    }, 500)
  }

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedTags([])
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedTags.length > 0
  const hasMoreItems = displayedFAQs.length < filteredFAQs.length

  const renderTags = (faq: FAQ, isExpanded = false) => {
    const maxVisibleTags = 3
    const visibleTags = isExpanded ? faq.tags : faq.tags.slice(0, maxVisibleTags)
    const remainingCount = faq.tags.length - maxVisibleTags

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        <Badge variant="outline" className="text-xs">
          {faq.category}
        </Badge>
        {visibleTags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
        {!isExpanded && remainingCount > 0 && (
          <Badge variant="secondary" className="text-xs">
            +{remainingCount} more
          </Badge>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 px-4 py-2">
                Support Center
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find answers to common questions about our services, processes, and capabilities. Can't find what you're
                looking for? Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/70 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-3 w-full text-base"
                    />
                  </div>
                </div>

                {/* Filters */}
                <FAQFilters
                  categories={faqCategories}
                  tags={allFaqTags}
                  selectedCategory={selectedCategory}
                  selectedTags={selectedTags}
                  onCategoryChange={setSelectedCategory}
                  onTagToggle={handleTagToggle}
                />
              </div>

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Active filters:</span>

                  {searchQuery && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Search: "{searchQuery}"
                      <X className="w-3 h-3 cursor-pointer hover:text-destructive" onClick={() => setSearchQuery("")} />
                    </Badge>
                  )}

                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Category: {selectedCategory}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() => setSelectedCategory("all")}
                      />
                    </Badge>
                  )}

                  {selectedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() => handleTagToggle(tag)}
                      />
                    </Badge>
                  ))}

                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {hasActiveFilters ? "Search Results" : "All Questions"}
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Showing {displayedFAQs.length} of {filteredFAQs.length} question
                    {filteredFAQs.length !== 1 ? "s" : ""}
                    {Object.keys(groupedFAQs).length > 1 && ` across ${Object.keys(groupedFAQs).length} categories`}
                  </p>
                </div>
              </div>

              {/* Loading State */}
              {isLoading ? (
                <div className="space-y-8">
                  {Array.from({ length: 3 }).map((_, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-4">
                      <div className="h-8 bg-slate-200 rounded w-1/3 animate-pulse" />
                      {Array.from({ length: 2 }).map((_, index) => (
                        <Card key={index} className="animate-pulse">
                          <CardContent className="p-6">
                            <div className="h-6 bg-slate-200 rounded mb-4" />
                            <div className="h-4 bg-slate-200 rounded w-3/4" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* FAQ Items Grouped by Category */}
                  {Object.keys(groupedFAQs).length > 0 ? (
                    <div className="space-y-12">
                      {Object.entries(groupedFAQs).map(([category, faqs], categoryIndex) => (
                        <div key={category} className="space-y-4">
                          {/* Category Header */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground">{category}</h3>
                              <p className="text-sm text-muted-foreground">
                                {faqs.length} question{faqs.length !== 1 ? "s" : ""}
                              </p>
                            </div>
                            <div className="h-px bg-border flex-1" />
                          </div>

                          {/* Category FAQs */}
                          <Accordion openMultiple={false} className="space-y-4">
                            {faqs.map((faq, index) => (
                              <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-card"
                                style={{ animationDelay: `${categoryIndex * 100 + index * 50}ms` }}
                              >
                                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                                  <div className="flex-1 pr-4">
                                    <h4 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-200 leading-tight text-left">
                                      {faq.question}
                                    </h4>
                                    {renderTags(faq, false)}
                                  </div>
                                </AccordionTrigger>
                                <AccordionPanel className="px-6 pb-6">
                                  <div className="border-t border-border pt-4">
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                                      {faq.answer}
                                    </p>
                                    {/* Show all tags when expanded */}
                                    {faq.tags.length > 3 && (
                                      <div className="pt-2 border-t border-border/50">
                                        <p className="text-xs text-muted-foreground mb-2">All tags:</p>
                                        {renderTags(faq, true)}
                                      </div>
                                    )}
                                  </div>
                                </AccordionPanel>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      ))}

                      {/* Load More Button */}
                      {hasMoreItems && (
                        <div className="text-center pt-8">
                          <Button
                            onClick={handleLoadMore}
                            disabled={isLoadingMore}
                            variant="outline"
                            size="lg"
                            className="px-8 bg-transparent"
                          >
                            {isLoadingMore ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Loading...
                              </>
                            ) : (
                              `Load More (${filteredFAQs.length - displayedFAQs.length} remaining)`
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <HelpCircle className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">No questions found</h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your search terms or filters to find what you're looking for.
                      </p>
                      <Button variant="outline" onClick={clearAllFilters}>
                        Clear All Filters
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our team is here to help with personalized support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <a href="#contact">Contact Support</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:info@nascencegroup.com">Email Us Directly</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
