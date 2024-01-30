import React from "react";
import PostItem from "./PostItem";
import { IPost } from "interface/Interface";

const PostItemsContainer = ({posts}: {posts: IPost[]}) => {
    return (
        <div className="articles-cases-container">
            {posts.map(post => 
                <PostItem key={post._id} post={post}/>
            )}
        </div>
    )
};

export default PostItemsContainer;