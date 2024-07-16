export interface IPost {
    userId: number | null
    id: number | null
    title: string
    body: string
    isLiked: boolean
}

export interface IPostState {
    posts: IPost[],
    limitOffset: number
}