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
    <div className="mx-auto">
      <div
        className="diagonal-gradient mx-auto p-4 h-auto sm:min-h-screen fixed top-0 w-full mx-auto z-10 bg-green-300/90 overflow-y-auto max-h-screen"
        id="servicesPage"
      >
        <br />
        <h1 className="text-2xl font-bold mb-4">{card.heading}</h1>
        <img src={card.image} className="w-full md:w-1/2" />
        <br />
        <p className="text-gray-700 mb-4 text-xl">{card.mainDesc}</p>
        {/* ------------------------------------ */}
        <div class="container relative flex flex-col justify-between h-full w-full md:max-w-6xl mx-auto xl:px-0 mt-5">
          <div class="w-full">
            <div class="flex flex-col w-full mb-10 sm:flex-row">
              <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                        {card.dHeading1}
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p class="mb-2 text-gray-600">{card.dDetails1}</p>
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                        {card.dHeading2}
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p class="mb-2 text-gray-600">{card.dDetails2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-full mb-5 sm:flex-row">
              <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                        {card.dHeading3}
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p class="mb-2 text-gray-600">{card.dDetails3}</p>
                  </div>
                </div>
              </div>
              <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                        {card.dHeading4}
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p class="mb-2 text-gray-600">{card.dDetails4}</p>
                  </div>
                </div>
              </div>
              <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                  <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div class="flex items-center -mt-1">
                      <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">
                        {card.dHeading5}
                      </h3>
                    </div>
                    <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p class="mb-2 text-gray-600">{card.dDetails5}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-black text-xl mx-auto">
          <h1 className="font-bold mx-auto">{card.OtherDetailHeading}</h1>
          <br />
          <ul className="gap-5">
            {card.OtherDetailsDesc.map((component) => {
              return (
                <>
                  {" "}
                  <li key={component.id}>
                    <span className="font-bold text-lg underline">
                      {component.headLine}:
                    </span>
                    {component.descs}
                  </li>
                  <br />
                </>
              );
            })}
          </ul>
        </div>
        {/* ------------------------------------ */}
        <br />
        <br />
        <br />
        <button
          className="absolute right-5 buttom-10 bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default LearnMore;
