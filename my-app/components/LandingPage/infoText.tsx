import React from "react";
import styles from "@/components/CSS/bubble.module.css";

const Info = () => {
  return (
    <div className="grid place-content-center bg-white m-32 mt-48">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-bold mb-48">
      {"Sveriges byråkratiska landskap,knäck koden till svenska myndigheters värld och upptäck klarhet i den svenska förvaltningens snårskog.".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Info;