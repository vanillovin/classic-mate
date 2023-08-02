export function getCurrentDateInfo(): {
  currentDate: Date;
  currentMonth: number;
  currentDateISOString: string;
  currentDateString: string;
  currentDay: string;
  currentYearMonth: string;
} {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDateISOString = currentDate.toISOString();
  const currentDateString = currentDateISOString.split('T')[0];
  const currentDay = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
  const currentYearMonth = `${currentDateISOString.split('-')[0]}-${currentDateISOString.split('-')[1]}`;
  
  return { 
    currentDate, 
    currentMonth,
    currentDateISOString,
    currentDateString,
    currentDay,
    currentYearMonth,
  };
}

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
