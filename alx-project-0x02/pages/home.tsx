import React, { useState } from "react";
import Card from '@/components/common/Card';
import PostModal from '@/components/common//PostModal';
import Header from "@/components/layout/Header";
import { type Post } from '@/interfaces';



const initialPosts: Post[] = [
  { title: "Welcome", content: "This is the welcome card." },
  { title: "About", content: "This card contains information about the project." },
  { title: "Contact", content: "Email: example@domain.com" }
];

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (data: Post) => {
    setPosts(prev => [...prev, data]);
  };

  return (
    <div>
     <Header/>
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
      {posts.map((post, idx) => (
        <Card key={idx} title={post.title} content={post.content} />
      ))}
       <button onClick={() => setModalOpen(true)} style={{ marginBottom: "16px" }}>
        Add Post
      </button>
    </div>
  );
};

export default Home;
