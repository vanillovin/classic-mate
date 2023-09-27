export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "꿀래식",
	mainNav: [
		{ title: "홈", href: "/" },
		{ title: "모든 클래식", href: "/classics" },
		{ title: "추천 클래식", href: "/picks" },
		{ title: "모든 작곡가", href: "/composers" },
		{ title: "태그로 찾기", href: "/tags" },
		{ title: "자유 게시판", href: "/community" },
	],
	metaData: {
		home: {
			title: "꿀래식 | 클래식이 꿀처럼 달콤해지는 공간",
			description:
				"꿀래식에서 일상에 즐거움을 더하는 클래식 음악들을 맛보세요! :)",
			keywords: [
				"classic",
				"classical music",
				"꿀",
				"꿀래식",
				"클래식",
				"커뮤니티",
				"음악 추천",
				"클래식 음악",
				"클래식 정보",
				"클래식 커뮤니티",
			],
			openGraph: {
				title: "꿀래식 | 클래식이 꿀처럼 달콤해지는 공간",
				description:
					"꿀래식에서 일상에 즐거움을 더하는 클래식 음악들을 만나보세요! :)",
				images: [""],
				type: "website",
				url: "https://kkulassic-d9m3vlyh8-vanillovin.vercel.app/",
			},
		},
		classics: {
			title: "모든 클래식 | 꿀래식",
			description: "꿀래식의 모든 클래식 음악들을 즐겨보세요!",
			keywords: ["classical music", "클래식", "클래식 음악", "모든 클래식"],
		},
		picks: {
			title: "추천 클래식 | 꿀래식",
			description:
				"시간대별, 날씨별, 아티스트별, 장르별 등 다양한 클래식 음악을 즐겨보세요!",
			keywords: [
				"classical music",
				"클래식",
				"클래식 음악",
				"클래식 추천",
				"날씨별",
				"시간대별",
				"아티스트별",
				"장르별",
			],
		},
		composers: {
			title: "모든 작곡가 | 꿀래식",
			description:
				"클래식 음악 작곡가들의 생애, 주요 작품 등의 정보를 제공합니다.",
			keywords: [
				"classical music",
				"composers",
				"클래식 음악",
				"클래식 작곡가",
			],
		},
		tags: {
			title: "태그로 찾기 | 꿀래식",
			description: "태그를 이용해 원하는 클래식 음악을 찾아보세요.",
			keywords: ["classical music", "tag", "클래식", "태그"],
		},
		community: {
			title: "자유 게시판 | 꿀래식",
			description:
				"클래식 음악을 사랑하는 모두가 함께 모여 자유롭게 소통하는 공간입니다.",
			keywords: [
				"board",
				"community",
				"클래식",
				"게시판",
				"자유게시판",
				"커뮤니티",
			],
		},
	},
	links: {
		github: "https://github.com/vanillovin/kkulassic",
		email: "mailto:vanillovin@gmail.com",
	},
};
