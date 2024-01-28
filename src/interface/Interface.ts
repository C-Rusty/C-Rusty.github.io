export interface IPost {
    _id?: string,
    headline: string,
    imageCloudPath: string, 
    types: [string],
    categories: [string]
}

export interface IImage {
    image: string
}