export interface IType {
    type: `case` | `article` | `both` 
}

export interface ICategory {
    category: `marketing` | `strategy` | `both`
}

export interface IPost {
    _id?: string,
    headline: string,
    imagePath: string, 
    type: IType,
    category: ICategory 
}

export interface IPosts {
    posts: [IPost]
}