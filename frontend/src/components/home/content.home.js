import React, { Component } from "react";
import ProductItem from "./product.item";
import { Link } from "react-router-dom";
class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: [],
      check_1: true,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false
    };
  }
  resetCheck = () => {
    this.setState({
      check_1: false,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false
    });
  };
  
  render() {
    return (
      <section id="aa-product">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="row">
                      <div class="aa-product-area">
                          <div class="aa-product-inner">
                              <ul class="nav nav-tabs aa-products-tab">
                             

                                  
                                  {this.props.loaisp.map((element, index) => {
                                return (                                 
                                    <li><a  key={index}  href={element._id}>{element.name}</a></li>
                                );
                              })}
                              </ul>
                              <div className="panel-group category-products" id="accordian">
                 
                </div>
                        <div class="tab-content">
                                  <div class="tab-pane fade in active" id="sanphammoi">
                                      <ul class="aa-product-catg">
                                      {this.props.sanpham.map((element, index) => {
                                      return (                                 

                                          <li>
                                          <figure>
                                           
                                              <a  key={index} class="aa-product-img" href={"/details/"+element._id}><img src={element.image_link} /> </a>
                                              <a class="aa-add-card-btn" href="~/Home/Details?id=@item.id"><span class="fa fa-shopping-cart"></span>Thêm vào giỏ hàng</a>
                                              <figcaption>
                                                  <h4 class="aa-product-title"><a href="~/Home/Details?id=@item.id">{element.name}</a></h4>
                                              
                                                      <span class="aa-product-price">{element.price} VND</span><br />
                                              </figcaption>
                                          </figure>

                                         </li>
                                      );
                                    })}
                                             
                                      </ul>

                                  </div>
                              </div>
                          </div>


                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

    );
  }
}
export default ContentHome;
