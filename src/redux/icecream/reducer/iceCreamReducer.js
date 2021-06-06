import { BUY_ICECREAM } from "../action/actions";

const initIceCream = {
	noOfIcecream: 20,
};

const iceCreamReducer = (state = initIceCream, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				noOfIcecream: state.noOfIcecream - 1,
			};
		default:
			return state;
	}
};

export default iceCreamReducer;
