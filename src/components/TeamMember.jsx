import React from "react";
import ppic from "../images/priya.png";
import npic from "../images/n.png";
import bpic from "../images/boyImage.jpg";
import upic from "../images/ume.png";
import rpic from "../images/rajan.jpg";
import spic from "../images/san.png";
import { RiCopyrightLine } from "react-icons/ri";

export default function TeamMember() {
  const members = [
    {
      id: 1,
      picture: ppic,
      name: "Priya Kumari",
      fb: "#",
    },
    {
      id: 2,
      picture: npic,
      name: "Nishi Kumari",
      fb: "#",
    },
    {
      id: 3,
      picture: bpic,
      name: "Biswarup Banerjee",
      fb: "#",
    },
    {
      id: 4,
      picture: upic,
      name: "Umesh Kumar",
      fb: "#",
    },
    {
      id: 5,
      picture: rpic,
      name: "Rajan Kumar",
      fb: "#",
    },
    {
      id: 6,
      picture: spic,
      name: "Santosh Kumar",
      fb: "#",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-blue-500 text-center p-4 mb-4">
          Our Team Members
        </h1>
        <div className="flex flex-col m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
              {members.map((member) => (
                <div key={member.id} className="inline-block px-3">
                  <div className="w-40 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
                    <img
                      src={member.picture}
                      alt={`${member.name}'s picture`}
                      className="w-full h-40 object-cover"
                    />
                    <p className="text-black text-center mt-2">{member.name}</p>
                    <a href={member.fb}>
                      <button className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        visit
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
