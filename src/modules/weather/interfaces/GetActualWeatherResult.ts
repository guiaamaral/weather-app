export interface GetActualWeatherResult {
    id: number;
    main: {
        humidity: number;
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    };
    name: string;
    sys: {
        sunrise: number;
        sunset: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
    };
    cod: number;
    message?: string;
}
