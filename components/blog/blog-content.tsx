import { WeatherBar } from "./weather-bar";

type BlogContentProps = {
  currentTemperature: number;
};

export function BlogContent({ currentTemperature }: BlogContentProps) {
  return (
    <div className="flex flex-col py-4">
      <WeatherBar currentTemperature={currentTemperature} />
    </div>
  );
}
