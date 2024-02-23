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

export interface IFullPost {
    _id?: string, 
    block: {
        img?: {
            imageCloudPath: string,
            imageUrl?: string, 
        },
        p?: string,  
        list?: string, 
        headline?: string,
    },
    types: [string],
    categories: [string]
}