export interface Project {
    id: number,
    name: string,
    image: string,
    images: Array<any>,
    description: string,
    technologies: string[],
    demo: string | null,
    github: string | null,
}