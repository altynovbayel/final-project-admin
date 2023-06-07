import React from 'react';
import cls from "./AddProduct.module.scss";
import AddProductForm from "../../../../components/AddProductForm/AddProductForm";
import { useForm} from "react-hook-form";
import {createProduct, getAllProducts} from "../../../../configs";
import useForms from "../../hooks/useForms";
import Card from "../../../../components/Card";
import Loader from "../../../../components/Loader/Loader";

const AddProduct = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onChange'
	})
	const {categories} = useForms()

	const [chosenCategory, setChosenCategory] = React.useState('')
	const [chosenProductType, setChosenProductType] = React.useState('')

	const [data, setData] = React.useState(null)
  
  function getProduct(){
    getAllProducts().then( r => {
      const base = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      
      setData(base)
    })
  }
  
  React.useEffect(() => {
    getProduct()
  }, [])
  
	const handleChangeCategory = e => setChosenCategory(e.target.value)
	const handleChangeProductType = e => setChosenProductType(e.target.value)
	const findChosenCategory = React.useCallback((categories) => {
		return categories.find(c => c.value === chosenCategory)
	}, [chosenCategory])
	const submitHandler = data => {
		const category = findChosenCategory(categories)
		const newData = {
			...data,
			images: [data.images],
			category: category.value,
			categoryTitle: category.label,
			favorite: false,
			reviewCount: 0,
			reviewGrade: 5,
			reviewersArr: [],
			count: 0
		}
		createProduct(newData)
			.then(r => r && getProduct())
			.finally(() => reset())
	}
  
  
  
  if(!data) return <Loader/>
	if (!categories) return <Loader/>
	return (
    <React.Fragment>
      <div className={cls.container}>
        <AddProductForm
          register={register}
          errors={errors}
          isValid={isValid}
          handleSubmit={handleSubmit}
          submitHandler={submitHandler}
          handleChangeCategory={handleChangeCategory}
          handleChangeProductType={handleChangeProductType}
          categoriesOptions={categories}
        />
      </div>
      <Card productList={data} getBase={getProduct}/>
    </React.Fragment>
	);
};

export default AddProduct;
