import {
  Box,
  Typography,
  LinearProgress,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useCreatePatient, usePatients, useUpdatePatient } from "./hooks";
import type { Patient, PatientResponse } from "./types";
import { PatientDialog } from "./PatientDialog";
import { useState } from "react";

export const PatientsPage = () => {
  const [selectedPatient, setSelectedPatient] =
    useState<PatientResponse | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const { data = [], isLoading, isError, error } = usePatients();
  const createPatient = useCreatePatient();
  const updatePatient = useUpdatePatient();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90, sortable: true },
    { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 140 },
    { field: "firstName", headerName: "First Name", flex: 1, minWidth: 140 },
    {
      field: "dob",
      headerName: "DOB",
      width: 140,
      renderCell: (p) =>
        p.value ? new Date(p.value as string).toLocaleDateString() : "",
    },
    { field: "gender", headerName: "Gender", width: 120 },
    { field: "phone", headerName: "Phone", flex: 1, minWidth: 160 },
    { field: "email", headerName: "Email", flex: 1.2, minWidth: 200 },
  ];

  if (isError) {
    return (
      <Typography color="error">
        Failed to load: {(error as Error).message}
      </Typography>
    );
  }

  const handleCreate = (values: Omit<Patient, "id">) => {
    createPatient.mutate({ id: Date.now().toString(), ...values });
  };

  const handleUpdate = (values: Omit<Patient, "id">) => {
    if (selectedPatient) {
      updatePatient.mutate({ ...selectedPatient, ...values });
    }
  };

  return (
    <Paper
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      <Stack direction="row" justifyContent="flex-end" p={2}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Patient
        </Button>
      </Stack>

      <Box sx={{ flex: 1, minHeight: 0 }}>
        <DataGrid
          rows={data as Patient[]}
          columns={columns}
          disableRowSelectionOnClick
          loading={isLoading}
          hideFooterSelectedRowCount
          initialState={{
            sorting: { sortModel: [{ field: "lastName", sort: "asc" }] },
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          pageSizeOptions={[10, 25, 50]}
          sx={{ height: "100%" }}
          slots={{ loadingOverlay: LinearProgress as any }}
        />
      </Box>

      <PatientDialog
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedPatient(null);
        }}
        initialData={selectedPatient || undefined}
        onSubmit={selectedPatient ? handleUpdate : handleCreate}
      />
    </Paper>
  );
};
