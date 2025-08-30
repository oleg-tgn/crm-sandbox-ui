export type Patient = {
  id?: string | number;
  firstName: string;
  lastName: string;
  dob: string;
  gender?: "male" | "female";
  phone?: string;
  email?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type PatientResponse = Patient & {
  id: string | number;
};
