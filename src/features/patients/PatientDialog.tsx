// src/features/patients/PatientDialog.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";
import type { Patient, PatientResponse } from "./types";

type Props = {
  open: boolean;
  onClose: () => void;
  initialData?: PatientResponse; // если передано → режим редактирования
  onSubmit: (values: Patient | PatientResponse) => void;
};

export const PatientDialog = ({
  open,
  onClose,
  initialData,
  onSubmit,
}: Props) => {
  const [patient, setPatient] = useState<Patient | PatientResponse>({
    firstName: "",
    lastName: "",
    dob: "",
    gender: undefined,
    phone: "",
    email: "",
    notes: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setPatient(rest);
    }
  }, [initialData]);

  const handleChange =
    (field: keyof typeof patient) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPatient((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = () => {
    onSubmit(patient);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{initialData ? "Edit Patient" : "New Patient"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="First Name"
            value={patient.firstName}
            onChange={handleChange("firstName")}
          />
          <TextField
            label="Last Name"
            value={patient.lastName}
            onChange={handleChange("lastName")}
          />
          <TextField
            label="Date of Birth"
            type="date"
            value={patient.dob}
            onChange={handleChange("dob")}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Gender"
            value={patient.gender}
            onChange={handleChange("gender")}
          />
          <TextField
            label="Phone"
            value={patient.phone}
            onChange={handleChange("phone")}
          />
          <TextField
            label="Email"
            value={patient.email}
            onChange={handleChange("email")}
          />
          <TextField
            label="Notes"
            value={patient.notes}
            onChange={handleChange("notes")}
            multiline
            rows={3}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {initialData ? "Save" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
