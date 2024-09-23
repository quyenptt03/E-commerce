export const userInputs = [
  {
    id: 1,
    label: "User Name",
    type: "text",
    placeholder: "Đậu Thị Tiểu Điệp",
    name: "username", 
  },
  {
    id: 2,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
    name: "email",
  },
  {
    id: 3,
    label: "Phone Number",
    type: "text",
    placeholder: "+1 234 567 89",
    name: "phoneNumber", 
  },
  {
    id: 4,
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    name: "age", 
  },
  {
    id: 5,
    label: "Address",
    type: "text",
    placeholder: "216 Phù Đổng Thiên Vương",
    name: "address", 
  },
  {
    id: 6,
    label: "CMND/CCCD",
    type: "text",
    placeholder: "Enter your CMND/CCCD",
    name: "cccd", 
  },
];


  
  export const shopInputs = [
    {
      id: 1,
      label: "Name Shop",
      name:"name",
      type: "text",
      placeholder: "Apple Shop",
    },
    {
      id: 2,
      label: "Description",
      name:"description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: 3,
      label: "Email",
      name:"email",
      type: "text",
      placeholder: "2115196@dlu.edu.vn",
    },
    {
      id: 4,
      label: "Phone Number",
      name:"phoneNumber",
      type: "text",
      placeholder: "0987654321",
    },
    {
      id: 5,
      label: "Address",
      name:"address",
      type: "text",
      placeholder: "12 Hồ Chí Minh",
    },
    {
      id: 6,
      label: "CMND/CCCD",
      name:"cccd",
      type: "text",
      placeholder: "098765432198",
    },
  ];
  
  export const productInputs = [
    {
      id: 1,
      label: "Product Name",
      name: "name",
      type: "text",
      placeholder: "Enter product name",
    },
    {
      id: 2,
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      id: 3,
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter product description",
    },
    
    {
      id: 4,
      label: "Featured",
      name: "featured",
      type: "checkbox", 
    },
    {
      id: 5,
      label: "Inventory",
      name: "inventory",
      type: "number",
      placeholder: "Enter available stock",
    },
    {
      id: 6,
      label: "Free Shipping",
      name:"freeShipping",
      type: "checkbox", 
    },
    
    
  ];
  

  export const shipmentInputs = [
    {
      id: 1,
      label: "Shipment Name",
      name: "name",
      type: "text",
      placeholder: "Enter shipment name",
    },
    {
      id: 2,
      label: "Phone Number",
      name: "phoneNumber",
      type: "tel",
      placeholder: "Enter contact phone number",
    },
    {
      id: 3,
      label: "Status",
      name: "status",
      type: "select",
      options: [
        { value: "đang giao", label: "Đang giao" },
        { value: "nghỉ", label: "Nghỉ" },
      ],
    },
    {
      id: 4,
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter shipment description (address, details)",
    },
  ];
  