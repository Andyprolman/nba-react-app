import React from 'react'
import { connect } from 'react-redux';
import AddUser from './AddUser'

function mapStateToProps(store) {
    return {
        name: store.addUser.name
    }
}

export default connect(mapStateToProps)(AddUser);