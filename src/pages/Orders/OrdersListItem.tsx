import { deleteType, Order } from "../../types/product";
import clases from "./orders.module.css";
import { ChevronRight, Logs, Trash } from "lucide-react";

interface OrdersListItemProps {
  listOrdersItem: Order;
  onClick: (id: number) => void;
  isActiveArrow: boolean;
  getTotalUSD: (id: number) => number;
  getTotalUAH: (id: number) => number;
  lentghProducts: (orderId: number) => number;
  isActiveTitle: number | null;
  deleteOrder: (item: Order) => void;
  setDeleteType: React.Dispatch<React.SetStateAction<deleteType>>;
}

export default function OrdersListItem({
  listOrdersItem,
  onClick,
  isActiveArrow,
  getTotalUSD,
  getTotalUAH,
  lentghProducts,
  isActiveTitle,
  deleteOrder,
  setDeleteType
}: OrdersListItemProps) {
  return (
    <div
      className={clases.orderItem}
      onClick={() => onClick(listOrdersItem.id)}
    >
      <div className={clases.orderItem__desc}>
        {!isActiveTitle && (
          <div>
            <h2>{listOrdersItem.title}</h2>
          </div>
        )}

        <div className={clases.orderItem__wrapProduct}>
          <span className={clases.orderItem__wrapProduct__icon}>
            {" "}
            <Logs />
          </span>
          <div className={clases.orderItem__descProduct}>
            <span>{lentghProducts(listOrdersItem.id)}</span>
            <span>Продукта</span>
          </div>
        </div>
        <div>{listOrdersItem.date}</div>
        <div className={clases.orderPrice}>
          <span>{getTotalUSD(listOrdersItem.id)} $</span>
          <span>{getTotalUAH(listOrdersItem.id)} UAH</span>
        </div>
        {!isActiveTitle && (
          <button
            className="deleteProduct"
            title="удалить ордер?"
            onClick={(e) => {
              e.stopPropagation(); 
              setDeleteType('order')
              deleteOrder(listOrdersItem);
            }}
          >
            <Trash color="#9b9c9c" />
          </button>
        )}
      </div>

      {isActiveArrow && (
        <span className={clases.orderItem__arrow}>
          {" "}
          <ChevronRight />{" "}
        </span>
      )}
    </div>
  );
}
