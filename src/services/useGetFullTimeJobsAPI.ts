import React, { useEffect, useState } from "react";

export const useGetFullTimeJobsAPI = () => {
  // const HOST = process.env.REACT_APP_HOST;

  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const JobsFetcher = async () => {
      setLoading(true);
      try {
        //!change this url everytime with new network
        await fetch(`http://192.168.43.161:5000/get_full_time_posts`)
          .then((res) => res.json())
          .then((data) => {
            if (data.Message == "success") {
              setFetchedJobs(data.posts);
              setLoading(false);
            }
          });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    JobsFetcher();
  }, []);
  return { fetchedJobs, setFetchedJobs, loading };
};
