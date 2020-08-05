import { queryCache, useQuery, useMutation } from "react-query";

import { fetchGamers, postGamer } from "./api-client";

export default function useGamers() {
  const { data: gamers, isLoading, error } = useQuery("gamers", fetchGamers);

  const [addGamer] = useMutation(postGamer, {
    onSuccess: () => {
      queryCache.invalidateQueries("gamers");
    },
  });

  return [gamers, { isLoading, error, addGamer }];
}
