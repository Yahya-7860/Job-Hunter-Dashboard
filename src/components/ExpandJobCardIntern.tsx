"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Link from "next/link";
import { useGetInernAPI } from "@/services/useGetInternAPI";

export default function ExpandJobCardIntern() {
  const { fetchedJobs } = useGetInernAPI();
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
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center dark:bg-white bg-neutral-400 rounded-full h-6 w-6"
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
                    className="font-bold text-2xl dark:text-white text-black"
                  >
                    {active.role}
                  </motion.h1>
                  <motion.p
                    // layoutId={`description-${active.company}-${id}`}
                    className="dark:text-gray-300 text-gray-500"
                  >
                    {active.companyName}
                  </motion.p>
                  <div className="pt-4 relative px-4"></div>
                </div>
                {/* Overview */}
                {active.overview?.length != 0 && (
                  <div>
                    <motion.h1 className="font-bold text-xl text-black dark:text-neutral-100">
                      Overview
                    </motion.h1>
                    <motion.p className="dark:text-gray-300 text-neutral-500">
                      {active.overview}
                    </motion.p>
                  </div>
                )}
                {/* Job Description */}
                {active.jobDescription && (
                  <div>
                    <motion.h1 className="font-bold text-xl text-black dark:text-neutral-100">
                      Job Description
                    </motion.h1>
                    <motion.p className="dark:text-gray-300 text-neutral-500">
                      {active.jobDescription}
                    </motion.p>
                  </div>
                )}
                {/* Requirements */}
                {active.requirement && (
                  <div>
                    <motion.h1 className="font-bold text-xl text-black dark:text-neutral-100">
                      Requirements
                    </motion.h1>
                    <motion.p className="dark:text-gray-300 text-neutral-500">
                      {active.requirement}
                    </motion.p>
                  </div>
                )}
                {/* Apply Link */}
                {active.applyLink && (
                  <div>
                    <motion.h1 className="font-bold text-xl text-black dark:text-neutral-100">
                      How to Apply
                    </motion.h1>
                    <Link
                      href={active.applyLink}
                      target="_blank"
                      className="text-blue-500"
                    >
                      {active.applyLink}
                    </Link>
                  </div>
                )}
                {/* Email */}
                {active.email && (
                  <div>
                    <motion.h1 className="font-bold text-xl text-black dark:text-neutral-100">
                      Send Your Resume
                    </motion.h1>
                    <a
                      href={`mailto:${active.email}`}
                      target="_blank"
                      className="text-blue-500"
                    >
                      {active.email}
                    </a>
                  </div>
                )}
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
              className="p-4 mb-3 border border-gray-500 flex justify-between items-center hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-600 rounded-xl cursor-pointer bg-gray-100"
            >
              <div className="flex-col md:flex-row ">
                <div className="flex flex-col items-start ">
                  <motion.h3
                    // layoutId={`title-${item.role}`}
                    className=" dark:text-white text-black font-bold dark:font-bold text-center md:text-left"
                  >
                    {item.role}
                  </motion.h3>
                  <motion.p
                    // layoutId={`description-${item.companyName}`}
                    className="dark:text-gray-400 text-gray-500  text-[13px] text-center md:text-left"
                  >
                    {item.companyName}
                  </motion.p>
                </div>
              </div>
              <motion.button
                // layoutId={`button-${item.role}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold dark:bg-gray-100 hover:bg-green-500 hover:text-white dark:text-black bg-black text-white mt-4 md:mt-0"
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
