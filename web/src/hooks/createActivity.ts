import axios from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export interface ActivityRegisterDetails {
  name: string;
  description: string;
  id: string;
}

async function postData(data: ActivityRegisterDetails) {
  await axios.post("http://localhost:3333/activity", data);
}

export function useCreateActivityMutate(): UseMutationResult<
  unknown,
  unknown,
  ActivityRegisterDetails,
  unknown
> {
  const mutate = useMutation({
    mutationFn: postData,
  });
  return mutate;
}
