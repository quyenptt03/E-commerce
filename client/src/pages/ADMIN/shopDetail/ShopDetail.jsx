import "./shopDetail.scss";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";
import React from 'react';
import { useLocation } from "react-router-dom";
import {rowsProduct} from "./data"

import {shopRows} from "../../../datatablesource"

const ShopDetail = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const shopInfo = shopRows.find((shop) => shop.id === id);
  if (!shopInfo) {
    return <div className="shopDetailContainer">Shop not found</div>;
  }

  return (
    <div className="shopDetailContainer">
      <div className="top">
        <div className="left">
          <h1 className="title">Shop Information</h1>
          <div className="item">
            <img src={shopInfo.img} alt="Shop" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">{shopInfo.name}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{shopInfo.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">{shopInfo.phoneNumber}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">{shopInfo.address}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">CCCD/CMND:</span>
                <span className="itemValue">{shopInfo.cccd}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Shipping:</span>
                <span className="itemValue">{shopInfo.shipment.join(", ")}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Product Types:</span>
                <span className="itemValue">{shopInfo.type.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="Shop revenue (last 6 months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">New imported products</h1>
        <List rowsProduct={rowsProduct} />
      </div>
    </div>
  );
};

export default ShopDetail;
