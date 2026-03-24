import ProductsList from "./ProductsList";
import { useGetProudcts } from "../../hooks/useGetProdcuts";
import clases from "./products.module.css";
import { useEffect, useState } from "react";
import Popup from "../../components/UI/Popup";
import { Product, deleteType } from "../../types/product";
import DeleteProductPopup from "../../popups/DeleteProductPopup";
import ProductsTitle from "./ProductsTitle";
import ProductsFilter from "./ProductsFilter";

export default function Products() {
  const { dataProducts, isLoading } = useGetProudcts();
  const [stateProdcuts, setStateProducts] = useState<Product[]>([]);
  const [currentDeleteProduct, setCurrentDelateProduct] =
    useState<Product | null>(null);
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [deleteType, setDeleteType] = useState<deleteType>(null);
  const [filterType, setFilterType] = useState<string | null>(null);

  const deleteProduct = (item: Product) => {
    setIsActivePopup(true);
    setCurrentDelateProduct(item);
  };

  const confirmDeleteProduct = () => {
    if (!currentDeleteProduct) return;

    setStateProducts((prev) =>
      prev.filter((product) => product.id !== currentDeleteProduct.id)
    );

    setIsActivePopup(false);
    setCurrentDelateProduct(null);
    setDeleteType(null);
  };

  const filteredProducts =
    !filterType || filterType === "All"
      ? stateProdcuts
      : stateProdcuts.filter((product) => product.type === filterType);

  useEffect(() => {
    setStateProducts(dataProducts);
  }, [dataProducts]);

  return (
    <div className={clases.products}>
      <div className={clases.products__sortContainer}>
        <ProductsTitle quantityProduct={filteredProducts.length} />
        <ProductsFilter setFilterType={setFilterType} filterType={filterType} />
      </div>

      <ProductsList
        listProducts={filteredProducts}
        deleteProduct={deleteProduct}
        setDeleteType={setDeleteType}
      />

      <Popup isActive={isActivePopup}>
        {deleteType === "product" && (
          <DeleteProductPopup
            currentDeleteProduct={currentDeleteProduct}
            setIsActivePopup={setIsActivePopup}
            confirmDelete={confirmDeleteProduct}
          />
        )}
      </Popup>
    </div>
  );
}