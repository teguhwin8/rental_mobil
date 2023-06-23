"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CustomButton from "./CustomButton";
import CardDetails from "./CardDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="w-full relative object-contain h-40 my-3">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          className="object-contain"
          alt=""
        />
      </div>

      <div className="flex w-full relative mt-2">
        <div className="flex justify-between w-full text-gray group-hover:invisible">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-xs font-medium">
              {transmission === "m" ? "Manual" : "Otomatis"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-xs font-medium">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-xs font-medium">
              {city_mpg} <span className="text-gray-400">MPG</span>
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Lihat Detail"
            containerStyles="w-full py-3 rounded-full bg-primary-blue"
            textStyles="text-white font-semibold text-sm leading-3"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <CardDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      </div>
    </div>
  );
};

export default CarCard;
