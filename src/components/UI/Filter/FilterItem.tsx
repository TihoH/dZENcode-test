import { FilterItemType } from "../../../pages/Products/ProductsFilter";
import clases from "./filter.module.css";

interface SortItemProps {
  sortTitle: string;
  filterData: FilterItemType[];
  setChange: (value: string | null) => void;
  filterType: string | null;
}

export default function SortItem({
  sortTitle,
  filterData,
  filterType,
  setChange,
}: SortItemProps) {
  return (
    <div className={clases.sortItem}>
      <span>{filterType ? filterType : sortTitle}</span>
      <ul className={clases.sortItem__dropFilter}>
        {filterData.map((item) => (
          <li key={item.id} onClick={() => setChange(item.filter)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}