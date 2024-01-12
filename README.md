<h1 align="middle">꿀래식</h1>
<div align="center">
클래식 음악에 대한 다양한 정보를 제공하는 웹사이트입니다. 클래식의 달콤한 매력에 푹 빠져보세요 :)

> [Kkulassic 배포 사이트 링크](https://kkulassic.vercel.app/)
</div>
<br/>
<div align="middle">
  <img width="40%" src="https://github.com/vanillovin/kkulassic/assets/70941696/61fbc4bc-0bfe-4c02-842e-280665f93728"/>
</div>

<br/>

## 기술 스택

- Front-end
  - Next.js, React Query, TypeScript, Tailwind CSS
- Back-end
  - Supabase

## 주요 기능과 구현 방법

### 클래식 음악 감상 및 뮤직 플레이어

- 사이트에서 직접 음악을 감상할 수 있도록 HTML의 `<audio>`, `<progress>` 등의 태그를 활용한 뮤직 플레이어를 제공합니다.
- 음악의 재생, 일시 정지, 음소거 기능, 그리고 원하는 시간으로 이동하는 다양한 컨트롤 기능을 구현했습니다.
- 사용자의 시간대에 따라 배경 이미지가 자동으로 변경되어, 감상하는 시간에 따라 다양한 분위기를 즐길 수 있습니다.

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/kkulassic/assets/70941696/1bc6d896-ccf6-47ba-b0c6-3ba250a2fec7)

### 클래식 음악 조회, 검색 및 페이징

- 클래식 음악을 조회하고 특정 음악을 검색할 수 있습니다.
- 원하는 페이지로 이동해 음악 목록을 탐색할 수 있습니다.

![chrome-capture-2024-0-3 (2)](https://github.com/vanillovin/kkulassic/assets/70941696/f688bbb3-5650-4ebe-bdc5-86948b8aaa77)

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/kkulassic/assets/70941696/f27a2c87-8a83-4f73-b694-4381e08b60a8)

#### Using Hydration (SSR)

빠른 초기 로딩을 위해 Tanstack Query의 "Hydrate"를 활용하여 서버에서 페이지 로드 시 미리 사용할 수 있는 마크업을 사전 렌더링하였습니다. 이를 통해 초기 로딩 시간을 최소화하고, 사용자는 빠르게 콘텐츠를 확인할 수 있으며, 자바스크립트가 활성화되면 즉시 애플리케이션과 상호작용이 가능하도록 구현했습니다.

구현은 다음과 같은 단계로 이뤄졌습니다:

##### 1. QyeryClient 인스턴스의 생성과 사용

서로 다른 요청 간 데이터가 공유되지 않게 캐싱 처리해 싱글톤 인스턴스를 생성합니다.

```tsx
import { cache } from "react";
import { QueryClient } from "@tanstack/query-core";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;

```

##### 2. 데이터 미리 가져오기(Prefetching)

`prefetchQuery`를 사용해 서버 컴포넌트에서 데이터를 가져와 `dehydrate`로 감싸고 state로 넘겨줍니다. 서버에서 데이터를 미리 가져오고 나면 이 데이터를 클라이언트 측으로 전송하기 쉬운 형태로 변환하는 Dehydration 과정을 거치고, 클라이언트 측에선 서버 측에서 전송받은 데이터를 Rehydration 해 다시 사용 가능한 형태로 만듭니다.

```tsx
"use client";

import { Hydrate as HydrateOnClient } from "@tanstack/react-query";

import getQueryClient from "../getQueryClient";
import ClassicalMusicContainer from "./ClassicalMusicContainer";
import { getClassicalMusicList } from "./getClassicalMusicList";

export default async function HydratedClassicalMusics() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["classicalMusicList", "1", ""], () =>
		getClassicalMusicList(0, 15),
	);
	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrateOnClient state={dehydratedState}>
			<ClassicalMusicContainer />
		</HydrateOnClient>
	);
}
```

##### 3. 클라이언트에서의 데이터 사용

컴포넌트들을 `HydrateOnClient`로 감싸면 감싸진 영역 안에서 prefetch된 데이터를 즉시 사용할 수 있게 됩니다.

```tsx
import HydratedClassicalMusics from "./HydratedClassicalMusics";

export default async function ClassicalMusicPage() {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<HydratedClassicalMusics />
		</>
	);
```

### 태그로 클래식 음악 검색

- 태그를 클릭하거나 검색창에 입력하여 최대 3개의 태그에 해당하는 음악을 검색할 수 있습니다. 
- 일치하는 태그가 있다면 해당 태그를 URL의 쿼리 파라미터로 추가하여 페이지를 이동시킵니다. 이때, 이미 태그가 선택되어 있다면 그다음 인덱스에 태그를 추가합니다.

![chrome-capture-2024-0-3](https://github.com/vanillovin/kkulassic/assets/70941696/5cd3535a-5fbc-4d5d-9e4b-ecd9bc92d5d1)


### 커뮤니티

- 게시글과 댓글의 작성, 조회, 수정, 삭제 기능을 구현하였습니다.
- 게시글을 카테고리별, 최신순, 인기순, 조회순으로 정렬할 수 있습니다.
- 로그인된 사용자만 새 글을 작성할 수 있습니다. 아닐 경우 로그인 페이지로 이동합니다.

![chrome-capture-2024-0-3](https://github.com/vanillovin/kkulassic/assets/70941696/a6558a1c-98b2-4381-9df9-5ab12eb569f4)

![chrome-capture-2024-0-3 (2)](https://github.com/vanillovin/kkulassic/assets/70941696/1f4a126d-7d99-474a-a4a6-e514ffaded2b)

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/kkulassic/assets/70941696/b7d33a57-918c-4ea6-bf25-47f4197d7c27)

### 작곡가 정보 조회

- 클래식 음악 작곡가들의 다양한 정보와 대표 작품 목록을 확인할 수 있습니다.

![chrome-capture-2024-0-3 (1)](https://github.com/vanillovin/kkulassic/assets/70941696/fae374bf-e7c0-4164-83a3-16434afe59ca)
