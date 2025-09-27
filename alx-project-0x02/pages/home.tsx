import React from 'react';
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Card title="Welcome" content="This is the home page."/>
      <Card title="About" content="Learn more about us." />
    </div>
  );
};

export default Home;
