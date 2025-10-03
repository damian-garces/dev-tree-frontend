import React, { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";

export default function LinkTree() {
  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateLinks = devTreeLinks.map((item) => {
      return item.name === e.target.name ? { ...item, url: e.target.value } : item; 
    });
    setDevTreeLinks(updateLinks);
  }

  const handleEnabledLink = (socialNetwork: string) => {
    const updateLinks = devTreeLinks.map((item) => {
      if (item.name === socialNetwork) {
        if (isValidUrl(item.url)) {
          return { ...item, enabled: !item.enabled };
        } else {
          toast.error("Please enter a valid URL before enabling the link.");
        }
      }
      return item;
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
            handleEnabledLink={handleEnabledLink}
          />
        ))}
      </div>
    </>
  );
}