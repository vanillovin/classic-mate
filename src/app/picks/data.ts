export const classicsByTime: {
  [key: string]: { id: number; title: string; }[];
} = {
  'dawn': [
    { id: 39, title: '에릭 사티 짐노페디 No.1' },
    { id: 42, title: '드뷔시 아라베스크' },
    { id: 45, title: '라벨 물의 유희' },
  ],
  'morning': [
    { id: 41, title: "비발디 사계 중 '봄'" },
    { id: 43, title: '모차르트 볼로도스, 터키행진곡' },
    { id: 46, title: '쇼팽 폴로네이즈 영웅' },
  ],
  'afternoon': [
    { id: 47, title: '쇼팽 스케르초 2번' },
    { id: 48, title: '슈베르트 악흥의 순간 3번' },
    { id: 49, title: '차이코프스키 - 백조의 호수' },
  ],
  'evening': [
    { id: 50, title: '리스트 사랑의 꿈' },
    { id: 44, title: '쇼팽 녹턴 9번' },
    { id: 17, title: '라흐마니노프 피아노 협주곡 2번' },
  ],
  'night': [
    { id: 40, title: '드뷔시 달빛' },
    { id: 51, title: '슈베르트 아베 마리아' },
    { id: 52, title: '베토벤 비창 2악장' },
  ],
};

export const defaultDaytimeImage =
  'https://images.unsplash.com/photo-1533809647112-433f27b871d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
export const defaultNightImage =
  'https://images.unsplash.com/photo-1472552944129-b035e9ea3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

export const classicsByWeather: {
  [key: string]: {
    name: string;
    daytimeImage: string;
    nightImage?: string;
    textColor: 'text-warm-vintage-off-white' | 'text-black';
    data: { id: number; title: string; }[];
  }
} = {
  'Clear': {
    name: '맑은 하늘, 음악과 함께 명상하는 시간을',
    daytimeImage: 'https://images.unsplash.com/photo-1566790148600-c25fa37189c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    nightImage: 'https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    textColor: 'text-black',
    data: [
      { id: 0, title: '쇼팽의 녹턴 2번' },
      { id: 0, title: '차이콥스키의 호두까기 제 1곡 작은 서곡' }
    ],
  },
  'Clouds': {
    name: '구름이 둥둥 떠다니는 날, 영감을 주는 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1606403341585-c74a0b7f2c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 19, title: '드보르작의 유모레스크' },
      { id: 0, title: '그리그의 피아노 협주곡' },
    ],
  },
  'Rain': {
    name: '보슬보슬 비 내리는 날, 음악의 빗소리에 젖어들어',
    // daytimeImage: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    daytimeImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 49, title: '차이콥스키의 백조의 호수' },
      { id: 0, title: '쇼팽의 폴로네이즈' },
    ],
  },
  'Drizzle': {
    name: ' 이슬비가 내리는 날, 희망과 투명함이 담긴 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1593318824361-e89f07d49c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 0, title: '브람스의 피아노 협주곡 1번' },
      { id: 42, title: '드뷔시의 아라베스크 1번' },
    ],
  },
  'Thunderstorm': {
    name: '천둥번개가 치는 날, 극적인 감정과 에너지가 흐르는 클래식',
    daytimeImage: 'https://images.unsplash.com/photo-1613820070607-ef1d3ccc07f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 0, title: '차이콥스키의 교향곡 5번' },
      { id: 0, title: '베토벤의 교향곡 5번' },
    ],
  },
  'Snow': {
    name: '하얀 눈이 내리는 날, 순수와 아름다움이 어우러진 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 0, title: "비발디의 사계 중 겨울" },
      { id: 2, title: '쇼팽의 피아노 협주곡 1번' },
    ],
  },
  'Mist': {
    name: '뿌연 안개가 낀 날, 우아하고 신비로운 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1585508889431-a1d0d9c5a324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 45, title: '라벨의 물의 유희' },
      { id: 0, title: '쇼팽의 녹턴 20번' },
    ],
  },
  'Smoke': {
    name: '연기가 피어오르는 날, 깊은 감성과 흥미를 자극하는 클래식',
    daytimeImage: 'https://images.unsplash.com/photo-1598760122223-45f0f18a1bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 0, title: '드뷔시의 녹턴' },
      { id: 0, title: '파가니니의 라캄파넬라' },
    ],
  },
  'Haze': {
    name: '흐린 날, 낭만과 몽환이 담긴 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1530293959042-0aac487c21e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 0, title: '슈베르트의 즉흥곡' },
      { id: 0, title: '멘델스존의 피아노 협주곡 1번' },
    ],
  },
  'Dust': {
    name: '먼지가 날리는 날, 낡은 추억과 서정적인 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 17, title: '라흐마니노프의 피아노 협주곡 2번' },
      { id: 39, title: '에릭 사티의 "짐노페디"' },
    ],
  },
  'Fog': {
    name: '안개가 자욱한 날, 신비로움과 푸른 감성을 자극하는 클래식',
    daytimeImage: 'https://images.unsplash.com/photo-1585651686997-5516bd534e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 0, title: '라벨의 스페인광시곡' },
      { id: 0, title: '본 윌리엄스, 푸른 옷소매 주제에 의한 환상곡' },
    ],
  },
  'Sand': {
    name: '모래바람이 스치는 날, 열정과 움직임이 담긴 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1553326875-1a32421b5e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 49, title: '차이콥스키의 백조의 호수' },
      { id: 0, title: '모차르트의 피아노 협주곡 23번' },
    ],
  },
  'Ash': {
    name: '잿빛이 낀 날, 애환과 절망이 공존하는 클래식',
    daytimeImage: 'https://images.unsplash.com/photo-1522774832635-430f6deecd28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-black',
    data: [
      { id: 0, title: '차이콥스키의 교향곡 6번 "비창"' },
      { id: 0, title: '베토벤의 교향곡 7번' },
    ],
  },
  'Squall': {
    name: '돌풍이 일어나는 날, 격렬한 역동과 강렬한 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1600116889139-8888ef3a7718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 0, title: '베토벤의 교향곡 5번' },
      { id: 0, title: '브람스의 교향곡 4번' },
    ],
  },
  'Tornado': {
    name: '회오리바람이 몰아치는 날, 파괴와 창조에 휘몰아치는 클래식 음악',
    daytimeImage: 'https://images.unsplash.com/photo-1595172233681-8ae072a036bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
    nightImage: defaultNightImage,
    textColor: 'text-warm-vintage-off-white',
    data: [
      { id: 0, title: '베토벤의 교향곡 9번' },
      { id: 0, title: '프로코피예프: 로미오와 줄리엣 중 "기사들의 춤"' },
    ],
  },
};

export const genreDescriptions: Record<string, string> = {
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

export const classicalMusicByMood: {
  [key: string]: {
    name: string;
    bgColor: string;
    data: { id: number; composer: string; title: string; }[];
  }
} = {
  romantic: {
    name: '로맨틱한 🌹',
    bgColor: 'bg-rose-400',
    data: [
      { id: 54, composer: 'Pyotr Ilyich Tchaikovsky', title: '로미오와 줄리엣 (Romeo and Juliet)' },
      { id: 49, composer: 'Pyotr Ilyich Tchaikovsky', title: '백조의 호수 (Swan Lake)' },
      { id: 55, composer: 'Ludwig van Beethoven', title: '로망스 제2번 (Romance for Violin and Orchestra No. 2 in F major, Op. 50)' },
    ],
  },
  relaxing: {
    name: '휴식과 편안함을 주는 ☁️',
    bgColor: 'bg-green-200',
    data: [
      { id: 44, composer: 'Frédéric Chopin', title: '녹턴 2번 (Nocturne No. 2)' },
      { id: 57, composer: 'Johann Pachelbel', title: '캐논 (Canon in D)' },
      { id: 39, composer: 'Erik Satie', title: '짐노페디 (Gymnopédie No. 1)' },
    ],
  },
  energetic: {
    name: '에너지와 활기 넘치는 ⚡️',
    bgColor: 'bg-yellow-200',
    data: [
      { id: 58, composer: 'Wolfgang Amadeus Mozart', title: '피가로의 결혼 서곡 (Overture to The Marriage of Figaro)' },
      { id: 3, composer: 'Ludwig van Beethoven', title: '교향곡 5번 운명 (Symphony No. 5 in C minor, Op. 67)' },
      { id: 53, composer: 'Antonio Vivaldi', title: '사계 중 여름 (Summer from The Four Seasons)' },
    ],
  },
  calm: {
    name: '수면과 명상을 위한 🌙',
    bgColor: 'bg-blue-200',
    data: [
      { id: 59, composer: 'Ludwig van Beethoven', title: '교향곡 6번 (Pastoral Symphony, Op. 68)' },
      { id: 60, composer: 'Johann Sebastian Bach', title: 'G선상의 아리아 (Air on the G String)' },
      { id: 61, composer: 'Wolfgang Amadeus Mozart', title: '피아노 협주곡 21번 C장조 K.467 (Piano Concerto No.21 In C Major K.467)' },
    ],
  },
  mysterious: {
    name: '신비로운 🌌',
    bgColor: 'bg-purple-200',
    data: [
      { id: 62, composer: 'Wolfgang Amadeus Mozart', title: '마술피리 (Die Zauberflöte)' },
      { id: 40, composer: 'Claude Debussy', title: '달빛 (Clair de Lune)' },
      { id: 63, composer: 'Gustav Holst', title: '행성 중 천왕성 (The Planets - Uranus)' },
    ],
  },
  playful: {
    name: '재미있고 유쾌한 😄',
    bgColor: 'bg-orange-300',
    data: [
      { id: 70, composer: 'Gioachino Rossini', title: '윌리엄텔 서곡 (William Tell Overture Final)' },
      { id: 56, composer: 'Antonio Vivaldi', title: '사계 중 봄 (Spring from The Four Seasons)' },
      { id: 72, composer: 'Johannes Brahms', title: '헝가리 무곡 (Hungarian Dance No. 5)' },
    ],
  },
  passionate: {
    name: '열정적인 🔥',
    bgColor: 'bg-red-400',
    data: [
      { id: 68, composer: 'Johannes Brahms', title: '피아노 협주곡 2번 (Piano Concerto No. 2 in B-flat major, Op. 83)' },
      { id: 50, composer: 'Franz Liszt', title: '사랑의 꿈 (Liebesträume No. 3)' },
      { id: 49, composer: 'Piotr Ilyich Tchaikovsky', title: '백조의 호수 (Scène - Swan Lake)' },
    ],
  },
  serene: {
    name: '고요한 🌿',
    bgColor: 'bg-gray-200',
    data: [
      { id: 67, composer: 'Johann Sebastian Bach', title: '골드베르크 변주곡 (Goldberg Variations)' },
      { id: 51, composer: 'Franz Schubert', title: '아베 마리아 (Ave Maria)' },
      { id: 73, composer: 'Frédéric Chopin', title: '스케르초 4번 (Scherzo No. 4 in E Major, Op. 54)' },
    ],
  },
  sentimental: {
    name: '감성적인 💕',
    bgColor: 'bg-pink-200',
    data: [
      { id: 71, composer: 'Franz Schubert', title: '미완성 교향곡 (Unfinished Symphony in B minor, D. 759)' },
      { id: 69, composer: 'Ludwig van Beethoven', title: '피아노 소나타 8번 (Piano Sonata No. 8 in C minor, Op. 13 "Pathétique")' },
      { id: 17, composer: 'Sergei Vasilievich Rachmaninoff', title: '피아노 협주곡 2번 (Piano Concerto No. 2 in C minor, Op. 18)' },
    ],
  },
  dreamy: {
    name: '몽환적인 🌟',
    bgColor: 'bg-teal-200',
    data: [
      { id: 66, composer: 'Erik Satie', title: '그노시엔스 (Gnossiennes)' },
      { id: 65, composer: 'Maurice Ravel', title: '볼레로 (Boléro)' },
      { id: 64, composer: 'Gustav Holst', title: '행성 (The Planets), 제2악장: 금성 (Venus)' },
    ],
  },
};