import { usePathname, useRouter } from "next/navigation";

function useKeywordSearchParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams();

  function navigateWithNewKeywordParam(keyword: string) {
    searchParams.set("keyword", encodeURIComponent(keyword));
    const newSearchParams = searchParams.toString();
    router.push(`${pathname}?${newSearchParams}`);
  }

  function cancelKeywordSearchParam() {
		const params = new URLSearchParams(searchParams.toString());
		params.delete("keyword");
		const newSearchParams = params.toString();
		router.push(`${pathname}?${newSearchParams}`);
	}

  return {
    navigateWithNewKeywordParam,
    cancelKeywordSearchParam
  };
}

export default useKeywordSearchParam;
