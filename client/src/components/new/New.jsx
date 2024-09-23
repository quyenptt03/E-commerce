import "./new.scss";
import CustomizedButtons from "../button/button";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { categories } from "../../datatablesource";

const manufacturers = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Samsung" },
];

const New = ({ inputs, title, userType }) => {
  const [file, setFile] = useState("");
  const [member, setMember] = useState("");
  const [status, setStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [customType, setCustomType] = useState(""); // Custom type input
  const [selectedType, setSelectedType] = useState([]); // Selected product types
  const [shipment, setShipment] = useState([]); // Shipping methods
  const [colors, setColors] = useState([]); // Colors for products
  const [customColor, setCustomColor] = useState("");
  const [images, setImages] = useState([]); // Product images
  const [formData, setFormData] = useState({}); // General form data
  const handleTypeSelect = (e) => {
    const { value } = e.target;
    if (!selectedType.includes(value)) {
      setSelectedType([...selectedType, value]);
    }
  };

  // Xử lý khi thêm loại hình sản phẩm mới
  const handleAddCustomType = (e) => {
    const { value } = e.target;
    if (!categories.name.includes(value)) {
      setSelectedCategory([...categories.name, value]);
    }
  };

  const handleShipmentSelect = (e) => {
    const { value } = e.target;
    if (!shipment.includes(value)) {
      setShipment([...shipment, value]);
    }
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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    let missingFields = [];

    // Validation based on user type
    if (userType === "user") {
      const requiredFields = ["name", "email", "address", "phone", "age", "member", "status"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
    } else if (userType === "category") {
      if (!formData.name || !file) missingFields.push("name", "image");
    } else if (userType === "shop") {
      const requiredFields = ["name", "description", "email", "phone", "address", "cmnd", "shipment", "categoryId", "status"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
    } else if (userType === "product") {
      const requiredFields = ["name", "price", "description", "category", "manufacturer", "featured", "freeShipping", "inventory"];
      requiredFields.forEach((field) => {
        if (!formData[field]) missingFields.push(field);
      });
      if (colors.length === 0) missingFields.push("colors");
      if (images.length === 0) missingFields.push("images");
    }

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
    } else {
      console.log("Form Data:", {
        ...formData,
        colors,
        images,
        file: file ? URL.createObjectURL(file) : null,
      });
    }
  };

  return (
    <div className="newContainer">
      <div className="top">
        <h3>{title}</h3>
      </div>
      <div className="bottom">
        <div className="left">
        {userType === "product" ?(
              <>
              <div className="formInput">
              <label>Images</label>
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
                className="dropSelect"
              />
              <div className="selectedImages">
                {images.map((image, index) => (
                  <img key={index} src={image} alt="product" className="imagePreview" />
                ))}
              </div>
            </div>
            </>):(
               <img
               src={
                 file
                   ? URL.createObjectURL(file)
                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
               }
               alt="Uploaded"
             />
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
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  multiple={userType === "product"} 
                />
              </div>
            )}
            
            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.label.toLowerCase().replace(" ", "_")}
                  onChange={handleFormChange}
                />
              </div>
            ))}

            {userType === "user" && (
              <>
                <div className="formInput">
                  <label className="dropLable">Member</label>
                  <select value={member} onChange={(e) => setMember(e.target.value)} className="dropSelect">
                    <option value="kim cương">Kim Cương</option>
                    <option value="vàng">Vàng</option>
                    <option value="bạc">Bạc</option>
                  </select>
                </div>
              </>
            ) }{userType === "shop" && (
              <>
                <div className="formInput">
                  <label className="dropLable">Loại hình sản phẩm</label>
                  <div>
                    <select  className="dropSelect" onChange={handleTypeSelect}>
                      {categories.map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    {selectedType.map((item, index) => (
                      <span key={index} className="selectedItem">{item}/</span>
                    ))}
                  </div>
                  <div className="formInputAddType">
                    <input
                     className="formInput"
                      type="text"
                      placeholder="Type Category"
                      value={customType}
                      onChange={(e) => setCustomType(e.target.value)}
                    />
                    <button type="button" onClick={handleAddCustomType}>
                      +
                    </button>
                  </div>
                </div>

                <div className="formInput">
                  <label className="dropLable">Shipment</label>
                  <select   className="dropSelect" onChange={handleShipmentSelect}>
                    <option value="Shoppe Express">Shoppe Express</option>
                    <option value="Grab">Grab</option>
                    <option value="Giao Hàng Nhanh">Giao Hàng Nhanh</option>
                  </select>
                  <div>
                    {shipment.map((item, index) => (
                      <span key={index} className="selectedItem">{item}/</span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {userType === "product" && (
              <>
                <div className="formInput">
                  <label>Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="dropSelect"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Manufacturer */}
                <div className="formInput">
                  <label>Manufacturer</label>
                  <select
                    value={selectedManufacturer}
                    onChange={(e) => setSelectedManufacturer(e.target.value)}
                    className="dropSelect"
                  >
                    {manufacturers.map((manufacturer) => (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Colors */}
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
                    <input
                      className="colorInput"
                      type="color"
                      onChange={handleAddColor}
                      title="Pick a color"
                    />
                    <button type="button" onClick={handleManualColorInput}>
                      Add Color
                    </button>
                  </div>
                  <div className="selectedColors">
                    {colors.map((color, index) => (
                      <div key={index} className="colorItem">
                        <span
                          className="colorBox"
                          style={{ backgroundColor: color }}
                        ></span>
                        <span>{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
              </>
            )}

            {/* Status Field */}
            {userType !== "category" && (
              <div className="formInput">
                <label>Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="dropSelect"
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
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

export default New;
