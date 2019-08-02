import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ProductConsumer } from '../img/Context';

export default class Product extends Component {
  render() {
    const { id, title, img, inCart, price } = this.props.product;

    return (
      <ProductWraper className="col-9 max-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5 "
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product img" className="card-img-top" />
                  {/* <h1>{this.props.price}</h1> */}
                </Link>
                <button
                  className="card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCard(id);
                    value.openModal(id)
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in Cart{' '}
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card foooter */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1 ">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWraper>
    );
  }
}

// prop types

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

// Styled compnents
const ProductWraper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.2s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247 247 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.1s ease-in-out;
    border-radius: 0.3rem;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.4);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlue);
    border: none;
    color: var(--green);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s ease-in-out;
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }
  .card-btn:hover {
    color: var(--green);
    cursor: pointer;
  }
`;
