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
    <>
      <div className="w-full sm:w-1/2 p-4">
        <h1 className="text-2xl text-green-500/90"> Hey User,</h1>
        <br />
        <p className="text-xl">
          We're Team EcoMind a non-profit organization dedicated to promoting
          sustainable development and fighting against global warming. I came
          across your profile and was impressed with your passion for
          environmental issues. We'd love to talk to you about an opportunity to
          join our team and make a real difference.
        </p>
        <br />
        <br />
        <div className="w-full">
          <h1 className="p-4 text-2xl font-bold text-blue-500">
            Our Team Members
          </h1>
          <br />
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
      </div>
    </>
  );
}
