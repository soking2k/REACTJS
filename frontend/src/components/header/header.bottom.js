import React, { Component } from 'react'
import iconbanner from './banner.png';
import { Link } from 'react-router-dom'
import _ from 'lodash'
class HeaderBottom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleSort: 'Sort',
            listActionSort: []
        }
    }
   
    render() {
        return (
            <section id="aa-catg-head-banner">
            <img src={iconbanner} />
         <div class="aa-catg-head-banner-area">
           <div class="container">
            <div class="aa-catg-head-banner-content">
              <h2>Phong Thủy Diệp Tâm</h2>
            </div>
           </div>
         </div>
        </section>
        )
    }
}
export default HeaderBottom