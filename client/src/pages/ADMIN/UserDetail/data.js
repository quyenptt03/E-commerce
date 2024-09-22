import { CheckCircleOutline, LocalShipping, Star, StarBorder } from '@mui/icons-material';
import "./userDetail.scss"
export const productColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'product',
    headerName: 'Product',
    width: 230,
    renderCell: (params) => (
      <div className="cellWithImgProduct">
        <img className="cellImgProduct" src={params.row.img} alt={params.row.product} />
        {params.row.product}
      </div>
    ),
  },
  { field: 'price', headerName: 'Price', width: 20 },
  { field: 'quantity', headerName: 'Quantity', width: 20 },
  { field: 'shop', headerName: 'Shop', width: 80 },
  { field: 'method_Payment', headerName: 'Payment', width: 120 },
  { field: 'method_Status', headerName: 'Status Payment', width: 160 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      const renderStatusIcon = (status) => {
        switch (status) {
          case 'Success':
            return <CheckCircleOutline sx={{ color: '#4caf50' }} />;
          case 'Shipping':
            return <LocalShipping sx={{ color: '#ff9800' }} />;
          default:
            return null;
        }
      };

      return (
        <div className={`cellWithStatus ${params.row.status}`} style={{ display: 'flex', alignItems: 'center' }}>
          {renderStatusIcon(params.row.status)}
          <span style={{ marginLeft: '8px' }}>{params.row.status}</span>
        </div>
      );
    },
  },
  {
    field: 'orderDate',
    headerName: 'Order Date',
    type: 'date',
    width: 100,
    valueFormatter: (params) => {
      const date = new Date(params.value);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;  // Format as dd/mm/yyyy
    },
  },
  {
    field: 'rate',
    headerName: 'Rate',
    width: 160,
    renderCell: (params) => {
      const renderRating = (rate) => {
        return Array.from({ length: 5 }, (_, index) =>
          index < rate ? (
            <Star key={index} sx={{ color: '#FFD700' }} />
          ) : (
            <StarBorder key={index} sx={{ color: '#D3D3D3' }} />
          )
        );
      };

      return <div style={{ display: 'flex' }}>{renderRating(params.row.rate)}</div>;
    },
  },
];

export const rowsProductNew = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    price: 12,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", // sửa link hình ảnh
    shop: "John Smith",
    orderDate: "2/2/2023",
    quantity: 785, // Sửa từ amount thành quantity
    method_Payment: "Tiền mặt", // Thay method bằng method_Payment
    method_Status: "Chưa thanh toán", // Thêm trạng thái thanh toán
    status: "Vận chuyển",
    rate: 2,
  },
  {
    id: 2235235,
    product: "Playstation 5",
    price: 12,
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg", // sửa link hình ảnh
    shop: "Michael Doe",
    orderDate: "2/3/2023",
    quantity: 1, // Sửa từ amount thành quantity
    method_Payment: "Ví điện tử", // Thay method bằng method_Payment
    method_Status: "Chưa thanh toán", // Thêm trạng thái thanh toán
    status: "Thành công",
    rate: 5,
  },
  {
    id: 2342353,
    product: "Redragon S101",
    price: 12,
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg", // sửa link hình ảnh
    shop: "John Smith",
    orderDate: "1/12/2023",
    quantity: 35, // Sửa từ amount thành quantity
    method_Payment: "Tiền mặt", // Thay method bằng method_Payment
    method_Status: "Chưa thanh toán", // Thêm trạng thái thanh toán
    status: "Thành công",
    rate: 4,
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    price: 12,
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg", // sửa link hình ảnh
    shop: "Jane Smith",
    orderDate: "2/3/2024",
    quantity: 920, // Sửa từ amount thành quantity
    method_Payment: "COD", // Thay method bằng method_Payment
    method_Status: "Chưa thanh toán", // Thêm trạng thái thanh toán
    status: "Vận chuyển",
    rate: 1,
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    price: 12,
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg", // sửa link hình ảnh thành ASUS ROG Strix
    shop: "Harold Carol",
    orderDate: "2/9/2024",
    quantity: 2000, // Sửa từ amount thành quantity
    method_Payment: "Ví điện tử", // Thay method bằng method_Payment
    method_Status: "Chưa thanh toán", // Thêm trạng thái thanh toán
    status: "Vận chuyển",
    rate: 5,
  },
];
