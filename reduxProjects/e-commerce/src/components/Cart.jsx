import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, delAll } from "../redux/action";

const Cart = () => {
  var total = 0;
  const itemList = (item) => {
    const productTotal = item.price * item.qty;
    total = total + productTotal;
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${productTotal}</span>
      </li>
    );
  };
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const handleDelAll = (item) => {
    dispatch(delAll(item));
    console.log("tık");
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    const productTotal = product.price * product.qty;
    total = total + productTotal;
    return (
      <div key={product.id} className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row justify-content-between">
            <div className="col-md-7 d-flex ">
              <div className="bg-white p-3  border border-secondary">
                <img
                  src={product.image}
                  alt={product.title}
                  height="100px"
                  width="90px"
                />
              </div>
              <h5 className="mx-3">
                {product.title}
                <h3 className="my-3">${product.price}</h3>
              </h5>
            </div>

            <div className="col-md-4">
              <button
                className="btn btn-outline-dark "
                onClick={() => handleDel(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <span className="mx-2 fw-bold">{product.qty}</span>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAdd(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
              <span className="ms-5 fw-bold lead">
                ${product.qty * product.price}
              </span>
              <button
                className="ms-5 fw-bold border-light  btn"
                onClick={() => handleDelAll(product)}
              >
                <i class="fa fa-trash " aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
     
    );
  };
  const buttons = () => {
    return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-md-8">
        
            </div>
 <div className="col-md-3">
 <h3 className="fw-bold text-right">      total: ${total}
</h3>
 </div>
        </div>
    
      </div>
   
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
