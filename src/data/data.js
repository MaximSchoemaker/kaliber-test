export const data = [
  {
    "title": "Software Engineer",
    "hours": "Full-time",
    "location": "San Francisco, CA",
    "department": "Engineering",
    "link_to_job_opening": "https://example.com/job/software-engineer",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "date_posted": "2024-07-15"
  },
  {
    "title": "Data Scientist",
    "hours": "Full-time",
    "location": "New York, NY",
    "department": "Data Science",
    "link_to_job_opening": "https://example.com/job/data-scientist",
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de09d0b",
    "date_posted": "2024-07-18"
  },
  {
    "title": "DevOps Engineer",
    "hours": "Full-time",
    "location": "Austin, TX",
    "department": "Infrastructure",
    "link_to_job_opening": "https://example.com/job/devops-engineer",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "date_posted": "2024-07-20"
  },
  {
    "title": "UX/UI Designer",
    "hours": "Part-time",
    "location": "Remote",
    "department": "Design",
    "link_to_job_opening": "https://example.com/job/ux-ui-designer",
    "image": "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    "date_posted": "2024-07-22"
  },
  {
    "title": "Product Manager",
    "hours": "Full-time",
    "location": "Seattle, WA",
    "department": "Product Management",
    "link_to_job_opening": "https://example.com/job/product-manager",
    "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    "date_posted": "2024-07-25"
  },
  {
    "title": "Backend Developer",
    "hours": "Full-time",
    "location": "Chicago, IL",
    "department": "Engineering",
    "link_to_job_opening": "https://example.com/job/backend-developer",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "date_posted": "2024-07-28"
  },
  {
    "title": "Systems Analyst",
    "hours": "Full-time",
    "location": "Boston, MA",
    "department": "IT",
    "link_to_job_opening": "https://example.com/job/systems-analyst",
    "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    "date_posted": "2024-07-30"
  },
  {
    "title": "Cybersecurity Specialist",
    "hours": "Full-time",
    "location": "Washington, D.C.",
    "department": "Security",
    "link_to_job_opening": "https://example.com/job/cybersecurity-specialist",
    "image": "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a",
    "date_posted": "2024-08-01"
  },
  {
    "title": "Mobile App Developer",
    "hours": "Full-time",
    "location": "Los Angeles, CA",
    "department": "Engineering",
    "link_to_job_opening": "https://example.com/job/mobile-app-developer",
    "image": "https://images.unsplash.com/photo-1531497865145-1c769670b6e2",
    "date_posted": "2024-08-02"
  },
  {
    "title": "Database Administrator",
    "hours": "Full-time",
    "location": "Denver, CO",
    "department": "Database Administration",
    "link_to_job_opening": "https://example.com/job/database-administrator",
    "image": "https://images.unsplash.com/photo-1518972559570-0a555cc070cc",
    "date_posted": "2024-08-03"
  },
  {
    "title": "Cloud Engineer",
    "hours": "Full-time",
    "location": "San Jose, CA",
    "department": "Cloud Computing",
    "link_to_job_opening": "https://example.com/job/cloud-engineer",
    "image": "https://images.unsplash.com/photo-1508847154043-be5407fcaa5a",
    "date_posted": "2024-08-04"
  },
  {
    "title": "AI Research Scientist",
    "hours": "Full-time",
    "location": "Palo Alto, CA",
    "department": "Research",
    "link_to_job_opening": "https://example.com/job/ai-research-scientist",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee9819",
    "date_posted": "2024-08-05"
  }
]


export const departments = [...new Set(data.map((item) => item.department))].map((item, index) => ({ id: index, value: item }));
export const locations = [...new Set(data.map((item) => item.location))].map((item, index) => ({ id: index, value: item }));
export const hours = [...new Set(data.map((item) => item.hours))].map((item, index) => ({ id: index, value: item }));