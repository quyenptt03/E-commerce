import { CheckCircleOutline, CancelOutlined } from "@mui/icons-material";
import DiamondIcon from '@mui/icons-material/Diamond';
import Star from '@mui/icons-material/Star'; // Sử dụng Star cho vàng
import StarBorder from '@mui/icons-material/StarBorder';
import Image from "./components/image/Image";
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Họ tên",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
  },
  {
    field: "phoneNumber",
    headerName: "Số điện thoại",
    width: 100,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 100,
  },
  {
    field: "member",
    headerName: "Thành viên",
    width: 160,
    renderCell: (params) => {
      const renderMemberIcon = (member) => {
        switch (member) {
          case 'kim cương':
            return <DiamondIcon sx={{ color: '#b9f2ff' }} />; 
          case 'vàng':
            return <Star sx={{ color: '#FFD700' }} />; 
          default:
            return <StarBorder sx={{ color: '#C0C0C0' }} />; 
        }
      };

      return (
        <div className={`cellWithStatus ${params.row.member}`} style={{ display: 'flex', alignItems: 'center' }}>
          {renderMemberIcon(params.row.member)}
          <span style={{ marginLeft: '8px' }}>{params.row.member}</span>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 140,
    renderCell: (params) => {
      return params.row.status ? (
        <CheckCircleOutline style={{ color: "green" }} /> // Dấu tích màu xanh cho true
      ) : (
        <CancelOutlined style={{ color: "red" }} /> // Dấu X màu đỏ cho false
      );
    },
  },
];

//temporary data//danh sách user
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    member: "kim cương",
    email: "1snow@gmail.com",
    phoneNumber: "0987654321",
    age: 35,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: true,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    phoneNumber: "0987654321",
    member: "vàng",
    age: 42,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: true,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    phoneNumber: "0987654321",
    member: "kim cương",
    age: 45,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: true,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    phoneNumber: "0987654321",
    member: "bạc",
    age: 16,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: false,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    phoneNumber: "0987654321",
    member: "bạc",
    age: 22,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: false,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    phoneNumber: "0987654321",
    member: "kim cương",
    age: 15,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: true,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    phoneNumber: "0987654321",
    member: "vàng",
    age: 44,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: true,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    phoneNumber: "0987654321",
    member: "bạc",
    age: 36,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: false,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    phoneNumber: "0987654321",
    member: "vàng",
    age: 65,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: true,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    phoneNumber: "0987654321",
    member: "bạc",
    age: 65,
    address: "25F Trương Định",
    cccd: "0987654321",
    status: false,
  },
];

// shopRows.js (dữ liệu mẫu)
export const shopRows = [
  {
    id: 1,
    name: "SnowShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: false,
    email: "1snow@gmail.com",
    phoneNumber:"0987654321",
    address: "18B Trần Khánh Dư",
    type: ["áo", "quần", "mỹ phẩm"],
    cccd: "0987654321",
    shipment: ["Shoppe Express", "Grab", "Giao hàng tiết kiệm"]
  },
  {
    id: 6,
    name: "GreyjoyShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: true,
    email: "greyjoyshop@gmail.com",
    address: "16E Phan Chu Trinh",
    type: ["quần", "giày"],
    cccd: "1234567890",
    shipment: ["Shoppe Express", "Giao hàng nhanh"]
  },
  {
    id: 2,
    name: "LannisterShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: false,
    email: "2lannister@gmail.com",
    phoneNumber:"0987654321",
    address: "19C Nguyễn Trãi",
    type: ["giày", "túi xách"],
    cccd: "0987654321",
    shipment: ["Shoppe Express", "Grab", "Giao hàng tiết kiệm"]
  },
  {
    id: 7,
    name: "MartellShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: true,
    description:"",
    email: "martellshop@gmail.com",
    phoneNumber:"0987654321",
    address: "25F Trương Định",
    type: ["mỹ phẩm", "phụ kiện"],
    cccd: "1122334455",
    shipment: ["Shoppe Express", "Grab"]
  },
  {
    id: 3,
    name: "StarkShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: false,
    email: "starkshop@gmail.com",
    phoneNumber:"0987654321",
    address: "21D Điện Biên Phủ",
    type: ["phụ kiện", "đồng hồ"],
    cccd: "0987654321",
    shipment: ["Shoppe Express", "Grab", "Giao hàng nhanh"]
  },
  {
    id: 8,
    name: "BoltonShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: true,
    email: "boltonshop@gmail.com",
    phoneNumber:"0987654321",
    address: "34G Lê Hồng Phong",
    type: ["đồ điện tử", "phụ kiện"],
    cccd: "6677889900",
    shipment: ["Giao hàng tiết kiệm", "Giao hàng nhanh"]
  },
  {
    id: 4,
    name: "TargaryenShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: false,
    email: "targaryenshop@gmail.com",
    phoneNumber:"0987654321",
    address: "12B Lý Thường Kiệt",
    type: ["đồ điện tử", "mỹ phẩm"],
    cccd: "0987654321",
    shipment: ["Shoppe Express", "Giao hàng tiết kiệm"]
  },
  {
    id: 9,
    name: "TyrellShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: true,
    email: "tyrellshop@gmail.com",
    phoneNumber:"0987654321",
    address: "19H Võ Văn Tần",
    type: ["áo", "túi xách"],
    cccd: "2233445566",
    shipment: ["Shoppe Express", "Grab"]
  },
  {
    id: 5,
    name: "BaratheonShop",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: false,
    email: "baratheonshop@gmail.com",
    phoneNumber:"0987654321",
    address: "13C Hai Bà Trưng",
    type: ["áo", "giày"],
    cccd: "0987654321",
    shipment: ["Shoppe Express", "Grab", "Giao hàng tiết kiệm"]
  }
];

export const shopColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Shop Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "type",
    headerName: "Product Types",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="productTypeCell">
          {params.row.type.map((item, index) => (
            <span key={index} className="productTypeTag">
              {item}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    renderCell: (params) => {
      return params.row.status ? (
        <CheckCircleOutline style={{ color: "green" }} /> // Dấu tích màu xanh cho true
      ) : (
        <CancelOutlined style={{ color: "red" }} /> // Dấu X màu đỏ cho false
      );
    },
  },
];

export  const  categories=[
  {
    id: 1,
    name: "Fashion Men , Women & Kid's",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-1.png"]
  },
  {
    id: 2,
    name: "Women Hand Bag",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-2.png"]
  },
  {
    id: 3,
    name: "Cap and Hat",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-4.png"]
  },
  {
    id: 4,
    name: "Electronics Headphone",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-6.png"]
  },
  {
    id: 5,
    name: "Foot Wares",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-7.png"]
  },
  {
    id: 6,
    name: "Wallet Categories",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-8.png"]
  },
  {
    id: 7,
    name: "Electronics Watch",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-11.png"]
  },
  {
    id: 8,
    name: "Eye Ware & Sunglass",
    imageUrl: ["https://techzaa.getappui.com/larkon/admin/assets/images/product/p-9.png"]
  },
      {
        id: 9,
        name: "Fashion Men , Women & Kid's",
        imageUrl: ["https://i.ebayimg.com/images/g/nE4AAOSwCAZhgpKs/s-l1600.webp"]
      },
      {
        id: 10,
        name:"Restaurant & Food Service",
        imageUrl: ["https://i.ebayimg.com/thumbs/images/g/9o0AAOSw1Qpdk9h7/s-l225.webp"]
      },
      {
        id: 11,
        name: "Sporting Goods & Equipment",
        imageUrl: ["https://i.ebayimg.com/thumbs/images/g/s-MAAOSwu4Rmvglm/s-l225.webp"]
      },
      {
        id: 12,
        name: "Watches",
        imageUrl: ["https://i.ebayimg.com/thumbs/images/g/DsoAAOSw~1tiGRWe/s-l225.webp"]
      },
      {
        id: 13,
        name: "Jewelry",
        imageUrl: ["https://i.ebayimg.com/thumbs/images/g/SwgAAOSwRhtiGRgx/s-l225.webp"]
      },
      {
        id: 14,
        name: "Shoes",
        imageUrl: ["https://i.ebayimg.com/thumbs/images/g/E-AAAOSw~Jhm4jKU/s-l225.webp"]
      },
      {
        id: 15,
        name: "Clothing",
        imageUrl: ["https://i.ebayimg.com/images/g/v18AAOSwMPxld47F/s-l500.webp"]
      },
      {
        id: 16,
        name: "Baby",
        imageUrl: ["https://i.ebayimg.com/thumbs/images/g/ZJgAAOSw4n9meVcz/s-l300.webp"]
      },
    
];



  

export const productsRows = [
  {
    id: 1,
    name: "Premium Quality Wool Wide Leg Pants from Australia – Perfect for Any Occasion",
    price: 100000,
    description: "✪ Key Features: - Trendy design, flexible and comfortable elasticity. Lightweight, rarely wrinkled, suitable for all body types, excellent sweat absorption. ✪ Care Instructions: Machine washable in cold water, do not use strong detergents.",
    category: 1,
    manufacturer: "Choice",
    featured: true,
    freeShipping: false,
    colors: ["Black #660", "Gray #0134", "White #0651"],
    inventory: 112,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/T8gAAOSwJkFlmhon/s-l1600.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/E2sAAOSwC9dlmhoo/s-l960.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/394AAOSwQDNlmhow/s-l960.webp",
        filename: "image-3"
      }
    ]
  },
  {
    id: 2,
    name: "BABY GIRL T SHIRT CUTE GIRLY LOVE FRIEND HAPPY SLOGAN FASHION GIFT PRESENT NEW",
    price: 150000,
    description: "✪ Key Features: Youthful and dynamic design with cotton fabric that absorbs sweat well. Slim fit design, highlighting the figure, suitable for women who love comfortable yet stylish fashion.",
    category: 1,
    manufacturer: "FashionBrand",
    featured: true,
    freeShipping: false,
    colors: ["White #0651", "Pink #0115"],
    inventory: 50,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/yjwAAOSwyi9lSgb6/s-l1600.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/LSoAAOSwG8tgN7vc/s-l1600.webp",
        filename: "image-2"
      }
    ]
  },
  {
    id: 3,
    name: "Womens Elegant Square Short Neck Puff Sleeves Slim Fit Summer Party Midi Dress",
    price: 250000,
    description: "* Item:Womens Elegant Square Short Neck Puff Sleeves Slim Fit Summer Party Midi Dress * Condition: 100% Brand New * Color:Black White * Size:Asian * Package:1pc Dress (without any accessories ） Please note: 1.Please allow a little error due to manual measurement. 2.The color maybe a little difference because of the light,screen reflection etc. 3.If you are not sure what size to choose, you can tell us your height and weight, we will recommend the right size for you.",
    category: 1,
    manufacturer: "VintageLine",
    featured: true,
    freeShipping: false,
    colors: ["Floral #0134", "Black #660", "White #0651"],
    inventory: 30,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/k6kAAOSwNxxmi9yh/s-l1600.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/xmMAAOSw24lkl4VW/s-l1600.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/ybkAAOSwBF1kl4VX/s-l960.webp",
        filename: "image-3"
      }
    ]
  },
  {
    id: 4,
    name: "Pullover Turtleneck Sweater Women Fall Soft Knit Sweater Elastic Simple Basic",
    price: 180000,
    description: "✪ Key Features: Plain sweater with a simple design, suitable for all styles. Warm fleece material, great for cold weather.",
    category: 1,
    manufacturer: "BasicWear",
    featured: true,
    freeShipping: false,
    colors: ["Black #660", "Gray #0134", "Brown #0115"],
    inventory: 60,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/A84AAOSwi6Vk9Xdt/s-l960.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/gtsAAOSwOrRk9Xdu/s-l960.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/MOgAAOSwFYFk9Xdu/s-l960.webp",
        filename: "image-3"
      }
    ]
  },
  {
    id: 5,
    name: "Lapel Collar Button Down Long Sleeves Loose Knitted Baggy Sweater Jumpers Womens",
    price: 220000,
    description: "Please note: 1.Due to photography lighting and differences in computer screens there will be a little chromatic aberration..Due to photography lighting and differences in computer screens there will be a little chromatic aberration. 2.If there are any problem with leaving us 5 star positive feedback when you receive the item,plz message us first before leaving any negative or neutral feedback or open any case,we will try our best to let you have a happy purchase.",
    category: 1,
    manufacturer: "CozyWear",
    featured: true,
    freeShipping: false,
    colors: ["Black #660", "Red #0115", "Gray #0134"],
    inventory: 45,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/38MAAOSw9Uhm22ry/s-l1600.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/xnAAAOSwFO9m22rx/s-l960.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/hD4AAOSwdl9m22rx/s-l960.webp",
        filename: "image-3"
      }
    ]
  },
  {
    id: 6,
    name: "[A'PIEU] Honey & Milk Lip Scrub/Lip Balm/Lip Oil / Lip Sleeping Pack / Lip Mask",
    price: 80000,
    description: "Feature Lip Scrub 8ml: Helps to gently remove dead skin cells from the lips. Honey and milk extracts provide intense hydration, making lips healthy and soft.",
    category: 2,
    manufacturer: "NatureCare",
    colors: ["Pink #0194", "Orange #0193"],
    featured: true,
    freeShipping: false,
    inventory: 100,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/~hcAAOSw0lNmjdxh/s-l960.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/~hcAAOSw0lNmjdxh/s-l960.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/8xEAAOSwlNJmjdxi/s-l960.webp",
        filename: "image-3"
      }
    ]
  },
  {
    id: 7,
    name: "Costway Computer Desk 28.5' Medium Wood Triangle Compact w/ Keyboard Tray Brown",
    price: 1500000,
    description: "Need to charge but the nearest outlet is far away, The corner desk with USB ports and outlets would be worth considering, which allows you to charge various kinds of electronics with ease.",
    category: 2,
    manufacturer: "FurnitureCo",
    colors: ["Brown #0194", "Black #660"],
    featured: true,
    freeShipping: false,
    inventory: 20,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/ifUAAOSw7fxmZC8s/s-l1600.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/CdUAAOSwr35mZC8s/s-l960.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/dU8AAOSwxh5mZC8t/s-l960.webp",
        filename: "image-3"
      }
    ]
  },
  {
    id: 8,
    name: "APPLE MACBOOK AIR A1466 13\" 2015 128GB SSD 1.6GHz I5 8GB GREAT BATTERY LIFE",
    price: 13000000,
    description: "Processor: i5 1.6GHz RAM: 8GB SSD: 128GB | BATTERY LIFE: 8 HOURS * GOOD BATTERY",
    category: 3,
    manufacturer: "Apple",
    featured: true,
    freeShipping: true,
    inventory: 15,
    images: [
      {
        id: 1,
        path: "https://i.ebayimg.com/images/g/yvIAAOSwIh5mbCvV/s-l1600.webp",
        filename: "image-1"
      },
      {
        id: 2,
        path: "https://i.ebayimg.com/images/g/gy4AAOSwbftmbCvX/s-l960.webp",
        filename: "image-2"
      },
      {
        id: 3,
        path: "https://i.ebayimg.com/images/g/R1UAAOSwHgJmbCvZ/s-l960.webp",
        filename: "image-3"
      }
    ]
  }
];

export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Product Name",
    width: 230,
    whiteSpace: "wrap"
  },
  {
    field: "images",
    headerName: "Images",
    width: 230,
    renderCell: (params) => <Image images={params.row.images} />, 
    height:230,

  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "manufacturer",
    headerName: "Manufacturer",
    width: 150,
  },
  {
    field: "inventory",
    headerName: "Inventory",
    width: 100,
  },
];

export const shipmentsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Shipment Name",
    width: 230,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
];


export const shipmentsRows = [
  {
    id: 1,
    name: "Shipment A",
    phoneNumber: "0912345678",
    status: "đang giao",
    description: "Giao hàng đến 123 Lê Lợi, quận 1, TP.HCM. Hàng hóa dễ vỡ.",
  },
  {
    id: 2,
    name: "Shipment B",
    phoneNumber: "0909876543",
    status: "đang giao",
    description: "Giao hàng đến 456 Nguyễn Huệ, quận 3, Hà Nội. Kiện hàng nặng 20kg.",
  },
  {
    id: 3,
    name: "Shipment C",
    phoneNumber: "0987654321",
    status: "nghỉ",
    description: "Giao hàng đến 789 Hoàng Diệu, quận 5, TP.HCM. Kiện hàng gồm thực phẩm khô.",
  },
  {
    id: 4,
    name: "Shipment D",
    phoneNumber: "0933456789",
    status: "đang giao",
    description: "Giao hàng đến 321 Trần Hưng Đạo, quận 7, Đà Nẵng. Hàng hóa dễ vỡ.",
  },
  {
    id: 5,
    name: "Shipment E",
    phoneNumber: "0901234567",
    status: "nghỉ",
    description: "Giao hàng đến 654 Phan Châu Trinh, quận 9, TP.HCM. Hàng hóa nặng, yêu cầu bốc xếp.",
  },
];
