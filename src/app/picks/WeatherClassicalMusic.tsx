'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import type { Coordinates, Weather } from './types';

const defaultDaytimeImage = 'https://images.unsplash.com/photo-1533809647112-433f27b871d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';
const defaultNightImage = 'https://images.unsplash.com/photo-1472552944129-b035e9ea3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

function WeatherClassicalMusic() {  
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<'daytime' | 'night' | null>(null);

  const backgroundImageURL = timeOfDay ? (
    timeOfDay === 'daytime' ? (
      weather
        ? classicsByWeather[weather.weather[0].main].daytimeImage
        : defaultDaytimeImage
    ) : (
      weather
        ? classicsByWeather[weather.weather[0].main].nightImage
        : defaultNightImage
    )
  ) : defaultDaytimeImage;

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 0 && currentTime < 5 || currentTime >= 20) {
      setTimeOfDay('night');
    } else {
      setTimeOfDay('daytime');
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude }: Coordinates = position.coords;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(err => setError('날씨 정보를 불러오지 못했습니다.'));
        },
        (error: GeolocationPositionError) => {
          setError('위치에 접근할 수 없습니다. 위치 액세스 허용 후 새로고침 해주세요!');
        }
      );
    } else {
      setError('이 브라우저에서 위치 정보 기능을 지원하지 않습니다.')
    }
  }, []);

  const parentTextColor = timeOfDay === 'daytime'
    ? classicsByWeather[weather? weather.weather[0].main : 'Clear'].textColor
    : 'text-warm-vintage-off-white';
  
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageURL})` }}
      className="h-60 flex items-center justify-center rounded-sm shadow-md bg-center bg-cover border border-black"
    >
      {weather ? (
        <div className={`h-full flex flex-col sm:flex-row items-center justify-center ${parentTextColor}`}>
          <div className='flex items-center justify-center bg-white bg-opacity-20 sm:bg-transparent pl-2 rounded-sm'>
            <div className='flex sm:flex-col items-center sm:items-start'>
              <p className="font-semibold sm:font-bold text-lg">{`${weather.main.temp.toFixed()}℃`}</p>
              <p className="hidden sm:block font-semibold">
                {weather.name !== '' &&
                  `${weather.name}, ${weather.sys.country}`}
              </p>
              <p className={`hidden sm:block  
                ${timeOfDay === 'daytime' ? 'text-gray-600' : 'text-gray-400'}
              `}>
                {weather.weather[0].description}
              </p>
            </div>
            <div className="w-10 sm:w-20 h-10 sm:h-20 relative overflow-hidden">
              <Image
                fill
                className="w-full h-full"
                alt={weather.weather[0].main}
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              />
            </div>
          </div>
          <div className='mt-2 sm:mt-0'>
            <h2 className='font-semibold sm:text-lg drop-shadow-md'>
              {classicsByWeather[weather.weather[0].main].name}
            </h2>
            <ul className='mt-1 text-sm sm:text-base'>
              {classicsByWeather[weather.weather[0].main].data.map(classic => (
                <li
                  key={classic.id}
                  className='hover:underline underline-offset-4'
                >
                  <Link href={`/classics/${classic.id}`}>
                    + {classic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        error ? (
          <div className={`font-light 
            ${timeOfDay === 'daytime' ? 'text-black' : 'text-white'}
          `}>
            {error}
          </div>
        ) : (
          <div className={`font-light 
            ${timeOfDay === 'daytime' ? 'text-black' : 'text-white'}
          `}>
            날씨 정보를 불러오고 있습니다
          </div>
        )
      )}
    </div>
  );
}

export default WeatherClassicalMusic;

const classicsByWeather: {
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