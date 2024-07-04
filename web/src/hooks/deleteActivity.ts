import axios from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

async function deleteData(activityId: string) {
  await axios.delete(`http://localhost:3333/activity/${activityId}`);
}

export function useDeleteActivityMutate(): UseMutationResult<
  unknown,
  unknown,
  string,
  unknown
> {
  const mutate = useMutation({
    mutationFn: deleteData,
  });
  return mutate;
}
