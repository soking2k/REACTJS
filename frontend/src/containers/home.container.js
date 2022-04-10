import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import * as homeActions from '../actions/home.action'
import Loading from '../components/loading/loading'


class HomeContainer extends React.Component {
    constructor(props) {
        super(props)

    }
    
    componentWillMount() {
        this.props.homeActions.getLoaisp()
        this.props.homeActions.getSanpham()

    }
    render() {

        const {loaisp} = this.props ,{sanpham} = this.props
        if(loaisp !== null ) {

            return (
                <div>
                    <Home
                        loaisp={this.props.loaisp}
                        sanpham={this.props.sanpham}

                    />
                </div>
            )
        }
            else {
                return (
                    <Loading/>
                )
            }
    
    }
}


  function mapStateToProps(state) {
    return {  
        loaisp: state.homeReducers.loaisp.data,
        sanpham: state.homeReducers.sanpham.data

       }
  }  

const mapDispatchToProps = dispatch =>{
    return ({
        homeActions: bindActionCreators(homeActions, dispatch),
        })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)