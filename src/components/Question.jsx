/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

const Question = (props) => {
  const { question, answer } = props;
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <p className="text-xl">{question}</p>
        <button onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <BsDashCircle size={27} /> : <BsPlusCircle size={27} />}
        </button>
      </div>
      {isExpand && <p className="text-lg">{answer}</p>}
    </>
  );
};

export default Question;
