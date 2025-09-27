import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";



export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();
  return { props: { posts } };
}

const Posts: React.FC<PostProps> = ({ posts }) => (
  <div>
    <Header />
    <h1>Posts Page</h1>
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        content={post.body}
        userId={post.userId}
      />
    ))}
  </div>
);

export default Posts;