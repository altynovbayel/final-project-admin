import React from 'react';
import c from './Card.module.scss'
import {RiEdit2Line} from "react-icons/ri";
import {BsFillTrashFill} from "react-icons/bs";
import EditWindow from "../EditWindow";
import {removeProduct} from "../../configs";

function Card({productList, getBase}) {
  const [isOpen, setIsOpen ] = React.useState(false)
  const [productId, setProductId] = React.useState('')
  function removeCard(id){
    removeProduct(id).then(r => getBase())
  }
  return (
    <React.Fragment>
      <div className={c.container}>
        {
          productList.map(({ images, productName, price, id }) => (
            
            <div key={id} className={c.card}>
              <div className={c.card_img}>
                <img src={images[0]} alt='img' />
              </div>
              <div className={c.card_body}>
                <div className={c.text}>
                  <div className={c.text_content}>
                    <h3>
                      {productName}
                    </h3>
                    <h4>{price} som</h4>
                  </div>
                </div>
              </div>
              <div className={c.edit_btn}>
                <button
                  className={c.edit_text}
                  onClick={() => {
                    setIsOpen(true)
                    setProductId(id)
                  }}
                >
                  <RiEdit2Line/>
                </button>
                {isOpen && <EditWindow setIsOpen={setIsOpen} id={productId} data={productList} getBase={getBase}/>}
                <button
                  className={c.remove}
                  onClick={() => removeCard(id)}
                >
                  <BsFillTrashFill/>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </React.Fragment>
  );
}

export default Card;