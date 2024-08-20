import axios from '~/utils/axiosCustomize';

const getProductList = () => {
	return axios.get('/products');
};

const getCategoriesList = () => {
	return axios.get('/categories');
};

export { getProductList, getCategoriesList };
