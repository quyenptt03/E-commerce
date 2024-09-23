import "./shop.scss"
import Datatable from "../../../components/datatable/Datatable"
import {shopColumns,shopRows} from "../../../datatablesource"
const List = () => {
  return (
    <div>
        <Datatable nameTable="Danh sách Shop"columns={shopColumns} dataSource={shopRows} type="admin"  dialog={false} url="shops" />
    </div> 
  )
}
export default List