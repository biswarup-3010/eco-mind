import React from "react";
import bpic from "../images/boyImage.jpg";
import { RiCopyrightLine } from "react-icons/ri";

export default function TeamMember() {
  const members = [
    {
      id: 1,
      picture: bpic,
      name: "Priya Kumari",
      fb: "#",
    },
    {
      id: 2,
      picture: bpic,
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
      picture: bpic,
      name: "Umesh Kumar",
      fb: "#",
    },
    {
      id: 5,
      picture: bpic,
      name: "Rajan Kumar",
      fb: "#",
    },
    {
      id: 6,
      picture: bpic,
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
        {/* <div className="flex flex-row overscroll-x-auto sm:flex-wrap  justify-center gap-5">
          {members.map((member) => (
            <div
              key={member.id}
              className="relative min-h-auto w-32 border border-green-200 bg-blue-100 rounded-lg overflow-hidden flex flex-col items-center"
            >
              <img
                src={member.picture}
                alt={`${member.name}'s picture`}
                className="w-full h-32 object-cover"
              />
              <p className="text-black text-center mb-4">{member.name}</p>
              <br />

              <a href={member.fb}>
                <button className="absolute h-8 w-auto p-1 bg-blue-500 bottom-0 right-0 cursor-pointer text-white">
                  visit
                </button>
              </a>
            </div>
          ))}
        </div> */}
        <div className="flex flex-col m-auto p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
              {members.map((member, index) => (
                <div key={index} className="inline-block px-3">
                  <div className="w-40 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-100 hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
                    <img
                      src={member.picture}
                      alt={`${member.name}'s picture`}
                      className="w-full object-cover"
                    />
                    <p className="text-black text-center mb-4">{member.name}</p>

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
