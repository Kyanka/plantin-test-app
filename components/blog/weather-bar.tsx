"use client";
import { C } from "@/utils";
import { WeatherIcon } from "../icons/weather-icon";
import { Input, Field } from "@headlessui/react";
import clsx from "clsx";
import { SearchIcon } from "../icons/search-icon";

type WeatherBarProps = {
  currentTemperature: number;
};

export function WeatherBar({ currentTemperature }: WeatherBarProps) {
  return (
    <div className="flex rounded-2xl bg-greeny bg-opacity-15 items-end justify-between">
      <div className="py-14 px-4 sm:px-0 sm:pl-14 flex flex-col gap-4 h-full">
        <h1 className="font-extrabold text-4xl text-greeny-text">
          {C.STAY_TUNNED}
        </h1>
        <p className="font-bold text-lg">
          {C.CURRENT_TEMPERATURE(currentTemperature)}
        </p>
        <Field
          className={clsx(
            "p-4 bg-white flex justify-between rounded-xl items-center w-full border-none text-base shadow-sm",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          <Input placeholder="Search" className={"focus:outline-none w-full"} />
          <SearchIcon />
        </Field>
      </div>
      <WeatherIcon className="hidden sm:block" />
    </div>
  );
}
