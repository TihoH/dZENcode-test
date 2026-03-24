import clases from "./orders.module.css";
import { deleteType, Product } from "../../types/product";

import Close from "../../components/UI/Close/Close";
import ProductsListItem from "../../components/UI/ProductsListItem";

interface OrdersProductsProps {
  dataListProducts: Product[];
  findTitleOrders: string | undefined;
  onClick: () => void;
  deleteProduct: (item: Product) => void;
  setDeleteType: React.Dispatch<React.SetStateAction<deleteType>>;
}

export default function OrdersProducts({
  dataListProducts,
  findTitleOrders,
  onClick,
  deleteProduct,
  setDeleteType,
}: OrdersProductsProps) {
  return (
    <ul className={clases.productsContainer}>
      <h2>{findTitleOrders}</h2>
      {dataListProducts.map((product) => (
        <li key={product.id} className={clases.ordersProduct__listItem}>
          <ProductsListItem
            listProductsItem={product}
            deleteProduct={deleteProduct}
            setDeleteType={setDeleteType}
          />
        </li>
      ))}
      {/*START Close */}
      <Close onClick={onClick} />
      {/*END Close */}
    </ul>
  );
}
