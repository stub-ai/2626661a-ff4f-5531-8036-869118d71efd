import React from 'react';

interface BilingualWordProps {
  word1: string;
  word2: string;
}

const BilingualWord: React.FC<BilingualWordProps> = ({ word1, word2 }) => {
  return (
    <div className="flex justify-between w-full">
      <p>{word1}</p>
      <p>{word2}</p>
    </div>
  );
};

export default BilingualWord;