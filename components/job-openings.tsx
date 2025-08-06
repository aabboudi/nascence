'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, MapPin, Briefcase, Calendar, X, ChevronDown, Share2 } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SectionTitle } from '@/components/section-title'
// import { toast } from "@/hooks/use-toast"

// Dummy data for job openings
const jobOpenings = [
  { id: 1, title: "Janitorial Staff", type: "Full-time", location: "Arlington, TX", description: "Seeking dependable janitorial staff to maintain clean facilities.", company: "Nascence Group, LLC", postedDate: "2025-08-01", salary: "$30,000 - $40,000" },
  { id: 2, title: "Grounds Maintenance Worker", type: "Full-time", location: "Sacramento, CA", description: "Maintain landscaping and outdoor areas for government properties.", company: "Nascence Group, LLC", postedDate: "2025-07-30", salary: "$35,000 - $45,000" },
  { id: 3, title: "Registered Nurse (RN)", type: "Part-time", location: "Remote/Telehealth", description: "Provide remote healthcare services for patients across multiple states.", company: "Nascence Group, LLC", postedDate: "2025-08-02", salary: "$70,000 - $90,000" },
  { id: 4, title: "IT Support Technician", type: "Full-time", location: "Baltimore, MD", description: "Provide technical support to end users and maintain IT infrastructure.", company: "Nascence Group, LLC", postedDate: "2025-08-03", salary: "$50,000 - $65,000" },
  { id: 5, title: "Facilities Maintenance Technician", type: "Full-time", location: "Seattle, WA", description: "Responsible for general maintenance and repair of facility systems.", company: "Nascence Group, LLC", postedDate: "2025-08-04", salary: "$45,000 - $55,000" },
  { id: 6, title: "Custodian", type: "Part-time", location: "Austin, TX", description: "Perform daily cleaning tasks in office and common areas.", company: "Nascence Group, LLC", postedDate: "2025-08-05", salary: "$16/hr" },
  { id: 7, title: "Groundskeeper", type: "Full-time", location: "Orlando, FL", description: "Maintain lawns, trees, and irrigation systems for public parks.", company: "Nascence Group, LLC", postedDate: "2025-08-06", salary: "$36,000 - $42,000" },
  { id: 8, title: "Medical Assistant", type: "Full-time", location: "Columbus, OH", description: "Support physicians with patient intake and basic clinical tasks.", company: "Nascence Group, LLC", postedDate: "2025-08-05", salary: "$38,000 - $48,000" },
  { id: 9, title: "Help Desk Analyst", type: "Full-time", location: "Remote", description: "Resolve technical issues for enterprise users via phone and email.", company: "Nascence Group, LLC", postedDate: "2025-08-06", salary: "$52,000 - $60,000" },
  { id: 10, title: "HVAC Technician", type: "Full-time", location: "Phoenix, AZ", description: "Install, inspect, and repair HVAC systems in commercial buildings.", company: "Nascence Group, LLC", postedDate: "2025-08-06", salary: "$48,000 - $62,000" },
  { id: 11, title: "Hospital Janitor", type: "Night Shift", location: "Chicago, IL", description: "Sanitize hospital rooms and common areas following health protocols.", company: "Nascence Group, LLC", postedDate: "2025-08-04", salary: "$18/hr" },
  { id: 12, title: "IT Field Technician", type: "Contract", location: "Denver, CO", description: "Travel to client sites for setup and maintenance of IT equipment.", company: "Nascence Group, LLC", postedDate: "2025-08-05", salary: "$25/hr" },
  { id: 13, title: "Building Maintenance Lead", type: "Full-time", location: "Boston, MA", description: "Supervise maintenance staff and oversee building systems upkeep.", company: "Nascence Group, LLC", postedDate: "2025-08-03", salary: "$60,000 - $70,000" },
  { id: 14, title: "Lawn Equipment Operator", type: "Seasonal", location: "Boise, ID", description: "Operate mowing and landscaping equipment on large properties.", company: "Nascence Group, LLC", postedDate: "2025-08-02", salary: "$20/hr" },
  { id: 15, title: "Certified Nursing Assistant (CNA)", type: "Full-time", location: "Nashville, TN", description: "Assist patients with daily living tasks in a long-term care facility.", company: "Nascence Group, LLC", postedDate: "2025-08-01", salary: "$34,000 - $40,000" }
];

const jobTypes = [...new Set(jobOpenings.map(job => job.type))];
const locations = [...new Set(jobOpenings.map(job => job.location))];

type MultiSelectProps = {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder: string
}

const MultiSelect = ({ options, selected, onChange, placeholder }: MultiSelectProps) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {selected.length > 0 ? `${selected.length} selected` : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="p-2">
          {options.map((option) => (
            <div
              key={option}
              className="flex items-center space-x-2 p-2 hover:bg-accent rounded cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <Checkbox checked={selected.includes(option)} />
              <span className="text-sm">{option}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default function JobOpenings() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilters, setTypeFilters] = useState<string[]>([])
  const [locationFilters, setLocationFilters] = useState<string[]>([])
  const [selectedJob, setSelectedJob] = useState(jobOpenings[0])
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Load job from URL parameter on component mount
  useEffect(() => {
    const jobId = searchParams.get('job')
    if (jobId) {
      const job = jobOpenings.find(j => j.id === parseInt(jobId))
      if (job) {
        setSelectedJob(job)
      }
    }
  }, [searchParams])

  const filteredJobs = jobOpenings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (typeFilters.length === 0 || typeFilters.includes(job.type)) &&
    (locationFilters.length === 0 || locationFilters.includes(job.location))
  )

  const handleJobSelect = (job: typeof selectedJob) => {
    setSelectedJob(job)
    // Update URL with job ID
    const params = new URLSearchParams(searchParams.toString())
    params.set('job', job.id.toString())
    router.push(`?${params.toString()}`, { scroll: false })
    
    if (isSmallScreen) {
      setIsModalOpen(true)
    }
  }

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?job=${selectedJob.id}`
    try {
      await navigator.clipboard.writeText(url)
      // toast({
      //   title: "Link copied!",
      //   description: "Job opening link has been copied to clipboard.",
      // })
    } catch (err) {
      // toast({
      //   title: "Share link",
      //   description: url,
      // })
    }
  }

  const JobDetails = ({ job }: { job: typeof selectedJob }) => (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <Button variant="outline" size="sm" onClick={handleShare}>
          <Share2 size={16} className="mr-2" />
          Share
        </Button>
      </div>
      <div className="flex items-center gap-2 text-sm mb-2">
        <Briefcase size={14} />
        <span>{job.company}</span>
      </div>
      <div className="flex items-center gap-2 text-sm mb-2">
        <MapPin size={14} />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm mb-4">
        <Calendar size={14} />
        <span>Posted on {job.postedDate}</span>
      </div>
      <Badge variant="secondary" className="mb-4">{job.type}</Badge>
      <p className="mb-4">{job.description}</p>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Salary Range</h3>
        <p>{job.salary}</p>
      </div>
      <Button className="w-full">Apply Now</Button>
    </div>
  )

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <SectionTitle
        isHero={true}
        badge="Careers"
        title="Job Openings"
        subtitle="Explore our current job openings and join our team at Nascence Group, LLC."
      />
      
      <div className="grid gap-6 md:grid-cols-[2fr_1fr_1fr_auto] mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <MultiSelect
          options={jobTypes}
          selected={typeFilters}
          onChange={setTypeFilters}
          placeholder="Job Type"
        />
        <MultiSelect
          options={locations}
          selected={locationFilters}
          onChange={setLocationFilters}
          placeholder="Location"
        />
        <Button onClick={() => { setSearchTerm(''); setTypeFilters([]); setLocationFilters([]); }}>
          Clear Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {typeFilters.map(filter => (
          <Badge key={filter} variant="secondary" className="px-2 py-1">
            {filter}
            <X
              size={14}
              className="ml-1 cursor-pointer"
              onClick={() => setTypeFilters(typeFilters.filter(t => t !== filter))}
            />
          </Badge>
        ))}
        {locationFilters.map(filter => (
          <Badge key={filter} variant="secondary" className="px-2 py-1">
            {filter}
            <X
              size={14}
              className="ml-1 cursor-pointer"
              onClick={() => setLocationFilters(locationFilters.filter(l => l !== filter))}
            />
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        {/* <ScrollArea className="h-[calc(100vh-350px)] pr-4"> */}
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          {filteredJobs.map(job => (
            <Card 
              key={job.id} 
              className={`mb-4 cursor-pointer transition-colors ${selectedJob.id === job.id ? 'bg-accent' : 'hover:bg-accent/50'}`}
              onClick={() => handleJobSelect(job)}
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Briefcase size={14} />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
                <Badge variant="secondary">{job.type}</Badge>
              </CardContent>
            </Card>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center mt-8">No job openings match your criteria.</p>
          )}
        </ScrollArea>

        {!isSmallScreen && (
          <Card className="h-[calc(100vh-350px)] overflow-auto">
            <JobDetails job={selectedJob} />
          </Card>
        )}
      </div>

      {isSmallScreen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Job Details</DialogTitle>
            </DialogHeader>
            <JobDetails job={selectedJob} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
