type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Weather = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  rain: { [key: string]: number };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [{
    id: number;
    main:
      | 'Clear' 
      | 'Clouds' 
      | 'Rain' 
      | 'Drizzle' 
      | 'Thunderstorm' 
      | 'Snow' 
      | 'Mist' 
      | 'Smoke' 
      | 'Haze' 
      | 'Dust' 
      | 'Fog' 
      | 'Sand' 
      | 'Ash' 
      | 'Squall' 
      | 'Tornado' 
      | string;
    description:
      | 'clear sky' 
      | 'few clouds' 
      | 'scattered clouds' 
      | 'broken clouds' 
      | 'shower rain' 
      | 'rain' 
      | 'thunderstorm' 
      | 'snow' 
      | 'mist'
      | string;
    icon: string
  }];
  wind: { deg: number; gust: number; speed: number };
};