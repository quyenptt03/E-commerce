import "./new.scss";
import CustomizedButtons from "../button/button";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title, userType }) => {
  const [file, setFile] = useState("");
  const [member, setMember] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState(["mỹ phẩm", "phụ kiện", "quần áo", "váy", "đồng hồ"]); // Loại hình sản phẩm (danh sách)
  const [customType, setCustomType] = useState(""); // Lựa chọn tự ghi
  const [selectedType, setSelectedType] = useState([]); // Loại hình sản phẩm được chọn
  const [shipment, setShipment] = useState([]); // Phương thức vận chuyển

  const handleTypeSelect = (e) => {
    const { value } = e.target;
    if (!selectedType.includes(value)) {
      setSelectedType([...selectedType, value]);
    }
  };

  // Xử lý khi thêm loại hình sản phẩm mới
  const handleAddCustomType = () => {
    if (customType && !type.includes(customType)) {
      setType([...type, customType]);
      setSelectedType([...selectedType, customType]);
      setCustomType("");
    }
  };

  // Xử lý khi chọn phương thức vận chuyển
  const handleShipmentSelect = (e) => {
    const { value } = e.target;
    if (!shipment.includes(value)) {
      setShipment([...shipment, value]);
    }
  };

  return (
    <div className="newContainer">
      <div className="top">
        <h3>{title}</h3>
      </div>
      <div className="bottom ">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="Uploaded"
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}

            {userType === "user" && (
              <>
                <div className="formInput">
                  <label className="dropLable">Thành viên</label>
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
                      {type.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    {selectedType.map((item, index) => (
                      <span key={index} className="selectedItem">{item}</span>
                    ))}
                  </div>
                  <div className="formInputAddType">
                    <input
                     className="formInput"
                      type="text"
                      placeholder="Nhập loại hình khác"
                      value={customType}
                      onChange={(e) => setCustomType(e.target.value)}
                    />
                    <button type="button" onClick={handleAddCustomType}>
                      +
                    </button>
                  </div>
                </div>

                <div className="formInput">
                  <label className="dropLable">Phương thức vận chuyển</label>
                  <select   className="dropSelect" onChange={handleShipmentSelect}>
                    <option value="Shoppe Express">Shoppe Express</option>
                    <option value="Grab">Grab</option>
                    <option value="Giao Hàng Nhanh">Giao Hàng Nhanh</option>
                  </select>
                  {/* Hiển thị phương thức vận chuyển đã chọn */}
                  <div>
                    {shipment.map((item, index) => (
                      <span key={index} className="selectedItem">{item}</span>
                    ))}
                  </div>
                </div>
              </>
            )}
            {userType==="category"?(""):(
              <><div className="formInput">
              <label className="dropLable">Trạng thái</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="dropSelect">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
              </>
            )}
            
            <CustomizedButtons color="success" label="Save" />
            <CustomizedButtons color="grey" label="Cancel" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
