import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const PageOne = props => {
    return (
        <>
            <p className="lead w-50 mx-auto mt-5 text-left">
                Hello! This is the page 1. Props: {props.data}
            </p>
            <Link to='/'>Home Page</Link>
        </>
    );
}

const mapStateToProps = state => {
    return {
        data: state.exampleReducer.data
    }
}

export default connect(mapStateToProps)(PageOne);