export interface Thread {
    title: string, 
    user: string, 
    date: string, 
    subreddit: string, 
    upvotes: number, 
    comments: number,
    contentText: string,
    contentImage: string // we show text if no image 
}
