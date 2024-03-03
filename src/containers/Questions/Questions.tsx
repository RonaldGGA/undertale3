import React, { useState } from "react";
import { Question } from "../../components/exports";
import { KeyboardArrowDown } from "@mui/icons-material";

const Data = [
  {
    question: "How do I download Undertale?",
    answer:
      "You can download Undertale from the official website or through platforms like Steam.",
  },
  {
    question: "What are the minimum system requirements to run Undertale?",
    answer:
      "The minimum system requirements for Undertale are [specify requirements here].",
  },
  {
    question: "Is Undertale available on consoles?",
    answer:
      "Yes, Undertale is available on [list consoles where it's available].",
  },
  {
    question: "Are there multiple endings in Undertale?",
    answer:
      "Yes, Undertale has multiple endings based on player choices throughout the game.",
  },
  {
    question: "Can I play Undertale on mobile devices?",
    answer:
      "Undertale is not officially available for mobile devices at the moment.",
  },
  {
    question: "Is there a multiplayer mode in Undertale?",
    answer: "No, Undertale is a single-player game with no multiplayer mode.",
  },
  {
    question: "Are there any downloadable content (DLC) for Undertale?",
    answer: "There is no official downloadable content for Undertale.",
  },
  {
    question: "How long does it take to complete Undertale?",
    answer:
      "The time to complete Undertale varies depending on the player's choices and playstyle.",
  },
  {
    question: "Is Undertale available in multiple languages?",
    answer:
      "Undertale is available in multiple languages, including [list languages available].",
  },
];

const Questions: React.FC = () => {
  const [seeing, setSeeing] = useState<boolean>(false);
  // const handleSeeClick = () => {
  //   setSeeing((prev: boolean) => !prev);
  // };
  return (
    <div className={`app__questions ${seeing ? "on" : ""}`}>
      <div className="container">
        <h4>Common Questions</h4>
        <div className="app__questions_container">
          {Data.map((item, index) => {
            return (
              <Question
                key={index}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`app__questions-seemore ${seeing ? "on" : ""}`}
        onClick={() => setSeeing((prev: boolean) => !prev)}>
        <KeyboardArrowDown />
      </div>
    </div>
  );
};

export default Questions;
