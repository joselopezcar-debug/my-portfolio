export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface metadata {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
    ogImage?: string;
}