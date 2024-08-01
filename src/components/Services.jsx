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
    image: new URL("../assets/service/sustainabilityhub.jpeg", import.meta.url).href,
    heading: "Sustainability Hub",
    description: "Articles, videos, infographics, expert opinions, and blog on sustainability.",
  
    mainDesc: `The Sustainability Hub is a comprehensive resource platform providing valuable content to promote sustainable living. It features articles, videos, infographics, expert opinions, and blog posts that cover a wide range of topics related to sustainability and environmental consciousness.`,
    
    dHeading1: "Informative Articles",
    dHeading2: "Engaging Videos",
    dHeading3: "Detailed Infographics",
    dHeading4: "Expert Opinions",
    dHeading5: "Interactive Blog",
  
    dDetails1: `In-depth articles on various sustainability topics such as renewable energy, waste management, and conservation efforts. Regular updates keep you informed about the latest trends and practices in sustainability.`,
    
    dDetails2: `Engaging and educational videos that illustrate sustainable practices, eco-friendly tips, and success stories from around the world. Visual content makes complex concepts easy to understand and implement.`,
    
    dDetails3: `Infographics that provide clear and concise information on sustainability issues, statistics, and solutions. Easy to share and great for quick learning.`,
    
    dDetails4: `Opinions and insights from sustainability experts, industry leaders, and environmental activists. Learn from the experiences and knowledge of those at the forefront of the sustainability movement.`,
    
    dDetails5: `An interactive blog that allows users to share their own experiences, ask questions, and engage with a community of like-minded individuals committed to sustainability. Regular contributions from guest bloggers and thought leaders.`,
  
    OtherDetailHeading: "How to Use the Hub",
    
    OtherDetailsDesc: [
      {
        headLine: "Explore Content",
        descs: `Browse through various categories of articles, videos, and infographics. Use the search feature to find specific topics of interest.`
      },
      {
        headLine: "Stay Updated",
        descs: `Subscribe to newsletters and notifications to receive the latest content and updates. Follow the blog for regular posts and discussions.`
      },
      {
        headLine: "Engage with Experts",
        descs: `Participate in webinars, Q&A sessions, and forums hosted by sustainability experts. Gain deeper insights and practical advice.`
      },
      {
        headLine: "Share and Collaborate",
        descs: `Share your favorite content on social media and collaborate with others in the sustainability community. Contribute to the blog by sharing your own experiences and tips.`
      },
      {
        headLine: "Implement Tips",
        descs: `Apply the tips and best practices shared in the content to your daily life. Track your progress and make continuous improvements toward a sustainable lifestyle.`
      },
      {
        headLine: "Benefits",
        descs: `Increased knowledge and awareness about sustainability. Practical advice and tips for living a more eco-friendly life. Access to a community of sustainability enthusiasts and experts. Continuous learning and engagement opportunities.`
      }
    ]
  },
  {
    id: "3",
    image: new URL("../assets/service/EcoChall.jpeg", import.meta.url).href,
    heading: "Eco-Challenges",
    description: "Interactive challenges with rewards and social media sharing.",
  
    mainDesc: `Eco-Challenges are interactive activities designed to encourage sustainable practices through fun and engaging tasks. Participants can complete challenges, earn rewards, and share their achievements on social media, fostering a community of environmentally conscious individuals.`,
  
    dHeading1: "Variety of Challenges",
    dHeading2: "Reward System",
    dHeading3: "Social Media Integration",
    dHeading4: "Community Engagement",
    dHeading5: "Educational Content",
  
    dDetails1: `A wide range of challenges covering various aspects of sustainability, such as reducing plastic use, conserving water, and promoting recycling. Challenges are designed for different levels of difficulty and can be completed individually or in groups.`,
  
    dDetails2: `Earn points, badges, and rewards for completing challenges. Rewards can include discounts on eco-friendly products, digital badges, and recognition within the community. The reward system adds motivation and a sense of accomplishment.`,
  
    dDetails3: `Seamless integration with social media platforms to share progress, achievements, and completed challenges. Encourage friends and family to join the challenge and create a positive impact together.`,
  
    dDetails4: `Engage with a community of like-minded individuals who are also participating in eco-challenges. Share tips, experiences, and support each other in achieving sustainability goals. Join community events and group challenges for a collective impact.`,
  
    dDetails5: `Each challenge includes educational content to help participants understand the importance of the activity and how it contributes to sustainability. Learn about the environmental impact of everyday actions and discover new ways to live sustainably.`,
  
    OtherDetailHeading: "How to Participate",
    
    OtherDetailsDesc: [
      {
        headLine: "Sign Up",
        descs: `Create an account on the Eco-Challenges platform. Fill in your profile details and select the types of challenges you’re interested in.`
      },
      {
        headLine: "Choose a Challenge",
        descs: `Browse through the list of available challenges. Select a challenge that interests you and start participating.`
      },
      {
        headLine: "Complete Tasks",
        descs: `Follow the instructions for each challenge task. Complete the tasks within the given timeframe and earn points and rewards.`
      },
      {
        headLine: "Share Achievements",
        descs: `Use the social media integration to share your progress and achievements. Inspire others to join and participate in eco-challenges.`
      },
      {
        headLine: "Track Progress",
        descs: `Monitor your progress through the platform’s dashboard. View completed challenges, earned rewards, and set new goals for yourself.`
      },
      {
        headLine: "Benefits",
        descs: `Promotes sustainable practices through fun and engaging activities. Provides a sense of community and collective action towards environmental goals. Offers rewards and recognition to motivate continued participation. Educates participants on the importance of sustainability and how to make a positive impact.`
      }
    ]
  },  
  {
    id: "4",
    image: new URL("../assets/service/sustainableguid.jpg", import.meta.url).href,
    heading: "Sustainable Living Guide",
    description: "Tips, goal tracking, and app integration for sustainable habits.",
  
    mainDesc: `The Sustainable Living Guide provides practical tips, goal tracking, and app integration to help individuals adopt and maintain sustainable habits. This guide is a comprehensive resource for anyone looking to make positive changes for the environment.`,
  
    dHeading1: "Practical Tips",
    dHeading2: "Goal Tracking",
    dHeading3: "App Integration",
    dHeading4: "Personalized Recommendations",
    dHeading5: "Progress Reports",
  
    dDetails1: `Offers actionable tips on various aspects of sustainable living, including energy conservation, waste reduction, sustainable shopping, and more. Tips are easy to follow and implement in daily life.`,
  
    dDetails2: `Allows users to set and track sustainability goals. Whether it's reducing energy consumption, minimizing waste, or increasing the use of renewable resources, the guide helps monitor progress and stay motivated.`,
  
    dDetails3: `Integrates with popular apps to provide a seamless experience. Sync data from fitness trackers, smart home devices, and other apps to get a comprehensive view of your sustainability efforts.`,
  
    dDetails4: `Provides personalized recommendations based on user preferences and habits. The guide adapts to individual needs and offers tailored advice to maximize sustainability impact.`,
  
    dDetails5: `Generates detailed progress reports to help users see the impact of their efforts. Reports include statistics, achievements, and areas for improvement, making it easy to stay on track.`,
  
    OtherDetailHeading: "How to Get Started",
    
    OtherDetailsDesc: [
      {
        headLine: "Download the Guide",
        descs: `Access the Sustainable Living Guide online or download the app. Create a profile to start receiving personalized tips and recommendations.`
      },
      {
        headLine: "Set Goals",
        descs: `Define your sustainability goals within the guide. Choose from predefined goals or create custom ones that align with your lifestyle.`
      },
      {
        headLine: "Integrate Apps",
        descs: `Connect the guide to your favorite apps and devices. Sync data to get real-time updates on your sustainability efforts.`
      },
      {
        headLine: "Follow Tips",
        descs: `Implement the practical tips provided by the guide. Make small, sustainable changes in your daily routine to achieve your goals.`
      },
      {
        headLine: "Track Progress",
        descs: `Use the goal tracking and progress reports to monitor your achievements. Adjust your efforts based on the insights provided by the guide.`
      },
      {
        headLine: "Benefits",
        descs: `Provides a structured approach to sustainable living. Helps maintain motivation through goal tracking and progress reports. Offers personalized advice tailored to individual habits. Encourages the adoption of sustainable practices through easy-to-follow tips.`
      }
    ]
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
