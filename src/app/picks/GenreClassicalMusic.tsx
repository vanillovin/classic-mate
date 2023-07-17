'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';

function GenreClassicalMusic({ classics }: { classics: Classic[] }) {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const genres = ['all', ...new Set(classics?.map(classic => classic.genre).flat())];
  const description = genreDescriptions[selectedGenre];
  const results = selectedGenre === 'all'
    ? classics
    : classics.filter(classic => classic.genre === selectedGenre);

  return (
    <div>
      <div className='flex flex-wrap items-center justify-center'>
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`warm-vintage-off-white-1 px-2 sm:border-r last:border-r-0 text-warm-vintage-off-white hover:bg-white hover:bg-opacity-20
              ${genre === selectedGenre && 'border-b border-white text-white font-medium'}
            `}
          >
            {genre}
          </button>
        ))}
      </div>
      <p className='text-sm sm:text-base text-center p-4 font-light text-autumn-darkblue'>
        {description}
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 rounded-sm max-h-80 overflow-y-auto border p-2 border-black example'>
        {results.map(result => (
          <Link
            key={result.id}
            href={`/classics/${result.id}`}
            className='border border-black rounded-sm flex items-center justify-center bg-warm-vintage-off-white p-2 shadow-md hover:bg-pantone-berkeley-blue hover:text-warm-vintage-off-white transition-all'
          >
            <div className='text-center font-medium text-sm sm:text-base'>
              {result.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GenreClassicalMusic;

const genreDescriptions: Record<string, string> = {
  "협주곡": "독주자와 오케스트라 간의 대립과 상호작용을 강조하는 형태의 작품입니다. 독주자가 악기를 연주하면서 오케스트라가 독주자를 도와주고 응답하며 함께 연주합니다.",
  "교향곡": "대규모 오케스트라로 구성된 대형 작품입니다. 보통은 4악장 구조를 가지며, 다양한 악기 그룹과 섹션들이 함께 연주하여 풍부하고 화려한 음악적 경험을 제공합니다.",
  "실내악": "작은 규모의 앙상블을 위한 음악입니다. 주로 협주곡이나 교향곡과는 달리 소수의 연주자로 이루어지며, 대표적으로 현악 사중주, 현악 사중주, 현악 삼중주 등이 있습니다.",
  "교향곡 동화": "주제나 이야기를 음악으로 표현하는 형태의 교향곡입니다. 음악을 통해 이야기의 흐름이나 상황을 표현하며, 일련의 에피소드를 포함할 수 있습니다.",
  "춤곡": "춤을 위해 작곡된 음악으로, 리듬과 운동성이 강조됩니다. 다양한 춤 스타일에 맞게 작곡되며, 발레 음악이나 극장 춤곡 등이 포함될 수 있습니다.",
  "소나타": "주로 한 명의 연주자와 악기를 위해 작곡된 형태의 음악입니다. 일반적으로 3악장 또는 4악장 구조를 가지며, 솔로 악기와 피아노를 위한 소나타 형식이 가장 잘 알려져 있습니다.",
  "미뉴에트": "클래식 시대에 흔히 사용되는 춤곡 형식 중 하나입니다. 주로 교향곡이나 현악 사중주 등에서 악장으로 사용되며, 우아하고 우스꽝스러운 분위기를 가지고 있습니다.",
  "피아노 솔로": "피아노를 위한 작곡된 혼자서 연주되는 작품입니다. 다양한 스타일과 난이도를 가지며, 피아니스트의 기교와 예술적 표현을 강조합니다.",
  "오케스트라": "다양한 악기 그룹과 섹션들이 함께 연주하는 대규모 앙상블입니다. 협주곡이나 교향곡 등 다양한 작품을 연주하며, 풍부한 텍스처와 다채로운 음악적 표현을 제공합니다.",
  "발레 음악": "발레 공연을 위해 작곡된 음악입니다. 춤과 연관된 리듬과 운동성이 중요하며, 캐릭터의 특성과 이야기를 음악으로 전달합니다.",
  "가곡": "보컬과 피아노를 위한 작곡된 음악으로, 가사와 음악이 조화를 이루어 이야기나 감정을 표현합니다. 주로 한 명의 가수와 피아니스트가 협연합니다.",
};