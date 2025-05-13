import React from "react";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "93vh",
  margin: "auto",
  backgroundColor: "#123458",
  color: "white",
  textAlign: "center",
  gap: 50,
};

const HeroSection = () => {
  return (
    <div style={style}>
      <div className="flex flex-col justify-center items-center gap-1">
        <img
          className="rounded-full w-28 h-28 object-cover"
          src="https://avatars.githubusercontent.com/u/67783583?s=400&u=d47afe936961ded2727e07ba317da749bef59ee3&v=4"
          alt="my profileImage"
        />
        <h2 className="font-bold">Hello, I am Shubham!</h2>
      </div>
      <h1 className="font-bold text-5xl w-[30vw] text-wrap">
        A frontend developer specialized in React
      </h1>
    </div>
  );
};

export default HeroSection;
