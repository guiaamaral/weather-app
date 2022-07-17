export interface GetWeatherForecastResult {
    list: {
        dt: number;
        main: {
            feels_like: number;
            temp_min: number;
            temp_max: number;
        };
        weather: {
            icon: string;
        }[];
    }[];
    cod: number;
    message: string;
}
