import React from 'react';
import './Cart.css'
import CartSummary from '../CartSummary/CartSummary'
import TotalSummary from '../TotalSummary/TotalSummary'

function Cart (props) {
  
  return (
    <section className="main__summary">
            <h2>Your cart</h2>
            <CartSummary selected={props.selected}/>
            <TotalSummary selected={props.selected}/>
            
          </section>
  )
}

export default Cart