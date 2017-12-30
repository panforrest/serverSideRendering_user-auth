import React, { Component } from 'react'
import { connect } from 'react-redux'

class Admin extends Component {
    render(){
    	return(
    		<div className="container">
    		    <h2>This is the Admin Component!</h2>
    		</div>

        )
    }

}

const stateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(stateToProps)(Admin)