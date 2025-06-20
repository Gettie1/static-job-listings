
import './App.css'
import JobsCard from './components/JobsCard'

function App() {

  return (
    <>
      <JobsCard
        job={{ id: 1, company: "Company A", logo: "logo.png", new: true, featured: false, position: "Software Engineer", role: "Frontend", level: "Junior", postedAt: "1 day ago", contract: "Full-time", location: "Remote", languages: ["JavaScript"], tools: ["React"] }}
        categories={[]}
        onFilterChange={() => {}}
      />
    </>
  )
}

export default App
