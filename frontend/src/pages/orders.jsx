import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useOrders } from "../api/useOrders";
import { useProducts } from "../api/useProducts"
import { useGlobalProvider } from "../context/GlobalContext";
import { BasicModal } from "../components/modals/orderDetailModal";
import { StatusSelect } from "../components/selects/orderStatusSelect";

const Orders = () => {
  const { getOrders } = useOrders();
  const { getProducts } = useProducts();
  const {
    orders: { orders },
  } = useGlobalProvider();

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line
  }, []);


  const datas = orders.map((el, index) => {
    return {
      ...el, id: el._id, index: index + 1, createdAt: Date(el.createdAt).slice(0, 15), orderName: el.orderItem.name, address: el.user.address.citySoum
    };
  });

  return (
    <Box style={style.box}>
      <Box style={style.container}>
        <Box sx={{ height: 600 }}>
          <DataGrid rows={datas} columns={columns} pageSize={6} rowsPerPageOptions={[6]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} rowHeight={80} />
        </Box>
      </Box>
    </Box>
  );
};

const columns = [
  {
    field: "index",
    headerName: "No",
    width: 50,
  },
  {
    field: "id",
    headerName: "Order ID",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Purchased on",
    width: 170,
  },
  {
    field: "orderName",
    headerName: "Order name",
    type: "number",
    width: 170,
  },
  {
    field: "size",
    headerName: "Size",
    type: "number",
    width: 80,
  },
  {
    field: "address",
    headerName: "Ship to",
    width: 170,
  },
  {
    field: "status",
    headerName: "Status",
    width: 170,
    renderCell: (params) => <StatusSelect element={params.row} />,
  },
  {
    field: "action",
    headerName: "Action",
    width: 140,
    renderCell: (params) => <BasicModal el={params} />,
  },
];

export default Orders;

const style = {
  box: {
    backgroundColor: "#f2f2f9",
    height: "100vh",
    width: "100vw",
    paddingTop: "40px",
    paddingRight: "40px"

  },
  container: {
    marginLeft: "270px",
    backgroundColor: "#ffff",
  },
  head: {
    maxWidth: "200px",
    fontWeight: 600,
  },
};