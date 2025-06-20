import type { Jobs } from "../types";
 
export interface JobsCardProps {
  job: Jobs;
  // filter jobs based on categories like role, level, languages, tools
  categories: string[];
    // function to handle filter changes
    onFilterChange: (category: string) => void;
}

export default function JobsCard({ job, categories, onFilterChange }: JobsCardProps) {
  return (
   //tailwind css classes for styling the job card
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex
        flex-col sm:flex-row items-start sm:items-center gap-4
        hover:shadow-lg transition-shadow duration-300">
        <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className={`text-sm font-semibold ${job.new ? 'text-blue-600' : 'text-gray-600'}`}>
            {job.company}
            </span>
            {job.new && <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">New</span>}
            {job.featured && <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Featured</span>}
        </div>
        <h3 className="text-lg font-bold">{job.position}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
            {categories.map((category) => (
            <button
                key={category}
                onClick={() => onFilterChange(category)}
                className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-300"
            >
                {category}
            </button>
            ))}
        </div>
        <div className="text-gray-500 text-xs mt-2">
            <span>{job.postedAt} • </span>
            <span>{job.contract} • </span>
            <span>{job.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
            {job.languages.map((language) => (
                <span
                    key={language}
                    className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                >
                    {language}
                </span>
            ))}
            {job.tools.map((tool) => (
                <span
                    key={tool}
                    className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full"
                >
                    {tool}
                </span>
            ))}
        </div>
    </div>

  );
}