import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-[#65D6CE]' : 'text-[#2B525F] group-hover:text-[#65D6CE]'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-[#65D6CE] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-[#65D6CE] flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQAccordionProps {
  faqs: { q: string; a: string }[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-8">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.q}
          answer={faq.a}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
