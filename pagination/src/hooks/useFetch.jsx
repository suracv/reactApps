import { useEffect, useState } from "react";
import { Paginate as abc } from "../utils/paginate";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsersFromApi = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/john-smilga/followers?per_page=100"
      );
      const data = await response.json();
      setData(abc(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersFromApi();
  }, []);

  return { loading, data };
};
// fetch("https://api.github.com/users/john-smilga/followers?per_page=100")
// .then((res) => res.json())
// .then((data) => setData(paginate(data)))
// .catch((err) => console.log(err))
// .finally(() => setLoading(false));
