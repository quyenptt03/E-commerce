import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';

const renderRating = (rate) => {
  if (!rate) return null;
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rate ? <Star key={index} sx={{ color: '#FFD700' }} /> : <StarBorder key={index} sx={{ color: '#D3D3D3' }} />
  );
  return <div style={{ display: 'flex' }}>{stars}</div>;
};

const List = ({ rowsProduct }) => {

  const hasShipment = rowsProduct.some(row => row.shipment);
  const hasPaymentStatus = rowsProduct.some(row => row.method_Status);
  const hasRating = rowsProduct.some(row => row.rate);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Manufacturer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Payment</TableCell>
            {hasShipment && <TableCell className="tableCell">Shipment</TableCell>}
            {hasPaymentStatus && <TableCell className="tableCell">Status Payment</TableCell>}
            <TableCell className="tableCell">Status</TableCell>
            {hasRating && <TableCell className="tableCell">Rate</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsProduct.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>                  {/* chưa hiện ảnh lớn, và chứa nhiều hình */}
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.quantity || row.amount}</TableCell>
              <TableCell className="tableCell">{row.manufacturer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.methodPayment || row.method}</TableCell>
              
              {hasShipment && (
                <TableCell className="tableCell">
                  {row.shipment ? row.shipment : "N/A"}
                </TableCell>
              )}

              {hasPaymentStatus && (
                <TableCell className="tableCell">
                  {row.method_Status ? row.method_Status : "N/A"}
                </TableCell>
              )}

              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>

              {hasRating && (
                <TableCell className="tableCell">
                  {row.rate ? renderRating(row.rate) : "N/A"}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
