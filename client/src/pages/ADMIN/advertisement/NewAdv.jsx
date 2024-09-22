import { useState } from "react";
import "./advertisement.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import CustomizedButtons from "../../../components/button/button";

function NewAdv() {
  const [adName, setAdName] = useState("");
  const [adImageUrl, setAdImageUrl] = useState("");
  const [adLinkUrl, setAdLinkUrl] = useState("");
  const [adContent, setAdContent] = useState("");
  const [adType, setAdType] = useState("banner");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [status, setStatus] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adData = {
      name: adName,
      imageUrl: [adImageUrl],
      linkUrl: adLinkUrl,
      content: adContent,
      type: adType,
      discountPercentage: parseInt(discountPercentage),
      status: status,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    };

    try {
      const res = await apiRequest.post("/ads", adData);
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("Failed to create ad. Please try again.");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h3>Thêm Quảng cáo/Banner/Khuyến mãi</h3>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="adName">Ad Name</label>
              <input
                id="adName"
                name="adName"
                type="text"
                value={adName}
                onChange={(e) => setAdName(e.target.value)}
              />
            </div>
            <div  className="item">
            <label htmlFor="adImageUrl">Ad Image URL</label>
              <input
                id="adImageUrl"
                name="adImageUrl"
                type="text"
                value={adImageUrl}
                onChange={(e) => setAdImageUrl(e.target.value)}
              />
            </div>
             
            <div className="item">
              <label htmlFor="adLinkUrl">Ad Link URL</label>
              <input
                id="adLinkUrl"
                name="adLinkUrl"
                type="text"
                value={adLinkUrl}
                onChange={(e) => setAdLinkUrl(e.target.value)}
              />
            </div>
            <div className="item">
            <label htmlFor="adContent">Ad Content</label>
            <input
                id="adContent"
                name="adImageUrl"
                type="text"
                value={adImageUrl}
                // onChange={setAdContent} value={adContent}
              />
             
            </div>
            
            <div className="item">
              <label htmlFor="adType">Ad Type</label>
              <select
                id="adType"
                name="adType"
                value={adType}
                onChange={(e) => setAdType(e.target.value)}
              >
                <option value="banner">Banner</option>
                <option value="popup">Popup</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="discountPercentage">Discount Percentage</label>
              <input
                id="discountPercentage"
                name="discountPercentage"
                type="number"
                min="0"
                max="100"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
              />
            </div>
            <div className="item">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value === 'true')}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="item">
              <label htmlFor="endDate">End Date</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="item description">
            ---Image---
             
            </div>
            <div className="item">
            <label htmlFor="endDate"></label>
           <CustomizedButtons className="buttonAdv"color="success" label="Thêm"/>
              
            </div>
            {/* <button className="sendButton">Add</button> */}
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAdv;
