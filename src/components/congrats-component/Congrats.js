
//receive the success state as a prop
import React, { usteState } from 'react'
import PropTypes from 'prop-types';
const Congrats = (props) => {
    if(props.success){
        return(
            <div data-test="component-congrats">
            <p data-test="component-message">Congrats! You guessed the word!</p>
         </div>)
    }
    else{
        return <div data-test="component-congrats"/>
    }
}
Congrats.proptypes = {
    success: PropTypes.bool.isRequired,
}
export default Congrats;