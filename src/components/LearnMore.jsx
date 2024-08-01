import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const LearnMore = ({ cardData }) => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const card = cardData.find((c) => c.id.toString() === cardId);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8" id="servicesPage">
      <h1 className="text-3xl font-bold mb-4">{card.heading}</h1>
      <img src={card.image} alt="" />
      <p className="text-gray-700 text-base mb-4">{card.description}</p>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition-colors duration-300"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default LearnMore;
