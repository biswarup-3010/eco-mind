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

    mainDesc: `A carbon footprint calculator is a tool designed to estimate and track the amount of carbon dioxide (CO₂) and other greenhouse gases emitted as a result of human activities. The goal is to help individuals and organizations understand their environmental impact and identify ways to reduce it.Estimates and Tracks Emissions
    Estimates Emissions: The calculator assesses the emissions produced from various activities. This involves inputting data about:
    `,
    dHeading1: "Energy Consumption",
    dHeading2: "Waste Management",
    dHeading3: "View Historical Data",
    dHeading4: "Energy Efficiency:",
    dHeading5: "Transportation",
    dDetails1: `Usage of electricity, gas, and other fuels.Types of vehicles used, distance traveled, fuel consumption.Amount of waste produced, recycling habits.Diet (meat, vegetarian, vegan), purchasing habits, etc. The tool continuously monitors and records emissions over time.`,
    dDetails2: `Recycling more, composting organic waste, reducing overall waste production.
    Integrates with Wearables
    Integration with wearables adds a layer of convenience and accuracy in tracking personal activities that contribute to carbon emissions.`,
    dDetails3: `Access past data to see trends and patterns. Establish emission reduction targets and track progress toward these goals.`,
    dDetails4: `Switching to energy-efficient appliances, using LED lighting, improving home insulation.`,
    dDetails5: `Carpooling, using public transportation, cycling, walking, driving fuel-efficient vehicles. Reducing meat consumption, supporting local produce, minimizing single-use plastics.`,
    OtherDetailHeading: "How to Use it ??...",
    OtherDetailsDesc: [
      {
        headLine: "Initial Setup",
        descs: `Enter basic information: location, household size, types of vehicles, dietary preferences, etc.
        Sync with wearable devices if available.`,
      },
      {
        headLine: "Daily Use",
        descs: `Daily commute, shopping, energy usage, etc.Wearables automatically track physical activities and sync data to the calculator`,
      },
      {
        headLine: "Review Data",
        descs: `Analyze weekly or monthly reports on emissions.
        Compare data against previous periods to see improvement or areas needing attention.`,
      },
      {
        headLine: "Follow Tips:",
        descs: `Implement suggested changes based on the calculator’s recommendations.
        Adjust goals and activities accordingly.`,
      },
      {
        headLine: "Track Progress",
        descs: `Use the calculator to set and review progress towards emission reduction targets.
        Celebrate milestones and achievements in reducing carbon footprint`,
      },
      {
        headLine: "Benefits",
        descs: `Increases user awareness of their carbon emissions and environmental impact.
        Actionable Insights: Provides practical and personalized advice to reduce emissions.Encourages ongoing commitment to sustainability through goal setting and progress tracking. Promotes activities like walking and cycling, which can also improve personal health`,
      },
    ],
  },
  {
    id: "2",
    image: new URL("../assets/service/sustainabilityhub.jpeg", import.meta.url)
      .href,
    heading: "Sustainability Hub",
    description:
      "Articles, videos, infographics, expert opinions, and blog on sustainability.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "3",
    image: new URL("../assets/service/EcoChall.jpeg", import.meta.url).href,
    heading: "Eco-Challenges",
    description:
      "Interactive challenges with rewards and social media sharing.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "4",
    image: new URL("../assets/service/sustainableguid.jpg", import.meta.url)
      .href,
    heading: "Sustainable Living Guide",
    description:
      "Tips, goal tracking, and app integration for sustainable habits.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "5",
    image: new URL("../assets/service/communityform.jpg", import.meta.url).href,
    heading: "Community Forum",
    description:
      "Discussion board, expert Q&As, webinars, and group management.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "6",
    image: new URL("../assets/service/bussiness.jpeg", import.meta.url).href,
    heading: "Business Sustainability Toolkit",
    description:
      "Resources, case studies, and guides for sustainable business practices.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "7",
    image: new URL("../assets/service/newsupdate.jpg", import.meta.url).href,
    heading: "News and Updates",
    description:
      "Latest environmental news, updates, and newsletter subscription.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
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
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "9",
    image: new URL("../assets/service/sustainabilityhub.jpeg", import.meta.url)
      .href,
    heading: "Sustainability Hub",
    description:
      "Articles, videos, infographics, expert opinions, and blog on sustainability.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "10",
    image: new URL("../assets/service/EcoChall.jpeg", import.meta.url).href,
    heading: "Eco-Challenges",
    description:
      "Interactive challenges with rewards and social media sharing.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "11",
    image: new URL("../assets/service/sustainableguid.jpg", import.meta.url)
      .href,
    heading: "Sustainable Living Guide",
    description:
      "Tips, goal tracking, and app integration for sustainable habits.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "12",
    image: new URL("../assets/service/communityform.jpg", import.meta.url).href,
    heading: "Community Forum",
    description:
      "Discussion board, expert Q&As, webinars, and group management.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "13",
    image: new URL("../assets/service/bussiness.jpeg", import.meta.url).href,
    heading: "Business Sustainability Toolkit",
    description:
      "Resources, case studies, and guides for sustainable business practices.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "14",
    image: new URL("../assets/service/newsupdate.jpg", import.meta.url).href,
    heading: "News and Updates",
    description:
      "Latest environmental news, updates, and newsletter subscription.",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
  },
  {
    id: "15",
    image: new URL("../assets/service/tree.jpg", import.meta.url).href,
    heading: "Tree Plantation",
    description:
      "Tree planting is the process of transplanting tree seedlings....",
    mainDesc: ``,
    dHeading1: "",
    dHeading2: "",
    dHeading3: "",
    dHeading4: "",
    dHeading5: "",
    dDetails1: ``,
    dDetails2: ``,
    dDetails3: ``,
    dDetails4: ``,
    dDetails5: ``,
    OtherDetailHeading: "",
    OtherDetailsDesc: [],
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
