import { useState } from "react";
import jobsData  from ".././utils/data.json";
import type { Jobs } from "../types";

function JobsList(){
    const [jobs] = useState<Jobs[]>(jobsData);
    const [filters, setFilters] = useState<string[]>([])
    // const [new, setNew] = useState<>()

    // function 

    function addFilter(lang:string){
        if(lang && !filters.includes(lang)){
        setFilters([...filters, lang])
        }
    }
    
    return (
        <div className=" pt-6 pl-20 pr-20 bg-teal-50">
        <header className="w-full flex justify-center mb-6">
            <img src="/bg-header-mobile.svg" alt="" className="w-full object-cover h-20 bg-teal-600" />
        </header>
            {/* <h2 className="text-2xl font-bold mb-4">Job Listings</h2> */}
            <div className="mb-4 bg-white shadow-lg flex justify-between">
                <div className="p-2 flex gap-2">
                    {filters.map((filter) => (
                        <button key={filter} className="bg-teal-50 text-teal-600 px-2 py-1 rounded font-semibold flex items-center gap-2">
                            <span>{filter}</span>
                            <img
                                src="./icon-remove.svg"
                                alt=""
                                className="h-full border border-gray-300 p-2 m-0 bg-teal-900 object-cover hover:bg-black cursor-pointer"
                                style={{ minHeight: "100%" }}
                                onClick={() => setFilters(filters.filter(f => f !== filter))}
                            />
                        </button>
                    ))}
                </div>
                <button
                    className="mr-4 text-gray-400 font-semibold hover:underline hover:text-teal-600"
                    onClick={() => setFilters([])}
                >
                    Clear
                </button>
            </div>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white text-black shadow-md rounded-lg p-6 flex flex-col sm:flex-row gap-2 items-center">
                        <img src={job.logo} alt="" className="w-17 h-17 object-contain mr-2" />
                        <div className="flex flex-col flex-1">
                            <div className="flex flex-row gap-2">
                            <p className="font-semibold text-teal-600 text-sm">{job.company}</p>
                            <div className="flex gap-2">
                            {job.new && (
                        <span className="flex items-center bg-teal-600 h-5 p-1 rounded-full text-white uppercase text-sm font-semibold px-2">
                              new!
                        </span>
                              )}
                             {job.featured && (
                        <span className="flex items-center bg-black h-5 p-1 rounded-full text-white uppercase text-sm font-semibold px-2">
                              featured
                        </span>
                             )}
                             </div>
                             </div>
                            <h3 className="text-md font-semibold hover:text-teal-600">{job.position}</h3>
                            <div className="flex flex-row gap-2 text-gray-400">
                                <p>{job.postedAt}</p>
                                <p>{job.contract}</p>
                                <p>{job.location}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-row gap-2 ml-auto  text-teal-600 font-semibold">
                            <button className="bg-teal-50 text-xs px-2 py-1 rounded-full cursor-pointer ">{job.role}</button>
                            <button className="bg-teal-50 text-xs px-2 py-1 rounded-full cursor-pointer">{job.level}</button>
                            {job.languages.map((language) => (
                                <button 
                                    key={language} 
                                    onClick={() => addFilter(language)}
                                    className="bg-teal-50  text-xs px-2 py-1 rounded-full cursor-pointer hover:text-white hover:bg-teal-600">
                                    {language}
                                </button>
                            ))}
                            {job.tools.map((tool) => (
                                <button
                                    key={tool}
                                    className="bg-teal-50 text-teal-600 text-xs px-2 py-1 rounded-full hover:text-white hover:bg-teal-600 cursor-pointer"
                                    onClick={() => addFilter(tool)}
                                >
                                    {tool}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default JobsList