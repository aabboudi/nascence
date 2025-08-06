"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Tag } from "lucide-react"

interface BlogFiltersProps {
  categories: string[]
  tags: string[]
  selectedCategory: string
  selectedTag: string
  onCategoryChange: (category: string) => void
  onTagChange: (tag: string) => void
}

export function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: BlogFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Category Filter */}
      <div className="flex items-center space-x-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tag Filter */}
      <div className="flex items-center space-x-2">
        <Tag className="w-4 h-4 text-muted-foreground" />
        <Select value={selectedTag} onValueChange={onTagChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
