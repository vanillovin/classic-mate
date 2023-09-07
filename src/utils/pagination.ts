// export const getTestPagination = (
// 	page: number, // 페이지 번호
// 	size: number, // 페이지 항목 수
// ): { from: number; to: number } => {
// 	const limit = size ? +size : 16; // 한 페이지에 표시할 항목 수
// 	const from = page ? page * limit : 0; // 데이터 조회를 시작할 인덱스
// 	const to = page ? from + size - 1 : size - 1; // 데이터 조회를 종료할 인덱스

// 	return { from, to }; // 시작 인덱스, 종료 인덱스
// };

export function getPagination (
  count: number, // 전체 행 수
  page: number, // 페이지 번호
  size: number, // 페이지 항목 수
): { from: number; to: number } {  
  const limit = size ? +size : 16;
	const from = page ? (page - 1) * limit : 0;
	const to = Math.min(from + limit - 1 , count - 1);

	return { from, to }; 
};