import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from "../../redux/cakes";

function CakeContainerHooks() {
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
	return (
		<div>
			<h2>No of Cakes: {noOfCakes}</h2>
			<button onClick={() => dispatch(buyCake())}>BuyCakes</button>
		</div>
	);
}

export default CakeContainerHooks