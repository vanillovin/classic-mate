'use client';

import React, { useState } from 'react';

type QuizData = {
  [date: string]: {
    question: string;
    options: string[];
    answer: number;
  };
};

function ClassicQuiz() {
  const [userAnswer, setUserAnswer] = useState<number | null>(null);

  const currentDate = new Date().toISOString().split('T')[0];
  const currentDay = new Date().toLocaleDateString(undefined, { weekday: 'long' });
  const currentQuiz = quizData[currentDate] ?? quizData['2023-07-06'];

  const renderOptions = () => {
    return currentQuiz.options.map((option, index) => (
      <label key={index} className='flex items-center justify-center gap-1'>
        <input
          type="radio"
          value={index}
          checked={userAnswer === index}
          onChange={(e) => setUserAnswer(parseInt(e.target.value))}
          className="radio checked:bg-warm-vintage-burnt-orange border mr-1"
        />
        {option}
      </label>
    ));
  };

  return (
    <div className="w-full p-4 bg-white border border-black rounded-sm shadow-md text-center">
      <h2 className="flex flex-col items-center justify-center font-semibold text-2xl sm:text-3xl gap-1 drop-shadow-md">
        <span className='text-sm sm:text-base bg-autumn-gold px-2 py-1 rounded-full'>
          {currentDate.replaceAll('-', '. ')} {currentDay}
        </span>
        오늘의 클래식 퀴즈!
      </h2>
      <h3 className='font-medium text-lg my-1 underline underline-offset-4'>
        Q. {currentQuiz.question}
      </h3>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-2 py-4'>
        {renderOptions()}
      </div>
      <div>
        {userAnswer !== null ? (
          userAnswer === currentQuiz.answer ? (
            <p className="font-medium text-autumn-emerald">정답입니다!</p>
          ) : (
            <p className="font-medium text-autumn-darkred">틀렸습니다. 다시 시도해보세요!</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default ClassicQuiz;

const quizData: QuizData = {
  '2023-07-06': {
    question: '비발디의 대표작은?',
    options: ['운명교향곡', '사계', '로망스', '터키행진곡'],
    answer: 1,
  },
  '2023-07-07': {
    question: '베토벤의 9번 교향곡은 몇 번이라고 불리나요?',
    options: ['비창', '명곡', '운명', '영광'],
    answer: 2,
  },
  '2023-07-08': {
    question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
    options: ['피아노', '바이올린', '첼로', '오보에'],
    answer: 0,
  },
  '2023-07-09': {
    question: '다음 중 가장 짧은 음표는?',
    options: ['♩', '♪', '♫', '♬'],
    answer: 0,
  },
};
