import React from "react";
import { connect } from 'react-redux'
import { buyIcecream } from '../../redux/icecream'

function IceCreamContainer(props) {
	return (
		<div>
			<h2>No of IceCreams: {props.noOfIcecream}</h2>
			<button onClick={props.buyIcecream}>BuyCakes</button>
		</div>
	);
}

const mapStateToProps = (state) => {
    return {
        noOfIcecream: state.icecream.noOfIcecream,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream : () => dispatch(buyIcecream()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)