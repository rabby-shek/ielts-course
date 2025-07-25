import React from "react";
import Image from "next/image";

interface LearnItemProps {
  color: string; // background color for the card
  icon: string;
  id: string;
  text: string;
}

interface LearnLayout {
  sectionTitle: string;
  learnItems: LearnItemProps[];
}

const WhatYouWillLearn = ({ sectionTitle, learnItems }: LearnLayout) => {
  return (
    <section className="px-4 py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6">{sectionTitle}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learnItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0F172A] flex items-start gap-4 p-4 rounded-xl shadow-sm text-white"
          >
            <div className="min-w-[32px] mt-1">
              <Image src="/learning.png" alt="icon" width={24} height={24} />
            </div>
            <p className="text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
