export interface IPost {
    _id?: string,
    headline: string,
    imageCloudPath: string,
    imageUrl?: string, 
    types: [string],
    categories: [string]
}

export interface IImage {
    image: string
}