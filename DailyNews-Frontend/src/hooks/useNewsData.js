import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm, country) => {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);
        
        const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=166af9fca6ce44f2aff644f689c8668a`;

        const countryParam = country ? `&country=${country}` : "";
        const categoryParam = category ? `&category=${category}` : "";
        const searchParam = searchTerm ? `&q=${searchTerm}` : "";

        const url = apiUrl + countryParam + categoryParam + searchParam;
        
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm,country]);

  return { newsData, loading, error };
};

export default useNewsData;
