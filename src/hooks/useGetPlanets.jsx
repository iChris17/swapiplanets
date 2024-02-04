import React, { useCallback, useEffect, useState } from "react";

const PLANETS_URL = "https://swapi.dev/api/planets/";

const useGetPlanets = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPlanets = useCallback((url = PLANETS_URL) => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setData(null);
      });
  }, []);

  return { loading, data, getPlanets };
};

export default useGetPlanets;
