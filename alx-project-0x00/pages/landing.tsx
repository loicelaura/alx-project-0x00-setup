import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    <div className="mt-8 space-y-4">
        <Button title="Small Rounded-sm" styles="px-3 py-1 text-sm rounded-sm" />
        <Button title="Medium Rounded-md" styles="px-4 py-2 text-base rounded-md" />
        <Button title="Large Rounded-full" styles="px-6 py-3 text-lg rounded-full" />
        <Button title="Extra Rounded-lg" styles="px-5 py-2 text-base rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;