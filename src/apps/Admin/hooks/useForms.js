import React from 'react';
import {getAllCategories} from "../../../configs";

const useForms = () => {
	const [categories, setCategories] = React.useState(null)

	const get = React.useCallback(() => {
		getAllCategories().then(r => {
			const categoriesData = Object.entries(r.data).map(([id, item]) => {
				return {
					id,
					...item
				}
			})

			setCategories(categoriesData)
		})
	}, [])

	React.useEffect(() => {
		get()
	}, [get])


	return {
		categories,

		actions: {
			get
		}
	}
};

export default useForms;
