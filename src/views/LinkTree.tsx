import React, { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";

export default function LinkTree() {
  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateLinks = devTreeLinks.map((item) => {
      return item.name === e.target.name ? { ...item, url: e.target.value } : item; 
    });
    setDevTreeLinks(updateLinks);
  }

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map((item) => (
          <DevTreeInput 
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
          />
        ))}
      </div>
    </>
  );
}