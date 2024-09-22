import "./userDetail.scss";
import Datatable from "../../../components/datatable/Datatable"
import React from 'react';
import { useLocation } from "react-router-dom";
import {rowsProductNew, productColumns} from "./data";
import {userRows} from "../../../datatablesource"
const UserDetail = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const userInfo = userRows.find((user) => user.id === id);
  if (!userInfo) {
    return <div className="shopDetailContainer">User not found</div>;
  }

  return (
    <div className="userDetailContainer">
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Chỉnh sửa</div> */}
            <h1 className="title">Infomation</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userInfo.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userInfo.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">PhoneNumber:</span>
                  <span className="itemValue">{userInfo.phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">{userInfo.age}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {userInfo.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">CMND/CCCD:</span>
                  <span className="itemValue">{userInfo.cccd}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Khách hàng</span>
                  <span className="itemValue">{userInfo.member}</span>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            Feedback and complaints
            
          </div>
        </div>
        <div className="bottom">
        <Datatable nameTable="Latest purchased products"columns={productColumns} dataSource={rowsProductNew} dialog={false} url="shops" />
        </div>

      </div>
  );
};

export default UserDetail;
