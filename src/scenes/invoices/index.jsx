import { Box, Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useContext } from "react";
import { ContactContext } from "../../context/contact-context";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {invoices} = useContext(ContactContext)
  console.log()
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        cellClassName: "name-column--cell",
        renderCell:(params)=>(
            <Typography>
                ${params.row.cost}
            </Typography>
        )
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
        field: "date",
        headerName: "Date",
        flex: 1,
    },

  ];

  return (
    <Box ml="20px" mr="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={invoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;