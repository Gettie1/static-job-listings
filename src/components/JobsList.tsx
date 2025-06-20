import { useState } from "react";
import jobsData  from ".././utils/data.json";
import type { Jobs } from "../types";

function JobsList(){
    const [jobs] = useState<Jobs[]>(jobsData);
    const [filters, setFilters] = useState<string[]>([])

    function addFilter(lang:string){
        if(lang && !filters.includes(lang)){
        setFilters([...filters, lang])
        }
    }
    
    return (
        <div className="p-4 bg-cyan-200">
            {/* <h2 className="text-2xl font-bold mb-4">Job Listings</h2> */}
            <div className="mb-4 bg-white shadow-lg flex justify-between text-black">
                <div className="p-2 flex gap-2">
                    {filters.map((filter) => (
                        <button key={filter} className="bg-blue-500 px-2 py-1 rounded text-white">
                            {filter}
                        </button>
                    ))}
                </div>
                <button className="mr-4">
                Clear
                </button>
            </div>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white text-black shadow-md rounded-lg p-6 flex flex-row gap-2 items-center">
                        <img src={job.logo} alt="" className="w-17 h-17 object-contain mr-2" />
                        <div className="flex flex-col flex-1">
                            <p>{job.company}</p>
                            <h3 className="text-lg font-semibold">{job.position}</h3>
                            <div className="flex flex-row gap-2">
                                <p>{job.postedAt}</p>
                                <p>{job.contract}</p>
                                <p>{job.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-row gap-2 ml-auto">
                            <button className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full cursor-pointer">{job.role}</button>
                            <button className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full cursor-pointer">{job.level}</button>
                            {job.languages.map((language) => (
                                <button 
                                    key={language} 
                                    onClick={() => addFilter(language)}
                                    className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full cursor-pointer">
                                    {language}
                                </button>
                            ))}
                            {job.tools.map((tool) => (
                                <span key={tool} className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default JobsList