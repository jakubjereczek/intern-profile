export interface Repo {
    id: number | string,
    name: string,
    full_name: string,
    description: string,
    topics: string[],
    created_at: Date,
    html_url: string
}