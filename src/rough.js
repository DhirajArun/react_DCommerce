import React, { Component } from "react";
import { getProducts } from "../services/fakeProductServices";
import Rating from "../common/rating";
import Price from "../common/price";

class SProducts extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const products = getProducts();
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="products">
        <ul>
          {products.map((product) => (
            <li className="product" key={product._id}>
              <div className="flex-container product">
                <div className="left-div">
                  <img
                    src={product.image}
                    alt="product"
                    className="product product-img"
                  />
                </div>
                <div className="right-div">
                  <h5>{product.name}</h5>
                  <Rating rating={product.rating} />
                  <Price mrp={29999} off={20} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}



export default SProducts;




















