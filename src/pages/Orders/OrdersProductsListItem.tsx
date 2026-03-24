import { Trash } from "lucide-react";
import { Product } from "../../types/product";
import clases from "./orders.module.css";

interface listProductsItemProps {
  listProductsItem: Product;
  deleteProduct: (item: Product) => void;
  setDeleteType: (value: string) => void
}

export default function OrdersProductsListItem({
  listProductsItem,
  deleteProduct,
  setDeleteType
}: listProductsItemProps) {
  function getStatus(status: string) {
    switch (status) {
      case "свободен":
        return "#CDDC39";
      case "ремонт":
        return "orange";
      case "активный":
        return "gray";
    }
  }
  return (
    <div className={clases.ordersProductsListItem}>
      <span className={clases.ordersProductsListItem__circle__green}></span>
      <div className={clases.ordersProductsListItem__desc}>
        <div>
          <img
            src={`/img/products/${listProductsItem.photo}`}
            alt="photo product"
          />
          <div className={clases.ordersProductsListItem__descTitle}>
            <span>{listProductsItem.title}</span>
            <span>SN - {listProductsItem.serialNumber}</span>
          </div>
        </div>
        <p style={{ color: getStatus(listProductsItem.status) }}>
          {listProductsItem.status.charAt(0).toUpperCase() +
            listProductsItem.status.slice(1)}
        </p>
        <button
          className="deleteProduct"
          title="удалить продукт?"
          onClick={() => {deleteProduct(listProductsItem); setDeleteType('product')} }
        >
          <Trash color="#9b9c9c" />
        </button>
      </div>
    </div>
  );
}
