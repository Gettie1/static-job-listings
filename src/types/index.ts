 export interface Jobs {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}
export interface JobsListProps {
    jobs: Jobs[];
    categories: string[];
    onFilterChange: (category: string) => void;
}
export interface JobsCardProps {
    job: Jobs;
    categories: string[];
    onFilterChange: (category: string) => void;
}
export interface FilterProps {
    categories: string[];
    onFilterChange: (category: string) => void;
}
export interface FilterButtonProps {
    category: string;
    isActive: boolean;
    onFilterChange: (category: string) => void;
}