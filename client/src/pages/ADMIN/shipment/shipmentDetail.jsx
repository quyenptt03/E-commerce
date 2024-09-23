import "../shopDetail/shopDetail.scss";
import React from 'react';
import { useLocation } from "react-router-dom";
import { shipmentInputs } from '../../../formSource.js';
import { shipmentsRows } from "../../../datatablesource";
import Update from "../../../components/update/Update";

const ShipmentDetail = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const shopInfo = shipmentsRows.find((shop) => shop.id === id);

  if (!shopInfo) {
    return <div className="shopDetailContainer">Shop not found</div>;
  }

  const shipment = shopInfo;

  return (
    <>
      <div className="shopDetailContainer">
            <div className="top">
              <div className="left">
                <h1 className="title">Shipment Information</h1>
                <div className="item">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Shipment"
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle">{shipment.name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">{shipment.phoneNumber}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Status:</span>
                      <span className="itemValue">{shipment.status}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Description:</span>
                      <span className="itemValue">{shipment.description}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right"></div>
            </div>

            <div className="bottom">
            <Update inputs={shipmentInputs} title="Update Shipment" userType="shipment" id={shopInfo.id} />
            </div>
      </div>
    </>
  );
};

export default ShipmentDetail;
