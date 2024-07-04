import axios from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export interface EditActivityDetails {
  name: string;
  description: string;
  id: string;
}

async function putData(data: EditActivityDetails) {
  await axios.put(`http://localhost:3333/activity/${data.id}`, data);
}

export function useEditActivityMutate(): UseMutationResult<
  unknown,
  unknown,
  EditActivityDetails,
  unknown
> {
  const mutate = useMutation({
    mutationFn: putData,
  });
  return mutate;
}
