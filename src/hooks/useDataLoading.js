import { useData } from "../contexts/DataProvider";
import { useEffect } from "react";
import axios from "axios";

export const useDataLoading = () => {
  const { setUserData } = useData();

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (status === 200) {
          setUserData(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setUserData]);
};
