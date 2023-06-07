import React from 'react';
import {getOrders} from "../../../../configs";
import {Typography} from "@mui/material";
import OrderCard from "../../../../components/OrderCard";
import Loader from "../../../../components/Loader/Loader";

function Orders() {
  const [order, setOrder] = React.useState(null)
  
  function getData(){
    getOrders().then(r =>  {
      const base = Object.entries(r.data).map(([userId, data]) => {
        return {
          userId,
          data: Object.entries(data).map(([id, item]) => {
            return {
              id,
              ...item,
            }
          })
        }
      })
      setOrder(base)
    })
  }
  
  
  React.useEffect(() => {
    getData()
  }, [])
  
  if(!order) return <Loader/>
  return (
    <>
      <Typography variant={'h3'} style={{textAlign:'center'}}>
        Заказы
      </Typography>
  
      {
        order.map(item => {
          return item.data.map((el) => {
            return (
              <OrderCard
                key={el.id}
                productId={el.id}
                userId={item.userId}
                photo={el.userData.photoURL}
                email={el.userData.email}
                date={el.date}
                name={el.userData.username}
                totalPrice={el.fullPrice}
                state={el.orderState}
                phone={el.userData?.phoneNumber}
              />
            )
          })
        })
      }
    </>
  );
}

export default Orders;