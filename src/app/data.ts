type MonthClassic = {
  id: number;
  composer: string;
  title: string;
  image: string;
  description: string;
  videoUrl: string;
  point: {
    title: string;
    description: string;
  };
  performar: {
    name: string;
    description: string;
    instrumentalists: string;
    moreLink: string;
  };
};

type QuizData = {
  [date: string]: {
    question: string;
    options: string[];
    answer: number;
  };
};

export const monthMusics: { [key: string]: { title: string; src: string; }} = {
  '2023-07': {
    title: 'Tchaikovsky: Piano Concerto No.1 1st Movement / Yeol Eum Son',
    src: '/music/Yeol Eum Son - Tchikovsky Piano Concerto No1 1st.mp3',
  },
  '2023-08': {
    title: "비발디, '사계' 여름 (A.Vivaldi, Summer from The Four Seasons Op.8) / 이 무지치",
    src: '/music/I Musici - Vivaldi Summer.mp3',
  }
}

export const monthClassics: { [key: string]: MonthClassic } = {
  '2023-07': {
    id: 15,
    composer: '차이코프스키',
    title: '피아노 협주곡 1번',
    image: 'https://as1.ftcdn.net/v2/jpg/00/44/80/14/1000_F_44801423_qaUrUvPpfjSzsDID4dXeDXQfZJMtEefu.jpg',
    description: `Tchaikovsky의 "Piano Concerto No. 1"은 19세기 말에 작곡된 클래식 음악 중 하나로, 유명한 클래식 피아노 협주곡 중 하나입니다. 이 곡은 작곡가 Pyotr Ilyich Tchaikovsky가 1874년에 작곡했으며, 현재까지 많은 연주자들과 오케스트라에 의해 연주되고 사랑받고 있습니다.

    작품의 시대 배경은 로맨틱 시대로, 감성적이고 열정적인 음악이 특징입니다. 이 곡은 3악장으로 구성되어 있으며, 첫 번째 악장은 점점 강렬해지는 현악기와 피아노의 대립을 통해 시작됩니다. 두 번째 악장은 서정적이고 아름다운 선율로 피아노가 주도하는 부분입니다. 마지막 악장은 화려하고 역동적인 연주로 마무리되며, 기교적인 피아노 연주와 오케스트라의 화려한 연주가 조화를 이룹니다.

    "Piano Concerto No. 1"은 Tchaikovsky의 피아노 음악 중 가장 인기 있는 작품 중 하나로 꼽히며, 클래식 음악을 사랑하는 사람들에게는 익숙하고 사랑받는 곡입니다. 이 곡은 그의 재능과 예술적 표현력을 최대한 발휘한 작품 중 하나로 평가받고 있으며, 클래식 음악의 명곡 중 하나로 인정받고 있습니다.`,
    videoUrl: 'https://youtu.be/YXL0dkG-Qro',
    point: {
      title: '곡 구성과 감상 포인트',
      description: `1악장 - 강렬하고 역동적인 악장, 대립적인 피아노와 현악기의 연주로 화려함을 느낄 수 있습니다.
      2악장 - 서정적이고 아름다운 선율, 우아하고 부드러운 연주로 아름다움을 느낄 수 있습니다.
      3악장 - 화려하고 역동적인 연주, 피아노와 오케스트라의 조화로 흥겨움을 느낄 수 있습니다.

      이렇게 'Piano Concerto No. 1'은 각 악장마다 강렬함, 아름다움, 화려함과 흥겨움을 전달합니다.`,
    },
    performar: {
      name: '조성진',
      description: `조성진 피아니스트는 음악을 통해 감정과 이야기를 표현하는 예술가입니다. 그의 연주는 강렬하면서도 섬세한 터치로 음악의 깊은 감성을 전달합니다. 그의 손끝에서 피아노의 음색이 만들어지며, 그 소리는 청중들을 감동시킵니다.
      조성진 피아니스트는 뛰어난 기교와 기술적 솜씨를 가지고 있으며, 그것을 통해 다양한 음악 작품을 완벽하게 해석합니다. 그의 연주는 듣는 이들에게 여러 감정을 일깨워주고, 그 속에서 아름다움과 감동을 찾을 수 있습니다.`,
      instrumentalists: '피아니스트',
      moreLink: 'https://namu.wiki/w/%EC%A1%B0%EC%84%B1%EC%A7%84(%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8)',
    },
  },
  '2023-08': {
    id: 53,
    composer: '비발디',
    title: "'사계' 중 여름 (The Four Seasons - Summer)",
    image: 'https://t4.ftcdn.net/jpg/01/65/83/43/240_F_165834310_oS0Ij5orAWT1MLLkkSMiUhrSrNw1WEBB.jpg',
    description: `비발디의 사계는 1725년에 출판된 바이올린 협주곡 모음집입니다. 이 모음집은 12곡의 협주곡으로 이루어져 있으며, 각각의 협주곡은 계절을 나타냅니다. 여름은 이 모음집의 네 번째 협주곡입니다.

    여름은 3악장으로 구성되어 있습니다. 첫 번째 악장은 무더운 여름날에 활기를 잃은 분위기를 표현한 악장입니다. 리듬감 있는 현악기의 연주와 웅장한 관현악의 연주가 어우러져 무더운 여름날의 열기를 느낄 수 있습니다. 두 번째 악장은 번개, 천둥소리, 광란하는 파리 떼가 귀찮게 하는 소리를 표현한 악장입니다. 더위에 지친 여름을 느낄 수 있습니다. 마지막 악장은 천둥과 번개, 폭우가 치는 장면을 표현한 악장입니다. 격렬하고 다이나믹한 악장으로, 여름날의 잔인성을 생생하게 느낄 수 있습니다.

    비발디의 사계 중 여름은 비발디의 뛰어난 음악적 재능을 엿볼 수 있는 작품들입니다. 각각의 악장마다 독특한 분위기와 특징이 있으며, 여름날의 다양한 풍경을 생생하게 표현하고 있습니다.`,
    videoUrl: 'https://youtu.be/XbGdj70JXDE?si=5IaMxVSVw9PDDiuw',
    point: {
      title: '곡 구성과 감상 포인트',
      description: `1악장: "알레그로 (Allegro)" - 무덥고 습한 여름날의 분위기를 표현한 악장입니다. 리듬감 있는 현악기의 연주와 웅장한 관현악의 연주가 어우러져 무더운 여름날의 열기를 느낄 수 있습니다.
      2악장: "안단테 (Andante)" - 더위에 지친 여름과 파리떼로 힘들어하는 장면을 표현한 악장입니다. 파리가 귀찮게 하는 소리와 천둥 소리를 느낄 수 있습니다.
      3악장: "프레스토 (Presto)" - 천둥과 번개, 우박이 쳐서 모든 것을 파괴하는 잔인성을 표현한 악장입니다. 여름날의 격렬한 폭풍우를 생생하게 느낄 수 있습니다.

      "사계 중 여름"은 비발디의 뛰어난 음악적 재능을 엿볼 수 있는 작품들입니다. 각각의 악장마다 독특한 분위기와 특징이 있으며, 여름날의 다양한 풍경을 생생하게 표현하고 있습니다.`,
    },
    performar: {
      name: '클라라 주미 강',
      description: `클라라 주미 강은 한국계 독일인 바이올리니스트로, 
      2010년 인디애나폴리스 국제 바이올린 콩쿠르에서 우승하며 세계적인 주목을 받았습니다.
      그녀의 연주는 정교한 테크닉과 깊은 감성이 더해져 청중들에게 강렬한 감동을 선사합니다. 손끝에서 흘러나오는 바이올린의 소리는 듣는 이들의 마음을 사로잡으며, 음악을 통해 다양한 감정과 이야기를 전달합니다.
      클라라 주미 강의 연주는 대중적으로 사랑받으며, 클래식 음악을 사랑하는 사람들에게 특별한 경험을 선사합니다.`,
      instrumentalists: '바이올리니스트',
      moreLink: 'https://namu.wiki/w/%ED%81%B4%EB%9D%BC%EB%9D%BC%20%EC%A3%BC%EB%AF%B8%20%EA%B0%95',
    },
  },
};

export const quizData: QuizData = {
  '2023-08-01': {
    question: '비발디의 대표작은?',
    options: ['운명교향곡', '사계', '로망스', '터키행진곡'],
    answer: 1,
  },
  '2023-08-02': {
    question: '베토벤의 5번 교향곡은 몇 번이라고 불리나요?',
    options: ['비창', '운명', '합창', '명곡'],
    answer: 1,
  },
  '2023-08-03': {
    question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
    options: ['O', 'X'],
    answer: 0,
  },
  '2023-08-04': {
    question: '다음 중 가장 짧은 음표는?',
    options: ['♩', '♪', '♫', '♬'],
    answer: 0,
  },
  '2023-08-05': {
    question: '다음 중 가장 짧은 음표는?',
    options: ['♩', '♪', '♫', '♬'],
    answer: 0,
  },
  '2023-08-06': {
    question: '비발디의 대표작은?',
    options: ['운명교향곡', '사계', '로망스', '터키행진곡'],
    answer: 1,
  },
  '2023-08-07': {
    question: '베토벤의 5번 교향곡은 몇 번이라고 불리나요?',
    options: ['비창', '운명', '합창', '명곡'],
    answer: 1,
  },
  '2023-08-08': {
    question: "안토니오 비발디가 태어난 도시는 '베네치아'이다.",
    options: ['O', 'X'],
    answer: 0,
  },
  '2023-08-09': {
    question: '베토벤의 9번 교향곡은 몇 번이라고 불리나요?',
    options: ['비창', '영웅', '합창', '영광'],
    answer: 2,
  },
  '2023-08-10': {
    question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
    options: ['피아노', '바이올린', '첼로', '오보에'],
    answer: 0,
  },
  '2023-08-11': {
    question: '다음 중 가장 짧은 음표는?',
    options: ['♩', '♪', '♫', '♬'],
    answer: 0,
  },
  '2023-08-12': {
    question: '베토벤의 9번 교향곡은 몇 번이라고 불리나요?',
    options: ['비창', '영웅', '합창', '영광'],
    answer: 2,
  },
  '2023-08-13': {
    question: '바흐의 "토카타와 푸가"는 어떤 악기로 연주되는 곡인가요?',
    options: ['피아노', '바이올린', '첼로', '오보에'],
    answer: 0,
  },
};
