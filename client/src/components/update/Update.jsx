import "../new/new.scss";
import CustomizedButtons from "../button/button";
import { useState, useEffect } from "react";
import { categories, productsRows } from "../../datatablesource";

const manufacturers = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Samsung" },
];

const Update = ({ inputs, title, userType, id }) => {
  const [file, setFile] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [colors, setColors] = useState([]); // Colors for products
  const [customColor, setCustomColor] = useState("");
  const [images, setImages] = useState([]); // Product images
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    featured: false,
    freeShipping: false,
    inventory: 0,
  }); // General form data

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

  const handleSave = () => {
    let missingFields = [];
    if (userType === "product") {
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
      if (id) {
        console.log("Updating product with ID:", id, { ...formData, colors, images });
      } else {
        console.log("Creating new product:", { ...formData, colors, images });
      }
    }
  };

  return (
    <div className="newContainer">
      <div className="top">
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
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Uploaded" />
          )}
        </div>
        <div className="right">
          <form>
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
