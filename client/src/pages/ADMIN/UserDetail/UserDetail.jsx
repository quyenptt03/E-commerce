import "./userDetail.scss";
import Datatable from "../../../components/datatable/Datatable"
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import {rowsProductNew, productColumns} from "./data";
import {userRows} from "../../../datatablesource";
import { userInputs } from '../../../formSource.js';

import Update from "../../../components/update/Update";
const UserDetail = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('details');
  
  const { id } = location.state || {};
  const userInfo = userRows.find((user) => user.id === id);
  if (!userInfo) {
    return <div className="shopDetailContainer">User not found</div>;
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
      <div className="userDetailContainer">
      {activeTab === 'details' && (
        <>
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
                      <span className="itemKey">Member</span>
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
          </>
        )}
         {activeTab === 'update' && (
          <Update inputs={userInputs} title="Update User" userType="user" id={userInfo.id} />
        )}
      </div>
    </>
  );
};

export default UserDetail;
