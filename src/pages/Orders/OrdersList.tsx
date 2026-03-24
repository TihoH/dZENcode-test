import { deleteType, Order, Product } from "../../types/product";
import OrdersListItem from "./OrdersListItem";
import clases from "./orders.module.css";
import OrdersProducts from "./OrdersProducts";

interface OrdersListProps {
  productsState: Product[]
  dataListOrders: Order[];
  dataListProducts: Product[];
  setActiveIdOrder: (id: number) => void;
  activeIdOrder: number | null;
  findTitleOrders: string | undefined;
  deleteProduct: (item: Product) => void
  deleteOrder: (item: Order) => void
  setDeleteType: React.Dispatch<React.SetStateAction<deleteType>>;
}

export default function OrdersList({
  productsState ,
  dataListOrders,
  dataListProducts,
  setActiveIdOrder,
  activeIdOrder,
  findTitleOrders,
  deleteProduct ,
  deleteOrder ,
  setDeleteType ,
}: OrdersListProps) {

const getTotalUSD = (orderId: number) => {
  return productsState?.filter(p => p.order === orderId)
    .reduce((sum, product) => {
      const usd = product.price.find(p => p.symbol === "USD");
      return sum + (usd?.value || 0);
    }, 0);
};

const getTotalUAH = (orderId: number) => {
  return productsState?.filter(p => p.order === orderId)
    .reduce((sum, product) => {
      const usd = product.price.find(p => p.symbol === "UAH");
      return sum + (usd?.value || 0);
    }, 0);
};
const getLengthProducts = (orderId: number) => {
  return productsState.filter((p) => p.order === orderId).length;
};

  return (
    <div className={clases.orders__groupContainer}>
      <ul className={`${clases.ordersContainer} ${!dataListProducts.length  ? clases.ordersContainer__close : ""} ` }>
        {dataListOrders.map((order) => (
          <li key={order.id}>
            <OrdersListItem
              listOrdersItem={order}
              onClick={setActiveIdOrder}
              isActiveArrow={activeIdOrder === order.id}
              isActiveTitle={activeIdOrder}
              getTotalUSD={getTotalUSD}
              getTotalUAH={getTotalUAH}
              lentghProducts={getLengthProducts}
              deleteOrder={deleteOrder}
              setDeleteType={setDeleteType}
            />
          </li>
        ))}
      </ul>
      {/* START Отрисовка списка продуктов от ордера */}
      <div
        className={`${clases.ordersRight} ${dataListProducts.length  ? clases.ordersRight__active : ""}`}
      >
        <OrdersProducts
          dataListProducts={dataListProducts}
          findTitleOrders={findTitleOrders}
          onClick={ () => setActiveIdOrder(0) }
          deleteProduct={deleteProduct}
          setDeleteType={setDeleteType}
        />
      </div>
      {/*END START Отрисовка списка продуктов от ордера */}
    </div>
  );
}
