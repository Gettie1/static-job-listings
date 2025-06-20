import { useState } from "react";
import type { FilterProps } from "../types";
import { jobsData } from "../data/JobsData";

function JobsList({categories, onFilterChange}: FilterProps){
    const [jobs, setJobs] = useState(jobsData)
    const filters: {key: categories, label:string}

}
export default JobsList