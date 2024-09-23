import Datatable from "../../../components/datatable/Datatable"
import {shipmentsColumns, shipmentsRows} from "../../../datatablesource.js"
function Shipments() {
    
  return (
    <>
        <Datatable nameTable="All Shipment List"columns={shipmentsColumns} dataSource={shipmentsRows} dialog={false} type="admin" url="shipments" />
    </>
    
  );
}

export default Shipments;

  