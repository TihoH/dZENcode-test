import Close from "../components/UI/Close/Close";
import { Order, Product } from "../types/product";
import clases from "./deleteProductPopup.module.css";

interface DeleteOpderPopupProps {
  confirmDelete: () => void;
  setIsActivePopup: (value: boolean) => void;
  currentDeleteItem: Order | null;
}

export default function DeleteOpderPopup({
  confirmDelete,
  setIsActivePopup,
  currentDeleteItem,
}: DeleteOpderPopupProps) {
  return (
    <div className={clases.deleteItem__container}>
      <div className={clases.deleteItem}>
        <p>Вы уверенны , что хотите удалить этот продукт?</p>

        <p>{currentDeleteItem?.title}</p>
      </div>
      <div className={clases.buttonsContainer}>
        <button onClick={() => setIsActivePopup(false)}>отменить</button>
        <button onClick={() => confirmDelete()}>удалить</button>
      </div>

      <Close onClick={() => setIsActivePopup(false)} />
    </div>
  );
}
