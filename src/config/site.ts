export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '클메',
  description: '당신의 클래식 메이트! 다양한 클래식 음악 정보들을 소개합니다 :)',
  mainNav: [
    { title: '홈', href: '/' },
    { title: '모든 클래식', href: '/classics' },
    { title: '추천 클래식', href: '/picks' },
    { title: '모든 작곡가', href: '/artists' },
    { title: '태그로 찾기', href: '/tags' },
  ],
  metaData: {
    'home': {
      title: '클메',
      description: '',
      keywords: ['classical music', '클래식', '클메', '클래식메이트', '클래식 음악', '클래식 정보'],
    },
    'classics': {
      title: '모든 클래식 | 클메',
      description: '클메의 모든 클래식 음악을 즐겨보세요!',
      keywords: ['classical music', '클래식', '클래식 음악', '모든 클래식'],
    },
    'picks': {
      title: '추천 클래식 | 클메',
      description: '시간대별, 날씨별, 아티스트별, 장르별 등 다양한 클래식 음악을 즐겨보세요!',
      keywords: ['classical music', '클래식', '클래식 음악', '클래식 추천', '날씨별', '시간대별', '아티스트별' , '장르별'],
    },
    'artists': {
      title: '모든 작곡가 | 클메',
      description: '클래식 음악 작곡가의 생애, 주요 작품 등의 정보를 제공합니다.',
      keywords: ['classical music', 'composers', '클래식 음악', '클래식 작곡가'],
    },
    'tags': {
      title: '태그로 찾기 | 클메',
      description: '태그를 활용하여 원하는 클래식 음악을 찾아보세요.',
      keywords: ['classical music', 'tag', '클래식', '태그'],
    },
  },
  links: {
    github: 'https://github.com/vanillovin/classic-mate',
    email: 'mailto:vanillovin@gmail.com',
  },
};