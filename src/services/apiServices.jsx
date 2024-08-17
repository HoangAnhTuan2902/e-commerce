import axios from '~/utils/axiosCustomize';

const getProductList = () => {
	return axios.get('/products');
};

export { getProductList };
