import "../shop/shop.scss"
import Datatable from "../../../components/datatable/Datatable"
import {shopColumns,shopRows} from "../../../datatablesource"

const CheckShop = () => {
  return (
    <div>
        <Datatable  nameTable="Duyệt shop" columns={shopColumns} dataSource={shopRows} dialog={true} url="shops" />
      </div>
  )
}

export default CheckShop