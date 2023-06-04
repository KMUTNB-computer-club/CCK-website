import React from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";

const page = () => {
  return (
    <>
      <div className="w-full">
        <Banner
          backgroundImage="https://images.unsplash.com/photo-1636808037213-bc06cfa6931b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          title="Explore the Wonders"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          cta="#"
          ctatext="Yay!"
          details="#"
        />
      </div>
      <div className="mt-12 mb-3 flex items-center justify-center">
        <Card
          imageSrc="https://images.unsplash.com/photo-1682332300122-7cfddb1576c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          title="Lorem Ipsum"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          cta="#"
          ctatext="Go!"
          details="#"
        />
      </div>
      <div className="w-full flex flex-col justify-center px-16 max-sm:px-11">
        <h2 className="text-3xl text-black dark:text-white font-bold my-9">
          ข่าวชมรม
        </h2>
        <div className="px-6 grid grid-cols-2 gap-10 gap-y-5 mb-20 max max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-6 max-md:px-8 max-sm:px-12 min-[967px]:grid-cols-3">
          <NewsCard
            imageSrc=""
            timeago=""
            title="Mess Lorem ipsum dolor sit amet."
            subtitle=""
            url="1"
          />
          <NewsCard imageSrc="" timeago="" title="Cpr.E!" subtitle="" url="" />
          <NewsCard imageSrc="" timeago="" title="Com" subtitle="" url="" />
          <NewsCard imageSrc="" timeago="" title="Engineers" subtitle="" url="" />
          <NewsCard imageSrc="" timeago="" title="TikTok" subtitle="" url="" />
        </div>
      </div>
    </>
  );
};

export default page;
