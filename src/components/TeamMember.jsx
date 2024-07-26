import React from "react";
import bpic from "../images/boyImage.jpg";

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
        <h1 className="text-2xl text-green-500 text-left mb-4">
          Join the Movement towards a Greener Tomorrow
        </h1>
        <p className="text-sm text-left mb-4">
          "At EcoMind, we're driven by a shared passion for sustainable
          development and a determination to combat the pressing threat of
          global warming. If you're equally passionate about preserving the
          beauty and wonder of our natural world, we invite you to join our
          dynamic team of eco-warriors and contribute to shaping a brighter,
          more sustainable future for all."
        </p>
    
        <h1 className="text-2xl text-green-500 text-left mb-4">
          Why Join the EcoMind Family?
        </h1>
        <ul className="text-sm text-left mb-4">
          <li className="mb-2">
            Imagine being part of a vibrant community that celebrates
            individuality, creativity, and innovation. At EcoMind, we're
            committed to fostering a culture of collaboration, inclusivity, and
            mutual respect.
          </li>
          <li className="mb-2">
            By joining our team, you'll have the opportunity to:
            <ul className="list-disc list-inside">
              <li className="mb-1">Make a tangible difference in the lives of people and the planet through our impactful projects</li>
              <li className="mb-1">Unlock your full potential through our comprehensive training programs, mentorship initiatives, and hands-on experiences</li>
              <li className="mb-1">Thrive in a flexible and supportive work environment that prioritizes your well-being, work-life balance, and personal growth</li>
              <li className="mb-1">Be part of a dynamic team that's shaping the future of sustainable development and environmental stewardship</li>
            </ul>
          </li>
        </ul>
        <p className="text-green-400 text-left mb-4">
          If you have any questions or would like to learn more about our
          organization, please don't hesitate to contact us: <br />
          <span className="text-blue-500">
            +91 123-456-7890 | ecomind@gmail.com | Haldia, India
          </span>
          <br /> We look forward to hearing from you and exploring how you can
          join our team!
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-blue-500 text-center p-4 mb-4">
          Our Team Members
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          {members.map((member) => (
            <div
              key={member.id}
              className="relative min-h-40 w-32 border border-green-200 bg-blue-100 rounded-lg overflow-hidden flex flex-col items-center"
            >
              <img
                src={member.picture}
                alt={`${member.name}'s picture`}
                className="w-full h-24 object-cover"
              />
              <p className="text-black text-center">{member.name}</p>
              <a href={member.fb}>
                <button className="absolute h-8 w-auto p-1 bg-blue-500 bottom-0 right-0 cursor-pointer text-white">
                  visit
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
