import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";

const Datatable = ({ nameTable, columns, dataSource, dialog, url ,type}) => {
  const [data, setData] = useState(dataSource);
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [selectionModel, setSelectionModel] = React.useState([]); // Thay đổi trạng thái chọn

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNew = () => {
    const updatedData = data.map((item) =>
      selectionModel.includes(item.id) ? { ...item, status: true } : item
    );
    setData(updatedData);
  };
  const handleDeletes = () => {
      const updatedData = data.filter((item) => !selectionModel.includes(item.id));
      setData(updatedData);
      setSelectionModel([]); // Xóa lựa chọn sau khi xóa
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
             {dialog ? (
              <>
                <div
                  className="viewButton"
                  onClick={() => handleClickOpen(params.row)}
                >
                 Detail
                </div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      width: '80%',
                      maxWidth: '600px',
                    }
                  }}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }}>
                    Shop Detail
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent dividers>
                    {selectedRow && (
                      <div className="dialogContent">
                        <img
                          className="dialogImg"
                          src={selectedRow.img}
                          alt="shop"
                        />
                        <div className="dialogDetails">
                          <p><strong>Name Shop:</strong> {selectedRow.name}</p>
                          <p><strong>Email:</strong> {selectedRow.email}</p>
                          <p><strong>Phone:</strong> {selectedRow.phoneNumber}</p>
                          <p><strong>Adress:</strong> {selectedRow.address}</p>
                          <p><strong>CMND:</strong> {selectedRow.cccd}</p>
                          <p><strong>Type:</strong> {selectedRow.type.join(", ")}</p>
                          <p><strong>Shipment:</strong></p>
                          <ul>
                            {selectedRow.shipment.map((method, index) => (
                              <li key={index}>{method}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </>
            ): (
              
              <Link to={`/${type}/${url}/${params.row.id}`} state={{ id: params.row.id }} style={{ textDecoration: "none" }}>
                <div className="viewButton">Detail</div>
              </Link>
            )}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <p>{nameTable}</p>
        {dialog?(
          <div className="datatablelink">
          <p className="link" onClick={handleAddNew}>
          Accept
       </p >
       <p className="link" onClick={handleDeletes}>
          Delete
       </p>
          </div>
       
        ):(
          <Link to={`${type}/${url}/new`} className="link">
          Add
        </Link>
        )}
        
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection);
        }}
      />
    </div>
  );
};

export default Datatable;

