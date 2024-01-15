"use client";
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from 'react';

const quizQuestions: { question: string; options: string[]; answer: string }[] = [
  {
    question: "What is React?",
    options: ["A library for building user interfaces", "A database", "A design tool"],
    answer: "A library for building user interfaces"
  },
  {
    question: "What is Next.js?",
    options: ["A React framework", "A backend framework", "A database"],
    answer: "A React framework"
  },
  {
    question: "What is Tailwind CSS?",
    options: [ "A JavaScript library", "A CSS framework", "A React component library"],
    answer: "A CSS framework"
  },
  {
    question: "Which hook is used to manage state in a functional React component?",
    options: ["useState", "useEffect", "useReducer"],
    answer: "useState"
  },
  {
    question: "How do you fetch data at build time in a Next.js app?",
    options: ["getServerSideProps", "getStaticProps", "getInitialProps"],
    answer: "getStaticProps"
  },
  {
    question: "Which of the following is a feature of Next.js?",
    options: ["Server-side rendering", "Direct database integration", "State management"],
    answer: "Server-side rendering"
  },
  {
    question: "What command is used to create a new Next.js project?",
    options: ["npx create-next-app", "npm create-react-app", "npx create-next-project"],
    answer: "npx create-next-app"
  },
  {
    question: "How do you add CSS to a Next.js component?",
    options: ["Importing a CSS file", "Inline styles", "Both A and B"],
    answer: "Both A and B"
  }
];

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const handleOptionChange = (questionIndex: number, option: string) => {
    setSelectedOptions(prevSelected => ({
      ...prevSelected,
      [questionIndex]: option
    }));
  };

  const isOptionSelected = (questionIndex: number, option: string) => {
    return selectedOptions[questionIndex] === option;
  };

  const isCorrectAnswer = (questionIndex: number, option: string) => {
    return quizQuestions[questionIndex].answer === option;
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-3">Welcome to the quiz!</h2>
        <p className="max-w-[30ch] text-sm opacity-50 m-0">Let&apos;s start learning.</p>

      </div>

      <Carousel className="w-full max-w-5xl">
        <CarouselContent>
          {quizQuestions.map((question, index) => (
            <CarouselItem key={index} className="text-center p-4">
              <h3 className="font-semibold mb-4">{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id={`question-${index}-option-${optionIndex}`}
                    name={`question-${index}`}
                    checked={isOptionSelected(index, option)}
                    onChange={() => handleOptionChange(index, option)}
                    className="mr-2"
                  />
                  <label htmlFor={`question-${index}-option-${optionIndex}`} className={`cursor-pointer ${isOptionSelected(index, option) && isCorrectAnswer(index, option) ? 'text-green-500' : isOptionSelected(index, option) && !isCorrectAnswer(index, option) ? 'text-red-500' : ''}`}>
                    {option}
                  </label>
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
