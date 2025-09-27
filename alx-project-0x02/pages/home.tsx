import React from 'react';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Card title="Welcome" content={<p>This is the home page.</p>} />
      <Card title="About" content={<p>Learn more about us.</p>} />
    </div>
  );
};

export default Home;
