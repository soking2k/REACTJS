import React, { Component } from 'react'

const HeaderTop = () => (
	<section id="menu">
    <div class="container">
      <div class="menu-area">
        <div class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>          
          </div>
       
          <div class="navbar-collapse collapse">

            <ul class="nav navbar-nav">
            
              <li><a href="${pageContext.request.contextPath}/">TRANG CHỦ</a></li>
              <li><a href="${pageContext.request.contextPath}/view/client/introduce">GIỚI THIỆU</a></li>
            <li><a href="${pageContext.request.contextPath}/view/client/product">SẢN PHẨM</a></li>
              <li><a href="${pageContext.request.contextPath}/view/client/news-list">TIN TỨC</a></li>
              <li><a href="${pageContext.request.contextPath}/view/client/security">CHÍNH SÁCH</a></li>
              <li><a href="http://messenger.com/t/lieuthienthach/">LIÊN HỆ</a></li>
             
            </ul>
          
        </div>
      </div>       
    </div>
	</div>
  </section>

)
  
export default HeaderTop