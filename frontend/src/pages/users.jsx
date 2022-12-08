import React from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useUsers } from "../api/useUsers";
import { DataGrid } from "@mui/x-data-grid";
import { useGlobalProvider } from "../context/GlobalContext";
import { UserModal } from "../components/modals/usersDetailModal";

const Users = () => {
  const { getUsers } = useUsers();
  const {
    users: { users },
  } = useGlobalProvider();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const datas = users.map((el, index) => {
    return { ...el, id: el._id, index: index + 1, };
  });

  return (
    <Box style={style.container}>
      <Box style={style.box}>
        <Box display="flex" justifyContent="space-between">
          {/* <Typography>Order listing</Typography> */}
        </Box>
        <Box sx={{ height: 600 }}>
          <DataGrid rows={datas} columns={columns} pageSize={6} rowsPerPageOptions={[9]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} rowHeight={80} />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;

const columns = [
  {
    field: "index",
    headerName: "No",
    width: 50,
    marginTop: "100px"
  },
  {
    field: "id",
    headerName: "User ID",
    width: 200,
  },
  {
    field: "email",
    headerName: "User email",
    type: "number",
    width: 200,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
  },
  {
    field: "action",
    headerName: "Order history",
    width: 100,
    renderCell: (params) => <UserModal el={params.row} />,
  },
];

const style = {
  container: {
    height: "100vh",
    width: "100vw",
    paddingTop: "40px",
    paddingRight: "40px",
    backgroundColor: "#f2f2f9"
  },
  box: {
    marginLeft: "270px",
    backgroundColor: "#fff"
  },
  head: {
    maxWidth: "200px",
    fontWeight: 600,
  }
}