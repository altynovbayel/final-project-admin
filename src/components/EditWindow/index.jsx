import React from 'react';
import styles from './Edit.module.scss'
import {RiCloseLine} from "react-icons/ri";
import EditInputs from "../EditInputs";
import {editProduct} from "../../configs";

function EditWindow({setIsOpen, id, data, getBase}) {
  const [text, setText] = React.useState(null)
  const [price, setPrice] = React.useState(null)
  const [category, setCategory] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [image, setImage] = React.useState(null)
  
  const singleProduct = data.filter(item => item.id === id).map(item => {
    return  {
      ...item,
      productName: text ? text : item.productName,
      price: price ? price : item.price,
      category: category ? category : item.category,
      description: description ? description : item.description,
      images: image ? [image] : item.images,
    }
  })
  
  function patchNewObj (){
    setIsOpen(false)
    editProduct(id, singleProduct[0]).then(r => r && getBase())
  }
  
  return (
    <React.Fragment>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Изменение</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <EditInputs text={'изменить текст'} setState={setText}/>
            <EditInputs text={'изменить цену'} setState={setPrice}/>
            <EditInputs text={'изменить категорию'} setState={setCategory}/>
            <EditInputs text={'изменить описание'} setState={setDescription}/>
            <EditInputs text={'изменить картинку'} setState={setImage}/>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.editBtn}
                onClick={patchNewObj}
              >
                Изменить
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EditWindow;