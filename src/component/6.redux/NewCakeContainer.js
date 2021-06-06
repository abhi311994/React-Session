import React, { useState } from "react";
import { connect } from 'react-redux'
import { buyCake } from '../../redux/cakes'

function NewCakeContainer(props) {
    const [num, setNum] = useState(1)
	return (
		<div>
			<h2>No of Cakes: {props.noOfCakes}</h2>
            <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
			<button onClick={() => props.buyCake(num)}>BuyCakes</button>
		</div>
	);
}

const mapStateToProps = (state) => {
    return {
        noOfCakes: state.cake.noOfCakes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : (num) => dispatch(buyCake(num)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)