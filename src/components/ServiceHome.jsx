import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, heading, description }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
        <img src={image} alt={heading} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 text-center">{heading}</h2>
            <p className="text-gray-700 text-base mb-4 text-center">
              {description}
            </p>
          </div>
          <div className="flex justify-center">
            <Link to={`/learn-more/${id}`}>
              <a
                href="#servicesPage"
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 mt-auto"
              >
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceHome = ({ cardData }) => {
  return (
    <div id="servicesPage" className="w-full p-10 mt-0 diagonal-gradiant">
      <div className="heading mt-16 text-3xl font-bold text-blue-500">
        Our Services
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceHome;
