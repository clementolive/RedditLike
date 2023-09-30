export interface _Comment {
    content: string,
    user: string, 
    date: string, 
    upvotes: number,
    image: string,
    comments?: _Comment[]
}