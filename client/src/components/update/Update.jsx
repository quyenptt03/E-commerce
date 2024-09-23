import "../new/new.scss";
import CustomizedButtons from "../button/button";
import { useState, useEffect } from "react";
import { categories, productsRows,userRows,shopRows,shipmentsRows } from "../../datatablesource";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./update.scss"
const manufacturers = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Samsung" },
];
const status = [
  { id: 1, name: false},
  { id: 2, name: true },
];
const member = [
  { id: 1, name: "kim cương"},
  { id: 2, name: "vàng" },
  { id: 3, name: "bạc" },
];
const shipment = [
  { id: 1, name: "Grab"},
  { id: 2, name: "Giao Hàng Tiết Kiệm" },
  { id: 3, name: "Express Shopee" },
];
const Update = ({ inputs, title, userType, id }) => {
  const [file, setFile] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedShipment, setSelectedShipment] = useState("");
  const [selectedStatus, setSelectedstatus] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [colors, setColors] = useState([]); // Colors for products
  const [customColor, setCustomColor] = useState("");
  const [images, setImages] = useState([]); // Product images
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    cccd: "", // Số cccd/CCCD
    age: 0,
    status: "",
    price: 0,
    description: "",
    featured: false,
    freeShipping: false,
    inventory: 0,
    shipment:[],
    type:[],
  });
  // Load sản phẩm dựa trên ID
  useEffect(() => {
    if (id && userType === "product") {
      const product = productsRows.find((product) => product.id === id);
      if (product) {
        setFormData({
          name: product.name,
          price: product.price,
          description: product.description,
          featured: product.featured,
          freeShipping: product.freeShipping,
          inventory: product.inventory,
        });
        setSelectedCategory(product.category || "");
        setSelectedManufacturer(product.manufacturer || "");
        setColors(product.colors || []);
        setImages(product.images || []);
      }
    } else if (id && userType === "user") {
      const user = userRows.find((user) => user.id === id);
      if (user) {
        setFormData({
          username: user.username,
          email: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address,
          cccd: user.cccd,
          age: user.age,
        });
        setFile(user.img || ""); // Nếu user đã có ảnh thì set ảnh đó
      }
    }  else if (id && userType === "shop") {
      const shop = shopRows.find((shop) => shop.id === id);
      if (shop) {
        setFormData({
          name: shop.name,
          email: shop.email,
          phoneNumber: shop.phoneNumber,
          address: shop.address,
          cccd: shop.cccd,
          description: shop.description || "",
        });
        setFile(shop.img || "");
      }
    }  else if (id && userType === "category") {
      const shop = categories.find((shop) => shop.id === id);
      if (shop) {
        setFormData({
          name: shop.name,
        });
        setFile(shop.imageUrl || "");
      }
    }  else if (id && userType === "shipment") {
      const shop = shipmentsRows.find((shop) => shop.id === id);
      if (shop) {
        setFormData({
          name: shop.name,
          email: shop.email,
          phoneNumber: shop.phoneNumber,
          description: shop.description || "",
        });
        setFile(shop.imageUrl || "");
      }
    }
  }, [id, userType]);
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleAddColor = (e) => {
    const newColor = e.target.value;
    if (!colors.includes(newColor)) {
      setColors([...colors, newColor]);
    }
  };

  const handleManualColorInput = () => {
    if (customColor && !colors.includes(customColor)) {
      setColors([...colors, customColor]);
      setCustomColor("");
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };
  const handleImageUploadUser = (e) => {
    const file = e.target.files[0];
    setFile(file ? URL.createObjectURL(file) : ""); 
  };
  const handleSave = () => {
    let missingFields = [];
    if (userType === "product") {
      const requiredFields = ["name", "price", "description", "category", "manufacturer", "featured", "freeShipping", "inventory"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
      if (colors.length === 0) missingFields.push("colors");
      if (images.length === 0) missingFields.push("images");
    }else if (userType === "user") {
      const requiredFields = ["username", "email", "phoneNumber", "address", "cccd", "age", "status"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
      if (!file) missingFields.push("image"); 
    } else if (userType === "shop") {
      const requiredFields = ["name", "email", "phoneNumber", "address", "cccd", "status"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
      if (!file) missingFields.push("image");
    } else if (userType === "category") {
      const requiredFields = ["name"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
      if (!file) missingFields.push("image");
    }



    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
    } else {
      if (id) {
        console.log("Updating product with ID:", id, { ...formData, colors, images });
      } else {
        console.log("Creating new product:", { ...formData, colors, images });
      }
    }
  };

  return (
    <div className="newContainer">
      <div className="top updateTitle">
        <h3>{title}</h3>
      </div>
      <div className="bottom">
        <div className="left">
          {userType === "product" ? (
            <>
              <div className="formInput">
                <label>Images</label>
                <input type="file" multiple onChange={handleImageUpload} className="dropSelect" />
                <div className="selectedImages">
                  {images.map((image, index) => (
                    <img key={index} src={image.path || image} alt="product" className="imagePreview" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
                <img src={file || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="User" className="imagePreview" />
          </>
          )}


        </div>
        <div className="right">
          <form>
          {userType !== "product" && (
                <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleImageUploadUser}
                  style={{ display: "none" }}
                />
              </div>
            )}
            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                {input.type === "checkbox" ? (
                  <input
                    type={input.type}
                    name={input.name}
                    checked={formData[input.name] || false}
                    onChange={handleFormChange}
                  />
                ) : (
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={formData[input.name] || ""}
                    onChange={handleFormChange}
                  />
                )}
              </div>
            ))}
             {userType === "shop" && (
              <>
               <div className="formInput">
                  <label>Shipment</label>
                  <select value={selectedShipment} onChange={(e) => setSelectedShipment(e.target.value)} className="dropSelect">
                    {shipment.map((shipment) => (
                      <option key={shipment.id} value={shipment.id}>
                        {shipment.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formInput">
                  <label>Categogy</label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="dropSelect">
                    {categories.map((categories) => (
                      <option key={categories.id} value={categories.id}>
                        {categories.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formInput">
                  <label>Status</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="dropSelect">
                    {status.map((stat) => (
                      <option key={stat.id} value={stat.name}>
                        {stat.name ? "Active" : "Inactive"}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
             {userType === "user" && (
              <>
               <div className="formInput">
                  <label>Member</label>
                  <select value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)} className="dropSelect">
                    {member.map((me) => (
                      <option key={me.id} value={me.id}>
                        {me.name}
                      </option>
                    ))}
                  </select>
                </div>
              <div className="formInput">
                <label>Status</label>
                <select value={selectedStatus} onChange={(e) => setSelectedstatus(e.target.value)} className="dropSelect">
                    {status.map((status) => (
                      <option key={status.id} value={status.id}>
                        {status.name}
                      </option>
                    ))}
                  </select>
              </div>
              </>
            )}
            {userType === "product" && (
              <>
                <div className="formInput">
                  <label>Category</label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="dropSelect">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formInput">
                  <label>Manufacturer</label>
                  <select value={selectedManufacturer} onChange={(e) => setSelectedManufacturer(e.target.value)} className="dropSelect">
                    {manufacturers.map((manufacturer) => (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formInput">
                  <label>Colors</label>
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    placeholder="Enter or modify selected color #hex"
                    className="selectedColorsInput"
                  />
                  <div className="colorPickerSection">
                    <input className="colorInput" type="color" onChange={handleAddColor} title="Pick a color" />
                    <button type="button" onClick={handleManualColorInput}>
                      Add Color
                    </button>
                  </div>
                  <div className="selectedColors">
                    {colors.map((color, index) => (
                      <div key={index} className="colorItem">
                        <span className="colorBox" style={{ backgroundColor: color }}></span>
                        <span>{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="btnMargin">
              <CustomizedButtons color="success" label="Save" onClick={handleSave} className="button" />
              <CustomizedButtons color="grey" label="Cancel" className="button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
