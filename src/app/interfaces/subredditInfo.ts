export interface SubredditInfo {
    title: string
    description: string
    createdAt: string
    members: number
    online: number
    rank: number
    rules: Rule[]
    scheduledPosts: ScheduledPost[]
    moderators: Moderator[]
  }
  
  export interface Rule {
    title: string
    description: string
  }
  
  export interface ScheduledPost {
    title: string
    date: string
  }
  
  export interface Moderator {
    name: string
    flair: string
  }
  