import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    // <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
    //   {designs.map((item, index) => {
    //     return (
    //       <div
    //         className="w-full"
    //         key={index}
    //       >
    //         <a href={item.link} target="_blank" className="w-full">
    //           <img
    //             className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
    //             src={item.img}
    //           />
    //         </a>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="flex flex-wrap w-full justify-between">
        <div className="md:w-1/2 text-lg md:text-2xl space-y-6">
          <p className="text-justify">Hi Everyone, It's <span className="text-purple-400">Adarsh</span> from <span className="text-purple-400">Kerala, India!</span></p>
          <p className="text-justify leading-relaxed">I'm not your typical web developer. I'm a passionate self-learner who made a career switch and delved into coding. Over the past year, I've created around 20 diverse projects, immersing myself in the world of self-learning, open-source contributions, and personal projects. My journey has been fueled by curiosity and a relentless drive to learn and create.</p>
        </div>
        <div className="md:w-1/2 p-3">
          <img src="/static/images/web.png" alt="" />
        </div>
    </div>
  );
}

export default Designs;
