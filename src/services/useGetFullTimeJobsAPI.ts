import React, { useEffect, useState } from "react";

export const useGetFullTimeJobsAPI = () => {
  const [fetchedJobs, setFetchedJobs] = useState([]);

  useEffect(() => {
    const JobsFetcher = async () => {
      try {
        await fetch("http://192.168.121.120:5000/get_full_time_posts")
          .then((res) => res.json())
          .then((data) => {
            if (data.Message == "success") {
              setFetchedJobs(data.posts);
            }
          });
      } catch (error) {
        console.error(error);
      }
    };
    JobsFetcher();
  }, []);
  return { fetchedJobs };
};
