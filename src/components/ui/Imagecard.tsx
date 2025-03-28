import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "./custom-button";

interface CardData {
  id: number;
  imageSrc: string;
  projectName: string;
  county: string;
  numberOfFiles: number;
  status: string;
  statusPercentage: number;
}

const initialCards: CardData[] = [
  { id: 1, imageSrc: "https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0", projectName: "Michael Owens Estate", county: "Texas", numberOfFiles: 25, status: "Uploading", statusPercentage: 22 },
  { id: 2, imageSrc: "https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0", projectName: "Frank Seardon", county: "Texas", numberOfFiles: 10, status: "Processing", statusPercentage: 34 },
  { id: 3, imageSrc: "https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0", projectName: "Michael Estate", county: "Texas", numberOfFiles: 500, status: "Confirmed", statusPercentage: 100 },
  { id: 4, imageSrc: "https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0", projectName: "Johnson Property", county: "California", numberOfFiles: 75, status: "Processing", statusPercentage: 50 },
  { id: 5, imageSrc: "https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0", projectName: "Smith Lands", county: "Nevada", numberOfFiles: 200, status: "Uploading", statusPercentage: 15 },
  { id: 6, imageSrc: "https://cdn.builder.io/api/v1/image/assets/b28b963e53c444f085ce79615ad630d0/d7cc5774a3b748e811759e356ca41f54d7f62cf0", projectName: "Williams Ranch", county: "Arizona", numberOfFiles: 350, status: "Confirmed", statusPercentage: 100 },
];

const FileUploadSection: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const bringCardToFront = (cardId: number) => {
    const cardToFront = cards.find((card) => card.id === cardId);
    if (cardToFront) {
      const reorderedCards = [cardToFront, ...cards.filter((card) => card.id !== cardId)];
      setCards(reorderedCards);
      setSelectedCardId(cardId);
    }
  };

  const cycleToNextCard = () => {
    const currentFrontCardId = cards[0].id;
    const nextCardId = (currentFrontCardId % 6) + 1;
    bringCardToFront(nextCardId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-[rgba(254,185,185,0.4)] flex w-full flex-col items-center justify-center mt-[50px] px-10 py-[68px] rounded-[10px] max-md:px-5 shadow-sm"
    >
      <h2 className="text-[rgba(32,33,36,1)] text-4xl font-sans leading-loose text-center">
        Drag-and-drop to upload your landman provided files and runsheet
      </h2>

      {/* Card Carousel Section - Centered */}
      <div className="flex w-full justify-center mt-[200px]">
        <div className="relative w-full max-w-[800px] h-[300px] mb-1">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{
                scale: 1,
                y: index * -30,
                x: 0,
                zIndex: 50 - index,
                width: "100%",
                maxWidth: "700px",
                position: "absolute",
              }}
              animate={{
                scale: selectedCardId === card.id ? 1.05 : 1,
                y: selectedCardId === card.id ? -50 : index * -30,
                x: selectedCardId === card.id ? 0 : index * 50,
                zIndex: selectedCardId === card.id ? 50 : 50 - index,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 50,
              }}
              className="absolute left-0 right-0 mx-auto w-full max-w-[600px] cursor-pointer"
              onClick={() => setSelectedCardId(card.id === selectedCardId ? null : card.id)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-full h-70 flex justify-center items-center overflow-hidden">
                  <img src={card.imageSrc} alt={card.projectName} className="max-w-full h-full object-cover object-center" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Fixed Alignment */}
<div className="w-full max-w-[1200px] mt-20 flex items-center justify-between pt-6">
  {/* Centered Join Button */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <CustomButton className="hover:scale-105 transition-transform duration-300">
      Join the Early Access Program
    </CustomButton>
  </div>

  {/* Right-Aligned Number Buttons and Arrow */}
  <div className="ml-auto flex items-center gap-2">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <div
        key={num}
        onClick={() => bringCardToFront(num)}
        className={`flex items-center justify-center w-8 h-8 rounded-full border-white border-solid border-2 text-xs font-medium transition-all duration-300 hover:scale-110 cursor-pointer ${
          cards[0].id === num ? "bg-[rgba(254,185,185,1)]" : "bg-neutral-200"
        }`}
      >
        {num}
      </div>
    ))}
    <div
      onClick={cycleToNextCard}
      className="text-[#202124] text-[40px] font-bold leading-[0.4] my-auto transition-transform duration-300 hover:translate-x-1 cursor-pointer"
    >
      →
    </div>
  </div>
</div>

    </motion.div>
  );
};

export default FileUploadSection;
