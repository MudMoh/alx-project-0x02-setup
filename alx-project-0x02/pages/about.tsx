import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
const About: React.FC =  () => {
  return (
      <div>
        <Header/>
        <h1 className="text-xl font-extralight">About Page</h1>
        
        <h2>Button Variants</h2>
           <Button
            title="Small Rounded-sm"
            shape="rounded-sm"
            size="small"
            styles=""
            onClick={() => alert("Small Rounded-sm Button clicked!")}/>
      
        
           <Button
            title="Medium Rounded-md"
            shape="rounded-md"
            size="medium"
            styles=""
            onClick={() => alert("Medium Rounded-md Button clicked!")}/>
      
          
           <Button
            title="Large Rounded-full"
            shape="rounded-full"
            size="large"
            styles=""
            onClick={() => alert("Large Rounded-full Button clicked!")}/>
    </div>
  )
}

export default About;