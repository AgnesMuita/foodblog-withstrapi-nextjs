import React from 'react';

function Recentposts({posts}) {
  console.log({posts})
  return (
    <div>
      {posts && posts.map((post,i)=>(
          <div key={i}>
            <p>{post.id}</p>
            <p>{post.attributes ? post.attributes.Title:""}</p>
          </div>
        ))}
    </div>
  )
}

export default Recentposts;

export async function getStaticProps(){
  const res= await fetch("http://localhost:1337/api/posts") //TODO: move this into an env variable
  const data = await res.json();
  console.log(data.data)
  return{props:{posts:data.data}}
}