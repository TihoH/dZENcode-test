import Close from "../components/UI/Close/Close";
import { Product } from "../types/product";
import clases from "./deleteProductPopup.module.css";

interface DeleteProductPopupProps {
  confirmDelete: () => void;
  setIsActivePopup: (value: boolean) => void;
  currentDeleteProduct: Product | null;
}

export default function DeleteProductPopup({
  confirmDelete,
  setIsActivePopup,
  currentDeleteProduct,
}: DeleteProductPopupProps) {
  return (
    <div className={clases.deleteItem__container}>
      <div className={clases.deleteItem}>
        <p>Вы уверенны , что хотите удалить этот продукт?</p>

        <div className={clases.deleteItem__desc}>
          <div  className={clases.deleteItem__descImg}>
            <span></span>
            <img src={`/img/products/${currentDeleteProduct?.photo}`} alt="" />
          </div>
          <div>
            <p>{currentDeleteProduct?.title}</p>
            <p className={clases.deleteItem__seriesNum} >
              SN - {currentDeleteProduct?.serialNumber}
            </p>
          </div>
        </div>
      </div>
      <div className={clases.buttonsContainer}>
        <button onClick={() => setIsActivePopup(false)}>отменить</button>
        <button onClick={() => confirmDelete()}>удалить</button>
      </div>

      <Close onClick={() => setIsActivePopup(false)} />
    </div>
  );
}
