import "../shop/shop.scss"
import Datatable from "../../../components/datatable/Datatable"
import {userColumns,userRows} from "../../../datatablesource"

const CheckUser = () => {
  return (
    <div>
        <Datatable  nameTable="Duyệt người dùng" columns={userColumns} dataSource={userRows} dialog={true} url="users" />
      </div>
  )
}

export default CheckUser