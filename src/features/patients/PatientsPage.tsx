import { Box, Typography, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { usePatients } from "./hooks";
import type { Patient } from "./types";

export const PatientsPage = () => {
  const { data = [], isLoading, isError, error } = usePatients();

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

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}
    >
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
  );
};
