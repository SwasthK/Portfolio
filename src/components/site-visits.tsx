"use client";

import { ChartNoAxesCombined,  Loader2 } from "lucide-react";
import {  useEffect, useState } from "react";

export const SiteVisits = () => {
  const [visits, setVisits] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/track-unique-users")
      .then((res) => res.json())
      .then((data) => {
        const { error, count } = data;
        if (error) {
          throw new Error(error);
        } else {
          setVisits(count);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching unique visitors:", error);
      });
  }, []);
  return (
    <div className="flex items-center gap-2 ">
      <ChartNoAxesCombined size={16} />
      {loading ? (
        <Loader2 size={16} className="animate-spin duration-700 ease-in-out" />
      ) : (
        <p className="">{visits} Visits</p>
      )}
    </div>
  );
};
