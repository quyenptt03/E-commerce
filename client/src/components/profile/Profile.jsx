import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import "./profile.css";
import CustomizedButtons from "../button/button";

const initFormValue = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  role: "",
  oldPassword: "",
  newPassword: "",
};

const Profile = () => {
  const { currentUser } = useState([]);
  const [user, setuser] = useState([]);
  const [passwordDialog, setpasswordDialog] = useState(false);
  const [formValue, setFormValue] = useState(initFormValue);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const changePassword = () => {
    setpasswordDialog(true);
  };

  return (
    <div>
        
        <div className="userTitleContainer">
          <h2 className="userTitle">Tài khoản</h2>

          <CustomizedButtons label="Đổi mật khẩu" 
             color="success" 
             onClick={changePassword}/>
        </div>

        <div className="userContainer">
          <div className="userContainer1">
            <div className="userShowTop">
              <div className="userShowTopTitle">
              <img src="https://cdn.pixabay.com/photo/2024/03/02/19/29/yellow-fruits-8609272_640.jpg" alt="" className="userShowImg" />

                <span className="userShowUsername">ADMIN</span>
                <span className="userShowUserTitle">{user.role}Quản lý</span>
              </div>
            </div>

            <div className="userShowBottom">
              <span className="userShowTitle">Thông tin tài khoản</span>
              <div className="userUpdateItem">
                <label>Tên</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
            </div>
            </div>

            <div className="userUpdate">
              <span className="userUpdateTitle">Chỉnh sửa</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Họ</label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder={user.first_name}
                      className="userUpdateInput"
                      value={formValue.first_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Tên</label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder={user.last_name}
                      className="userUpdateInput"
                      value={formValue.last_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder={user.email}
                      className="userUpdateInput"
                      value={formValue.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Số điện thoại</label>
                    <input
                      name="phone"
                      type="text"
                      placeholder={user.phone}
                      className="userUpdateInput"
                      value={formValue.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Địa chỉ</label>
                    <input
                      type="text"
                      name="address"
                      placeholder={user.address}
                      className="userUpdateInput"
                      value={formValue.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Vai trò</label>
                    <input
                      type="text"
                      name="role"
                      placeholder={user.role}
                      className="userUpdateInput"
                      value={formValue.role}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src="https://cdn.pixabay.com/photo/2017/04/12/16/23/morgentau-2224943_1280.jpg"
                      alt=""
                    />
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <CustomizedButtons label="Chỉnh sửa" 
                  className="userUpdateButton"
                  color="success" 
                  onClick={() => setpasswordDialog(false)} />
                </div>
              </form>
          </div>
        </div>
      
      <Dialog 
          open={passwordDialog} onClose={() => setpasswordDialog(false)}
         ><p className="ChangePassTitle">Đổi mật khẩu</p>
           <div className="Doimatkhau">
             <form className="userUpdateForm">
               <div className="userUpdateLeft">
                 <div className="userUpdateItem">
                   <div className="userUpdateItem">
                     <label>Mật khẩu cũ </label>
                     <input
                       type="password"
                       name="oldPassword"
                       value={formValue.oldPassword}
                       onChange={handleChange}
                       className="userUpdateInput"
                     />
                   </div>
                   <div className="userUpdateItem">
                     <label>Mật khẩu mới</label>
                     <input
                       type="password"
                       name="newPassword"
                       value={formValue.newPassword}
                       onChange={handleChange}
                       className="userUpdateInput"
                     />
                   </div>
                 </div>
               </div>
             </form>

             <CustomizedButtons label="Lưu" margin="6px"
             color="success" 
              onClick={() => setpasswordDialog(false)} />

             <CustomizedButtons label="Hủy" 
             color="error" 
              onClick={() => setpasswordDialog(false)} />
           </div>
         </Dialog> 
    </div>
  );
};

export default Profile;
