import React from 'react';
import { use } from 'react';


async function getPost(id) {
    let post = await fetch(`https://dummyjson.com/posts/${id}`);
    return post.json();
}



export default function Page({ params }) {
    let id = params.id;
    let postData = use(getPost(id));
    console.log('Post Data ===>', postData);
    return (
        <>
            <div>{postData.title}</div>
            <br />
            <div>{postData.body}</div>
        </>

    )
}
