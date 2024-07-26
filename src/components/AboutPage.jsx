import bpic from "../images/boyImage.jpg";
export default function AboutPage() {
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
    <>
      <div
        className="p-5 diagonal-gradiant-rev overflow-hidden mb-0 h-auto md:min-h-screen lg:min-h-screen xl:min-h-screen"
        id="aboutPage"
      >
        <h1 className="mt-16 text-2xl font-bold text-blue-500">About Us</h1>
        <br />
        <h2 className="text-xl">
          Our main motive is_{" "}
          <span className="text-xl font-bold text-red-500">
            {" "}
            "Empowering Sustainable Living for a Better Tomorrow"
          </span>
          <img
            src="https://img.freepik.com/premium-photo/man-enjoying-green-beautiful-nature-woods-forest-around-her-concept-healthy-natural-lifestyle_641010-22142.jpg"
            className="w-full h-auto rounded-[10px] md:w-4/5 md:p-5 mx-auto"
          />
        </h2>
        <ul>
          <li>
            <p className="text-xl">
              <br />
              <span className="text-green-700 font-bold pl-0 text-xl underline">
                EcoMind
              </span>{" "}
              a concatenation of two words :{" "}
              <span className="text-blue-800 font-bold">Ecology</span> and{" "}
              <span className="text-blue-800 font-bold">Mindset</span>, your
              personalized guide to sustainable living. We believe that small
              steps today can lead to a sustainable tomorrow. Our mission is to
              raise awareness about global warming and its impact on the
              environment, educate individuals about sustainable practices, and
              encourage them to take action.
            </p>
          </li>
          <br />
          <li>
            <img
              src="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg"
              className="w-full h-auto rounded-[10px] md:w-4/5 md:p-5 mx-auto"
            />
            <br />
            <span className="text-green-700 text-xl font-bold underline pl-0 pr-3">
              Story of EcoMind
            </span>
            It was founded by a group of passionate individuals who share a
            common goal: to make a positive impact on the environment and the
            user's thinkings. We saw the need for a platform that provides
            practical tips, resources, and tools to help individuals and
            businesses adopt sustainable practices. With EcoLife, we aim to
            create a community that inspires and supports each other in making
            environmentally conscious choices.
          </li>
          <br />
        </ul>
        <h1 className="mt-16 text-2xl font-bold text-blue-500">
          Our Team Members
        </h1>
        <br />
        <div className="flex flex-wrap justify-center gap-5 overflow-x-auto scroll-smooth">
          {members.map((member) => (
            <div
              key={member.id}
              className="relative min-h-40 w-32 border border-green-200 bg-blue-200/50 rounded-lg overflow-hidden "
            >
              <img
                src={member.picture}
                alt={`${member.name}'s picture`}
                className="max-w-full h-auto"
              />
              <p>{member.name}</p>
              <br />
              <br />
              <a href={member.fb}>
                {" "}
                <button className="absolute h-8 w-auto p-1 bg-blue-500 bottom-0 right-0 cursor-pointer text-white">
                  visit
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
