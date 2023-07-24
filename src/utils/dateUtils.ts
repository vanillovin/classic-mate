export function formatTimestamp(timestamp: string): string {
  const currentDate: Date = new Date();
  const inputDate: Date = new Date(timestamp);
  const diffInMilliseconds: number = currentDate.getTime() - inputDate.getTime();
  const diffInSeconds: number = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes: number = Math.floor(diffInSeconds / 60);
  const diffInHours: number = Math.floor(diffInMinutes / 60);
  const diffInDays: number = Math.floor(diffInHours / 24);
  const diffInMonths: number = Math.floor(diffInDays / 30);
  const diffInYears: number = Math.floor(diffInMonths / 12);

  if (diffInSeconds < 60) {
    return '방금 전';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}달 전`;
  } else {
    return `${diffInYears}년 전`;
  }
}
