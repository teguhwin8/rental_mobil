import Image from "next/image";

import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Katalog</h1>
          <p>Cari mobil yang kamu suka</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <div className="home__cars-wrapper">
            {allCars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-black text-xl font-bold">Oops, no result</h2>
          </div>
        )}
      </div>
    </main>
  );
}
