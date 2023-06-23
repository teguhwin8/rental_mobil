"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }: { otherClass: string }) => (
  <button type="submit" className={`-ml-11 z-0 ${otherClass}`}>
    <Image
      src="/magnifying-glass.svg"
      width={40}
      height={40}
      alt="magnifying glass"
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const updateSearchParams = () => {
    const params = new URLSearchParams();

    if (manufacturer) {
      params.append("manufacturer", manufacturer.toLocaleLowerCase());
    } else {
      params.delete("manufacturer");
    }

    if (model) {
      params.append("model", model.toLocaleLowerCase());
    } else {
      params.delete("model");
    }

    return params.toString();
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    const params = updateSearchParams();

    router.push(`?${params}`);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          placeholder="Model"
          className="searchbar__input"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
