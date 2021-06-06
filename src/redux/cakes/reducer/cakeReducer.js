import { BUY_CAKE } from "../action/actions";

const initCakes = {
	noOfCakes: 10,
};

const cakeReducer = (state = initCakes, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				noOfCakes: state.noOfCakes - action.payload,
			};
		default:
			return state;
	}
};

export default cakeReducer;
