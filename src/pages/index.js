import { Inter } from "next/font/google";
import useGetPlanets from "@/hooks/useGetPlanets";
import { PlanetCard } from "@/components/PlanetCard";
import React, { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, loading, getPlanets } = useGetPlanets();
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  useEffect(() => {
    if (data) {
      setPlanets(data?.results);
    }
  }, [data]);

  const handlePrevious = () => {
    getPlanets(data?.previous);
  };

  const handleNext = () => {
    getPlanets(data?.next);
  };

  const sortByName = () => {
    const sortedArray = planets.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setPlanets([...sortedArray]);
  };

  const renderLoading = () => {
    return (
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1 className="text-xl">Loading data...</h1>
      </div>
    );
  };

  const renderPlanets = () => {
    return (
      <React.Fragment>
        <div className="grid text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <button
            className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            type="button"
            onClick={sortByName}
          >
            Sort Alphabetically
          </button>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {planets?.map((planet, index) => {
            return <PlanetCard key={index} planet={planet} />;
          })}
        </div>
      </React.Fragment>
    );
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {loading ? renderLoading() : renderPlanets()}

      <Pagination
        data={data}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </main>
  );
}
