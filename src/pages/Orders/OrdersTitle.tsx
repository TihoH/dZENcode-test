import React from "react";
import clases from "./orders.module.css";

interface OrdersTitleProps {
    quantityProducts: number
}

export default function OrdersTitle({quantityProducts}:OrdersTitleProps) {
  return (
    <div className={clases.ordersTitle}>
      <span className={clases.ordersTitlePlus}>+</span>
      <h2>Приходы / {quantityProducts}</h2>
    </div>
  );
}
