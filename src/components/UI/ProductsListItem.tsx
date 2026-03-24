import { Trash } from "lucide-react";
import { deleteType, Product } from "../../types/product";
import clases from "./productsListItem.module.css";
import { Link } from "react-router-dom";

interface listProductsItemProps {
  listProductsItem: Product;
  deleteProduct: (item: Product) => void;
  setDeleteType: React.Dispatch<React.SetStateAction<deleteType>>;
  isPageProducts?: boolean;
}

export default function ProductsListItem({
  listProductsItem,
  deleteProduct,
  setDeleteType,
  isPageProducts,
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
            <Link to={"/"}>{listProductsItem.title}</Link>
            <span>SN - {listProductsItem.serialNumber}</span>
          </div>
        </div>

        <div
          className={clases.ordersProductsListItem__descStatus}
          style={{ color: getStatus(listProductsItem.status) }}
        >
          {listProductsItem.status.charAt(0).toUpperCase() +
            listProductsItem.status.slice(1)}
        </div>

        {isPageProducts && (
          <div className={clases.ordersProductsListItem__descGaranty}>
              <span>C : {listProductsItem.guarantee.start}</span>
              <span>По : {listProductsItem.guarantee.end}</span>
          </div>
        )}
        {isPageProducts && <div>{listProductsItem.isNew ? "Новый" : "Бу"}</div>}

        <button
          className="deleteProduct"
          title="удалить продукт?"
          onClick={() => {
            deleteProduct(listProductsItem);
            setDeleteType("product");
          }}
        >
          <Trash color="#9b9c9c" />
        </button>
      </div>
    </div>
  );
}
