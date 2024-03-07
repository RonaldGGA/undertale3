import React, { useState, FC } from "react";
import { ArrowCircleRightTwoTone } from "@mui/icons-material";

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: FC<QuestionProps> = ({ question, answer }) => {
  const [opened, setOpened] = useState<boolean>(false);

  const handleClick = () => {
    setOpened((prev: boolean) => !prev);
  };

  return (
    <div className="app__questions_container-main" onClick={handleClick}>
      <div className="app__questions_container-main-question">
        <span className={opened ? "active" : ""}>
          <ArrowCircleRightTwoTone style={{ fontSize: "30px" }} />
        </span>
        <p>{question}</p>
      </div>
      <div
        className={`app__questions_container-main-answer ${
          opened ? "active" : ""
        }`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
