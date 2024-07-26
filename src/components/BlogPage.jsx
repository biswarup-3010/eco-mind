import bpic from "../images/boyImage.jpg";
import { AddBlog } from "./AddBlog";
import gpic from "../images/girlsImage.jpeg";
import { FaHeart } from "react-icons/fa";
import { useState, useRef } from "react";
const data = [
  {
    id: 1,
    imgLink: bpic,
    Name: "Biswarup Banerjee",
    profileLink: "#",
    Event: "We started not to use fossil fuel programme ",
    eventPic:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a697d7914617.5600bb08c4ee7.jpg",
    desc: "fjanf ldsjfo fojof f ofnd fnkfn af pfidl bfidfbif wiefub aip a",
    dates: "20/04/1002",
    liked: false,
  },
  {
    id: 2,
    imgLink: gpic,
    Name: "Smrity ",
    profileLink: "#",
    Event: "We started not to use fossil fuel programme ",
    eventPic:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a697d7914617.5600bb08c4ee7.jpg",
    desc: "fjanf ldsjfo fojof f ofnd fnkfn af pfidl bfidfbif wiefub aip a",
    dates: "20/04/1002",
    liked: false,
  },
  {
    id: 3,
    imgLink: bpic,
    Name: "Biswarup Banerjee",
    profileLink: "#",
    Event: "We started not to use fossil fuel programme ",
    eventPic:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a697d7914617.5600bb08c4ee7.jpg",
    desc: "fjanf ldsjfo fojof f ofnd fnkfn af pfidl bfidfbif wiefub aip a",
    dates: "20/04/1002",
    liked: false,
  },
  {
    id: 4,
    imgLink: bpic,
    Name: "Biswarup Banerjee",
    profileLink: "#",
    Event: "We started not to use fossil fuel programme ",
    eventPic:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a697d7914617.5600bb08c4ee7.jpg",
    desc: "fjanf ldsjfo fojof f ofnd fnkfn af pfidl bfidfbif wiefub aip a",
    dates: "20/04/1002",
    liked: false,
  },
];
export default function BlogPage() {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [blogs, setBlogs] = useState(data);
  const [likedBlogs, setLikedBlogs] = useState({});
  const imgLinkRef = useRef(null);
  const nameRef = useRef(null);
  const profileLinkRef = useRef(null);
  const eventRef = useRef(null);
  const eventPicRef = useRef(null);
  const descRef = useRef(null);
  const datesRef = useRef(null);
  //
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      imgLink: imgLinkRef.current.value,
      Name: nameRef.current.value,
      profileLink: profileLinkRef.current.value,
      Event: eventRef.current.value,
      eventPic: eventPicRef.current.value,
      desc: descRef.current.value,
      dates: datesRef.current.value,
      liked: false,
    };
    setBlogs([...blogs, newBlog]);
    setShowAddBlog(false);
  };

  //
  const handleLikeClick = (id) => {
    setLikedBlogs((prevLikedBlogs) => ({
      ...prevLikedBlogs,
      [id]: !prevLikedBlogs[id],
    }));
  };
  const TriggeredAddblog = (e) => {
    setShowAddBlog(showAddBlog ? false : true);
  };

  return (
    <>
      <div className="diagonal-gradiant-rev p-8" id="blogPage">
        <h1 className="mt-16 text-2xl font-bold text-blue-500">Blogs</h1>
        <br />
        <br />
        {!showAddBlog && (
          <p
            className="text-blue-700 text-xl absolute right-10 cursor-pointer"
            onClick={TriggeredAddblog}
          >
            <span className="text-2xl">+</span>Add
          </p>
        )}
        {showAddBlog && (
          <p
            className="text-red-700 text-xl absolute right-10 cursor-pointer"
            onClick={TriggeredAddblog}
          >
            cancel
          </p>
        )}

        <br />
        <br />
        {showAddBlog && (
          <AddBlog
            imgLinkRef={imgLinkRef}
            nameRef={nameRef}
            profileLinkRef={profileLinkRef}
            eventRef={eventRef}
            eventPicRef={eventPicRef}
            descRef={descRef}
            datesRef={datesRef}
            handleSubmit={handleSubmit}
          />
        )}
        {blogs.map((element) => {
          return (
            <ol key={element.id} class="relative border-s border-green-500 ">
              <li class="ps-6 mb-5">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-green-500 dark:bg-blue-200">
                  <img class="rounded-full shadow-lg" src={element.imgLink} />
                </span>
                <div class="items-center justify-between p-4 bg-green-100/50 border border-green-900 rounded-lg shadow-sm sm:flex  dark:border-green-600">
                  <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last">
                    {element.dates}
                    <br />
                  </time>
                  <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                    <a
                      href={element.profileLink}
                      class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {element.Name}
                    </a>
                    <br />
                    <br />
                    <div className="flex flex-col sm:flex-row gap-5">
                      <img
                        src={element.eventPic}
                        className="w-full sm:h-40 sm:w-40 rounded"
                      />
                      <h1 className="text-lg font-semibold text-green-600">
                        {element.Event}
                        <br />
                        <p className="text-sm text-black">{element.desc}</p>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" absolute buttom-0 right-2">
                  <FaHeart
                    className="text-2xl"
                    style={{
                      color: likedBlogs[element.id] ? "red" : "gray",
                    }}
                    onClick={() => handleLikeClick(element.id)}
                  />
                </div>
              </li>
              <br />
            </ol>
          );
        })}
      </div>
    </>
  );
}
