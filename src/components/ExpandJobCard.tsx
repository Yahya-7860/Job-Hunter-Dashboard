"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandJobCard() {
  const [active, setActive] = useState<
    (typeof fetchedJobs)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const [fetchedJobs, setFetchedJobs] = useState([]);

  useEffect(() => {
    const JobsFetcher = async () => {
      try {
        await fetch("http://localhost:5000/get_posts")
          .then((res) => res.json())
          .then((data) => {
            if (data.Message == "success") {
              setFetchedJobs(data.posts);
            }
            // console.log(data);
          });
      } catch (error) {
        console.error(error);
      }
    };
    JobsFetcher();
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <>
            <div className="fixed inset-0  h-fit grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.role}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                // layoutId={`card-${active.role}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-[100vh] overflow-y-auto  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl py-5 px-5 gap-5 "
              >
                <div className="p-4">
                  <motion.h1
                    // layoutId={`title-${active.role}-${id}`}
                    className="font-bold text-2xl text-white"
                  >
                    {active.role}
                  </motion.h1>
                  <motion.p
                    // layoutId={`description-${active.company}-${id}`}
                    className="text-gray-300"
                  >
                    {active.companyName}
                  </motion.p>
                  <div className="pt-4 relative px-4"></div>
                </div>
                {/* Overview */}
                {active.overview?.length != 0 && (
                  <div>
                    <motion.h1 className="font-bold text-xl">
                      Overview
                    </motion.h1>
                    <motion.p className="text-gray-300">
                      {active.overview}
                    </motion.p>
                  </div>
                )}
                {/* Job Description */}
                <div>
                  <motion.h1 className="font-bold text-xl">
                    Job Description
                  </motion.h1>
                  <motion.p className="text-gray-300">
                    {active.jobDescription}
                  </motion.p>
                </div>
                {/* Requirements */}
                <div>
                  <motion.h1 className="font-bold text-xl">
                    Requirements
                  </motion.h1>
                  <motion.p className="text-gray-300">
                    {active.requirement}
                  </motion.p>
                </div>
                {/* Apply Link */}
                <div>
                  <motion.h1 className="font-bold text-xl">
                    How to Apply
                  </motion.h1>
                  <motion.p className="text-gray-300">
                    {active.applyLink}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {fetchedJobs &&
          [...fetchedJobs].reverse().map((item, index) => (
            <motion.div
              // layoutId={`item-${item.role}-${id}`}
              key={`item-${item.role}`}
              onClick={() => setActive(item)}
              className="p-4 mb-3 border border-gray-500 flex justify-between items-centern hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex-col md:flex-row ">
                <div className="flex flex-col items-start ">
                  <motion.h3
                    // layoutId={`title-${item.role}`}
                    className="font-medium text-white text-center md:text-left"
                  >
                    {item.role}
                  </motion.h3>
                  <motion.p
                    // layoutId={`description-${item.companyName}`}
                    className="text-gray-400 text-[13px] text-center md:text-left"
                  >
                    {item.companyName}
                  </motion.p>
                </div>
              </div>
              <motion.button
                // layoutId={`button-${item.role}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                View
              </motion.button>
            </motion.div>
          ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
