import React, { useEffect, useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/DevTreeApi";
import type { SocialNetwork, User } from "../types";

export default function LinkTree() {

  useEffect(() => {
    const updatedata = devTreeLinks.map((item) => {
      const userLinks = JSON.parse(user.links).find((link: SocialNetwork) => link.name === item.name);
      if(userLinks) {
        return { ...item, url: userLinks.url, enabled: userLinks.enabled };
      }
      return item;
    });
    setDevTreeLinks(updatedata);
  }, []);

  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const queryClient = useQueryClient();
  const user : User = queryClient.getQueryData(['user'])!;

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("SocialNetwork updated successfully!");
    },
    onError: () => {
      toast.error("Failed to update SocialNetwork. Please try again.");
    }
  });

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

    queryClient.setQueryData(['user'], (oldData: User) => {
      return {
        ...oldData,
        links: JSON.stringify(updateLinks)
      };
    });
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
        <button
          onClick={() => mutate(user)}
          className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}