import React, { useEffect, useState } from "react";

export const useGetInernAPI = () => {
  // const HOST = process.env.REACT_APP_HOST;
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const JobsFetcher = async () => {
      setLoading(true);
      try {
        //!change this url everytime with new network
        await fetch(`http://192.168.217.120:5000/get_intern_posts`)
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
