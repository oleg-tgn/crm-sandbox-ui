import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/client";
import type { Patient } from "./types";

export const usePatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: async (): Promise<Patient[]> => {
      const { data } = await api.get<Patient[]>("/patients");
      return data;
    },
    staleTime: Infinity,
  });
};
