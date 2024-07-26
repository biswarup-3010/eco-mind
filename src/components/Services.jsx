import React from "react";
 
const Card = ({ image, heading, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={heading} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Define your card data
const cardData = [
  {
    image: new URL('../assets/service/carfoot.jpeg', import.meta.url).href,
    heading: 'Carbon Footprint Calculator',
    description: 'Estimates and tracks emissions, offers reduction tips, integrates with wearables.',
  },
  {
    image: new URL('../assets/service/sustainabilityhub.jpeg', import.meta.url).href,
    heading: 'Sustainability Hub',
    description: 'Articles, videos, infographics, expert opinions, and blog on sustainability.',
  },
  {
    image: new URL('../assets/service/EcoChall.jpeg', import.meta.url).href,
    heading: 'Eco-Challenges',
    description: 'Interactive challenges with rewards and social media sharing.',
  },
  {
    image: new URL('../assets/service/sustainableguid.jpg', import.meta.url).href,
    heading: 'Sustainable Living Guide',
    description: 'Tips, goal tracking, and app integration for sustainable habits.',
  },
  {
    image: new URL('../assets/service/communityform.jpg', import.meta.url).href,
    heading: 'Community Forum',
    description: 'Discussion board, expert Q&As, webinars, and group management.',
  },
  {
    image: new URL('../assets/service/bussiness.jpeg', import.meta.url).href,
    heading: 'Business Sustainability Toolkit',
    description: 'Resources, case studies, and guides for sustainable business practices.',
  },
  {
    image: new URL('../assets/service/newsupdate.jpg', import.meta.url).href,
    heading: 'News and Updates',
    description: 'Latest environmental news, updates, and newsletter subscription.',
  },
  {
    image: new URL('../assets/service/tree.jpg', import.meta.url).href,
    heading: 'Tree Plantation',
    description: 'Tree planting is the process of transplanting tree seedlings....',
  },
];

export default function Services() {
  return (
    <>
      <div id="servicesPage" className="w-full p-10 mt-0 diagonal-gradiant">
        <div className="heading mt-16 text-2xl font-bold text-blue-500">Our Services</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cardData.map((card, index) => (
            <Card key={index} image={card.image} heading={card.heading} description={card.description} />
          ))}
        </div>
      </div>
    </>
  );
}
