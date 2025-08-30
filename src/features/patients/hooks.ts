import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/client";
import type { Patient, PatientResponse } from "./types";

export const usePatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: async (): Promise<PatientResponse[]> => {
      const { data } = await api.get<PatientResponse[]>("/patients");
      return data;
    },
    staleTime: Infinity,
  });
};

export const useCreatePatient = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (patient: Patient) => {
      const { data } = await api.post<Patient>("/patients", patient);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["patients"] });
    },
  });
};

export const useUpdatePatient = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (patient: Partial<PatientResponse>) => {
      const { data } = await api.patch<PatientResponse>(
        `/patients/${patient.id}`,
        patient
      );
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["patients"] });
    },
  });
};
