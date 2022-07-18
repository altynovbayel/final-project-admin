import React from 'react';
import {useParams} from "react-router-dom";
import {acceptOrder, getSingleOrder} from "../../../../configs";
import MoreOrderCard from "../../../../components/MoreOrderCard";
import Loader from "../../../../components/Loader/Loader";

function MoreOrder() {
  const {product, user} = useParams()
  const [data, setData] = React.useState(null)
  
  function getMore(){
    getSingleOrder(user, product).then(r => setData(r.data))
  }
  
  React.useEffect(() => {
    getMore()
  }, [])
  
  function accept(){
    const newData = {
      ...data,
      orderState: true,
    }
    acceptOrder(user, product, newData).then(r => r && getMore())
  }
  
  if(!data) return <Loader/>
  return (
    <React.Fragment>
      <MoreOrderCard productsData={data?.products} totalPrice={data?.fullPrice} accept={accept} state={data.orderState}/>
    </React.Fragment>
  );
}

export default MoreOrder;