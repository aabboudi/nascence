"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Filter, Tag, ChevronDown } from "lucide-react"

interface FAQFiltersProps {
  categories: string[]
  tags: string[]
  selectedCategory: string
  selectedTags: string[]
  onCategoryChange: (category: string) => void
  onTagToggle: (tag: string) => void
}

export function FAQFilters({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  onCategoryChange,
  onTagToggle,
}: FAQFiltersProps) {
  const [isTagPopoverOpen, setIsTagPopoverOpen] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      {/* Category Filter */}
      <div className="flex items-center space-x-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-64">
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
        <Popover open={isTagPopoverOpen} onOpenChange={setIsTagPopoverOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-64 justify-between bg-transparent">
              <span>
                {selectedTags.length === 0
                  ? "All Tags"
                  : selectedTags.length === 1
                    ? selectedTags[0]
                    : `${selectedTags.length} tags selected`}
              </span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="start">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">Filter by Tags</h4>
                {selectedTags.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      selectedTags.forEach(onTagToggle)
                    }}
                    className="text-xs h-auto p-1"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {tags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`tag-${tag}`}
                      checked={selectedTags.includes(tag)}
                      onChange={() => onTagToggle(tag)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`tag-${tag}`}
                      className="text-sm text-foreground cursor-pointer truncate"
                      title={tag}
                    >
                      {tag}
                    </label>
                  </div>
                ))}
              </div>

              {selectedTags.length > 0 && (
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Selected tags:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedTags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
