"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json";

export function FeaturedSection() {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );
  return (
    <section className="px-10">
      <div>
        <div className="w-full text-center mb-16">
          <h3 className="text-lg mb-3">FEATURED COURSES</h3>
          <h1 className="text-5xl">Learn with the best</h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {featuredCourses.map((course, idx) => (
            <BackgroundGradient
              key={idx}
              className="h-full rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 col-span-1"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="text-center">
                  <h3 className="text-xl mb-4">{course.title}</h3>
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                </div>
                <div className="w-full flex justify-center mt-6">
                  <button className="rounded-full px-5 py-3 text-white flex items-center justify-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {course.price}
                    </span>
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
