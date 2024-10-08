
import Datatable from "../../../components/datatable/Datatable"
import {userColumns,userRows} from "../../../datatablesource"

const User = () => {
  return (
    <div >
        <Datatable nameTable="List user" columns={userColumns} dataSource={userRows} dialog={false} url="users" />
      </div>
  )
}

export default User