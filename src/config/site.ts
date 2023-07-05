export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "클메",
  description:
    "당신의 클래식 메이트! 다양한 클래식 음악 정보들을 소개합니다 :)",
  mainNav: [
    {
      title: "홈",
      href: "/",
    },
    {
      title: "모든 클래식",
      href: "/classics",
    },
    {
      title: "추천 클래식",
      href: "/picks",
    },
    {
      title: "모든 작곡가",
      href: "/artists",
    },
    {
      title: "태그로 찾기",
      href: "/tags",
    },
  ],
  links: {
    github: "https://github.com/vanillovin/classic-mate",
  },
};