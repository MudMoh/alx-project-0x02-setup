import React from "react";
import Button from "@/components/common/Button";
const About: React.FC =  () => {
  return (
    <div>
        <h1 className="text-xl font-extralight">About Page</h1>
        <div>
            <h2>Button Variants</h2>
            <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
            <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
            <Button size="large" shape="rounded-full">Large Rounded-full</Button>
        </div>
    </div>
  )
}

export default About;