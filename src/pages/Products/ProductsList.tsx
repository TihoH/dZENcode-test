import React from "react";
import { deleteType, Product } from "../../types/product";
import clases from "./products.module.css";
import ProductsListItem from "../../components/UI/ProductsListItem";
interface listProductsProps {
  listProducts: Product[];
  deleteProduct: (item: Product) => void;
  setDeleteType: React.Dispatch<React.SetStateAction<deleteType>>;
}

export default function ProductsList({
  listProducts,
  setDeleteType,
  deleteProduct,

}: listProductsProps) {
  return (
    <ul className={clases.products__list}>
      {listProducts?.map((product) => (
        <li key={product.id} className={clases.products__item}>
          <ProductsListItem
            listProductsItem={product}
            deleteProduct={deleteProduct}
            setDeleteType={setDeleteType}
            isPageProducts={true}
          />
        </li>
      ))}
    </ul>
  );
}
