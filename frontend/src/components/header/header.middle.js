import React, { Component } from "react";
//import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon } from '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Link } from "react-router-dom";
class HeaderMiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Account"
    };
  }

 
  handlelogin = () => {
    if (this.props.islogin) {
      return (
        <li
          className="btn-custom"
          onClick={() => {
            window.location.reload();
            this.props.logout();
            this.props.history.push("/");
          }}
        >
          <a>
            <i className="fa fa-lock" />Logout
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login_register">
            <i className="fa fa-lock" />Login
          </Link>
        </li>
      );
    }
  };
  handleProfile = () => {
    if (this.state.email === "Account") {
      return;
    } else {
        
      this.props.history.push("/profile/" + this.state.email);
    }
  };
  hoverlogin = () =>{
    if(this.props.islogin){
      return (
        <ul className='sub-menu'>

<li   onClick={() => this.handleProfile()}>
                <Link to={"/"}  >Hồ Sơ </Link>
              </li>

              <li><Link to='/purchase_history' >Đơn Hàng </Link></li>
          
          </ul>
      );
    }
  }
  render() {
    return (
      
      <div class="aa-header-top">
      <div class="aa-header-bottom">

<div class="container">
 <div class="row">
   <div class="col-md-12">
     <div class="aa-header-top-area">
       
       <div class="aa-header-top-left">
         <div class="cellphone hidden-xs">
         <p><i className="fa fa-home"></i> Phong Thủy Diệp Tâm</p>
         </div>
      <div class="aa-cartbox">
        
         <a class="aa-cart-link" href="${pageContext.request.contextPath}/view/client/cart">
         <i className="fa fa-cart-plus"> </i>
           <span class="aa-cart-title"> GIỎ HÀNG</span>
          
       
           

         </a>
         <div class="aa-cartbox-summary">
           <ul class="scroll-product">
                   
           </ul>
           <div class="total-detailproduct">
               <span class="aa-cartbox-total-title">
                 <b>Tổng:</b>
               </span>
               <span class="aa-cartbox-total-price">
                 VNĐ
               </span>
           </div>
           <a class="aa-cartbox-checkout aa-primary-btn" href="${pageContext.request.contextPath}/view/client/cart">Chi tiết</a>
           <a class="aa-cartbox-checkout aa-primary-btn" href="${pageContext.request.contextPath}/view/client/checkout">Thanh toán</a>
         </div>
       </div>
       
      
     </div>
     <div class="aa-header-top-right">
          <ul class="aa-head-top-nav-right">
            <div class="flex justify-end">
            <a class="btn btn-primary rounded-full f-14 py-2" href="${pageContext.request.contextPath}/view/client/login" >
            Đăng nhập      </a> <t></t>
            <a class="btn btn-primary rounded-full f-14 py-2" href="${pageContext.request.contextPath}/view/client/register" >
            Đăng Ký      </a>
            </div>	          
          </ul>
       </div>
   </div>
   
 </div>
</div>
</div>
</div>
</div>
    
    );
  }
}

export default HeaderMiddle;
