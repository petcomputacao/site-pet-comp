import React from "react";

const HeroBackground = () => {
  return (
    <div
      className="hero-background"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/computacao-nas-escolas/computacao-nas-escolas.jpg)`,
      }}
    />
  );
};

export default HeroBackground;