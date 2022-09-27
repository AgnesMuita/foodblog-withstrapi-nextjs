import React from 'react';
import Link from "next/link"

function Posts({post}){
  return (
    <div>
      {/* <Link href={`/`}> */}
        <a>Go Home</a>
      {/* </Link> */}
        <h2>{post.Title}</h2>
    </div>
  )
}

export default Posts;


//tell next.js how many individual pages we have 
export async function getStaticPaths(){
  const res = await fetch("http://localhost:1337/api/posts")
  const posts = res.json();

  const paths = posts.map((post)=>{
      params:{slug:post.Slug}
  })
  return{
      paths,
      fallback:true
  }
}
//for each individual page, get the data for that page
export async function getStaticProps({params}){
  const {slug} = params;
  const res = await fetch(`http://localhost:1337/api/posts?Slug=${slug}`)
  const data= await res.json()
  const post = data.data[0];

  return {
    props:{post},
  }
 }
