"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import HtmlRenderer from "./HtmlRenderer";
interface Item {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  sectionTitle?: string;
  faqItems?: Item[]; // <-- optional with default fallback
}

const FrequentlyAskedQuestions = ({
  sectionTitle = "",
  faqItems = [], // <-- fallback to empty array
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-4 py-8">
      {sectionTitle && (
        <h2 className="text-xl md:text-2xl font-bold mb-6">{sectionTitle}</h2>
      )}

      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openIndex === item.id;
          return (
            <div
              key={item.id}
              className="border border-red-700  bg-white rounded-md shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-full flex justify-between items-center px-5 py-4 text-left transition 
                           ${isOpen ? "bg-black text-white" : ""}`}
              >
                <div className="text-base md:text-lg font-medium ">
                  <b>{item.question}</b>
                </div>
                <span className="text-xl ">
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && item.answer && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-5 pb-5 text-sm md:text-base  overflow-hidden"
                  >
                    <div className="pt-4">
                      <HtmlRenderer html={item.answer} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
