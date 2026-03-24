import { useEffect, useState } from "react";
import { useGetProudcts } from "../../hooks/useGetProdcuts";
import OrdersList from "./OrdersList";
import OrdersTitle from "./OrdersTitle";
import clases from "./orders.module.css";
import { Order, Product, deleteType } from "../../types/product";
import Popup from "../../components/UI/Popup";
import DeleteProductPopup from "../../popups/DeleteProductPopup";
import DeleteOpderPopup from "../../popups/DeleteOpderPopup";

export default function Home() {
  const { dataOrders, dataProducts, isLoading } = useGetProudcts();
  const [activeIdOrder, setActiveIdOrder] = useState<number | null>(null);
  const [ordersState , setOrdersState ] = useState<Order[]>([])
  const [productsState, setProductsState] = useState<Product[]>([]);
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [currentDeleteProduct, setCurrentDeleteProduct] =
    useState<Product | null>(null);
  const [currentDeleteOrder, setCurrentDeleteOrder] = useState<Order | null>(
    null,
  );
  const [deleteType, setDeleteType] = useState<deleteType | null>(null);

  const ordersProducts = productsState.filter(
    (item) => item.order === activeIdOrder,
  );
  const findTitleOrders = ordersState.find(
    (item) => item.id === activeIdOrder,
  )?.title;

  const deleteProduct = (item: Product) => {
    setIsActivePopup(true);
    setCurrentDeleteProduct(item);
  };

  const deleteOrder = (item: Order) => {
    setIsActivePopup(true);
    setCurrentDeleteOrder(item);
    console.log(currentDeleteOrder)

  };

  const confirmDeleteProduct = () => {
    if (!currentDeleteProduct) return;

    setProductsState((prev) =>
      prev.filter((item) => item.id != currentDeleteProduct.id),
    );
    setIsActivePopup(false);
    setCurrentDeleteProduct(null)
    setDeleteType(null)
  };

  const confirmDeleteOrder = () => {
    if (!currentDeleteOrder) return;
    setOrdersState((prev) =>
      prev.filter((item) => item.id != currentDeleteOrder.id),
    );
    setIsActivePopup(false);
    setCurrentDeleteOrder(null)
        setDeleteType(null)

  };

  useEffect(() => {
    setProductsState(dataProducts);
    setOrdersState(dataOrders)
  }, [dataProducts , dataOrders]);

  return (
    <div className={clases.orders}>
      <OrdersTitle quantityProducts={ordersState.length} />
      <OrdersList
        productsState={productsState}
        dataListOrders={ordersState}
        dataListProducts={ordersProducts}
        setActiveIdOrder={setActiveIdOrder}
        activeIdOrder={activeIdOrder}
        findTitleOrders={findTitleOrders}
        deleteProduct={deleteProduct}
        deleteOrder={deleteOrder}
        setDeleteType={setDeleteType}
      />

      {/*START Попап UI */}
      <Popup isActive={isActivePopup}>
        {deleteType && deleteType === "product" && (
          <DeleteProductPopup
            confirmDelete={confirmDeleteProduct}
            setIsActivePopup={setIsActivePopup}
            currentDeleteProduct={currentDeleteProduct}
          />
        )}
        { deleteType && deleteType === "order" && (
          <DeleteOpderPopup
            confirmDelete={confirmDeleteOrder}
            setIsActivePopup={setIsActivePopup}
            currentDeleteItem={currentDeleteOrder}
          />
        )}
      </Popup>
      {/*END Попап UI */}
    </div>
  );
}
