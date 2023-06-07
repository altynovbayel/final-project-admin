import React from "react";
import cls from './MoreOrderCard.module.scss'
import PropertyCredentials from "./Credentials/PropertyCredentials";
import ProductCredentials from "./Credentials/ProductCredentials";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function MoreOrderCard({productsData, totalPrice, accept, state}){
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <section className={cls.root}>
        <div className={cls.productsCredentials}>
          <div className={cls.header}>
            <div className={cls.logoText}>
              <h4>Заказ</h4>
              <p></p>
            </div>
          </div>
          <div className={cls.body}>
            {
              productsData.map((product, index) => (
                <ProductCredentials
                  key={product.id}
                  productName={product.productName}
                  count={product.count}
                  totalPriceOfProduct={product.price * product.count}
                  id={index}
                />
              ))
            }
          </div>
          <div className={cls.footer}>
            <div className={cls.top}>
              <PropertyCredentials
                key={totalPrice}
                property={'Все товары'}
                value={`${totalPrice} c`}
              />
              <PropertyCredentials property={'Способ оплаты'} value={'Наличные'}/>
            </div>
            <div className={cls.bottom}>
              <PropertyCredentials
                fontWeight={700}
                color={'#222'}
                property={'Итого'}
                value={`${totalPrice} c`}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={cls.btn}>
        <Button
          onClick={() => navigate('/orders')}
          style={{marginRight: '1rem'}}
        >
          Назад
        </Button>
        <Button
          variant="contained"
          onClick={accept}
          disabled={state}
        >
          {
            state ? "Принято" : "Принять"
          }
        </Button>
      </div>
    </React.Fragment>
  )
}

export default MoreOrderCard