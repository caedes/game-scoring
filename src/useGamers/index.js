import { useQuery } from "react-query";

import fetchGamers from "./fetch";

export default function useGamers() {
  const { data: gamers, isLoading, error } = useQuery("gamers", fetchGamers);

  const addGamer = (name) => {
    console.log({ name });
  };

  return [gamers, { isLoading, error, addGamer }];
}
