import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  
  const increase = (index) => {
    const updatedOrders = orders.map((order, i) =>
      i === index ? { ...order, quantity: order.quantity + 1 } : order
    );
    setOrders(updatedOrders);
  };

  const decrease = (index) => {
    const updatedOrders = orders.map((order, i) =>
      i === index && order.quantity > 0
        ? { ...order, quantity: order.quantity - 1 }
        : order
    );
    setOrders(updatedOrders);
  };

  const computeTotal = () => {
    return orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0
    );
  };
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order , index)=> (
          <OrderCard key={index} product={order.product} price={order.price} quantity={order.quantity}
          onIncrease={()=> increase(index)}
          onDecrease={()=> decrease(index)} />
        ))}
        <OrderCard></OrderCard>
      </div>
      <CheckoutButton total={computeTotal()}></CheckoutButton>
    </>
  );
}
