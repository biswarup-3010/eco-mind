import ServiceHome from "./ServiceHome.jsx";
import LearnMore from "./LearnMore.jsx";
import { Routes, Route } from "react-router-dom";

const cardData = [
  {
    id: "1",
    image: new URL("../assets/service/carfoot.jpeg", import.meta.url).href,
    heading: "Carbon Footprint Calculator",
    description:
      "Estimates and tracks emissions, offers reduction tips, integrates with wearables.",
  },
  {
    id: "2",
    image: new URL("../assets/service/sustainabilityhub.jpeg", import.meta.url)
      .href,
    heading: "Sustainability Hub",
    description:
      "Articles, videos, infographics, expert opinions, and blog on sustainability.",
  },
  {
    id: "3",
    image: new URL("../assets/service/EcoChall.jpeg", import.meta.url).href,
    heading: "Eco-Challenges",
    description:
      "Interactive challenges with rewards and social media sharing.",
  },
  {
    id: "4",
    image: new URL("../assets/service/sustainableguid.jpg", import.meta.url)
      .href,
    heading: "Sustainable Living Guide",
    description:
      "Tips, goal tracking, and app integration for sustainable habits.",
  },
  {
    id: "5",
    image: new URL("../assets/service/communityform.jpg", import.meta.url).href,
    heading: "Community Forum",
    description:
      "Discussion board, expert Q&As, webinars, and group management.",
  },
  {
    id: "6",
    image: new URL("../assets/service/bussiness.jpeg", import.meta.url).href,
    heading: "Business Sustainability Toolkit",
    description:
      "Resources, case studies, and guides for sustainable business practices.",
  },
  {
    id: "7",
    image: new URL("../assets/service/newsupdate.jpg", import.meta.url).href,
    heading: "News and Updates",
    description:
      "Latest environmental news, updates, and newsletter subscription.",
  },
  {
    id: "8",
    image: new URL("../assets/service/tree.jpg", import.meta.url).href,
    heading: "Tree Plantation",
    description:
      "Tree planting is the process of transplanting tree seedlings....",
    image: new URL("../assets/service/carfoot.jpeg", import.meta.url).href,
    heading: "Carbon Footprint Calculator",
    description:
      "Estimates and tracks emissions, offers reduction tips, integrates with wearables.",
  },
  {
    id: "9",
    image: new URL("../assets/service/sustainabilityhub.jpeg", import.meta.url)
      .href,
    heading: "Sustainability Hub",
    description:
      "Articles, videos, infographics, expert opinions, and blog on sustainability.",
  },
  {
    id: "10",
    image: new URL("../assets/service/EcoChall.jpeg", import.meta.url).href,
    heading: "Eco-Challenges",
    description:
      "Interactive challenges with rewards and social media sharing.",
  },
  {
    id: "11",
    image: new URL("../assets/service/sustainableguid.jpg", import.meta.url)
      .href,
    heading: "Sustainable Living Guide",
    description:
      "Tips, goal tracking, and app integration for sustainable habits.",
  },
  {
    id: "12",
    image: new URL("../assets/service/communityform.jpg", import.meta.url).href,
    heading: "Community Forum",
    description:
      "Discussion board, expert Q&As, webinars, and group management.",
  },
  {
    id: "13",
    image: new URL("../assets/service/bussiness.jpeg", import.meta.url).href,
    heading: "Business Sustainability Toolkit",
    description:
      "Resources, case studies, and guides for sustainable business practices.",
  },
  {
    id: "14",
    image: new URL("../assets/service/newsupdate.jpg", import.meta.url).href,
    heading: "News and Updates",
    description:
      "Latest environmental news, updates, and newsletter subscription.",
  },
  {
    id: "15",
    image: new URL("../assets/service/tree.jpg", import.meta.url).href,
    heading: "Tree Plantation",
    description:
      "Tree planting is the process of transplanting tree seedlings....",
  },
];

export default function Services() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ServiceHome cardData={cardData} />} />
        <Route
          path="/learn-more/:cardId"
          element={<LearnMore cardData={cardData} />}
        />
      </Routes>
    </>
  );
}
