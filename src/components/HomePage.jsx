import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const HomePage = props => {
    return (
        <>
            <p className="lead w-50 mx-auto mt-5 text-left">
                Hello! This is the homepage. Props: {props.data}
            </p>
            <Link to='/page1'>Page 1</Link>
        </>
    );
}

const mapStateToProps = state => {
    return {
        data: state.exampleReducer.data
    }
}

export default connect(mapStateToProps)(HomePage);