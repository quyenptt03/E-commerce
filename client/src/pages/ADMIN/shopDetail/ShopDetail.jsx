import "./shopDetail.scss";
import Chart from "../../../components/chart/Chart";
import List from "../../../components/table/Table";
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import {rowsProduct} from "./data"
import { shopInputs } from '../../../formSource.js';

import {shopRows} from "../../../datatablesource"
import Update from "../../../components/update/Update";

const ShopDetail = () => {
  const [activeTab, setActiveTab] = useState('details');
  const location = useLocation();
  const { id } = location.state || {};
  const shopInfo = shopRows.find((shop) => shop.id === id);
  if (!shopInfo) {
    return <div className="shopDetailContainer">Shop not found</div>;
  }
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='tabs'>
        <button className={`tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => handleTabChange('details')}>
          User Details
        </button>
        <button className={`tab ${activeTab === 'update' ? 'active' : ''}`} onClick={() => handleTabChange('update')}>
          User Product
        </button>
      </div>
      <div className="shopDetailContainer">
      {activeTab === 'details' && (
        <>
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
                  </>
                   )}
                   {activeTab === 'update' && (
                    <Update inputs={shopInputs} title="Update User" userType="shop" id={shopInfo.id} />
                  )}
                </div>
        

    </>
   
  );
};

export default ShopDetail;
