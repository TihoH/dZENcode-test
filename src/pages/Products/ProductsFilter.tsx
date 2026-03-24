import FilterItem from "../../components/UI/Filter/FilterItem";
import clases from "./products.module.css";

export type FilterItemType = {
  title: string;
  filter: string;
  id: number;
};

interface ProductsFilterProps {
  setFilterType: (value: string | null) => void;
  filterType: string | null;
}

export default function ProductsFilter({
  setFilterType,
  filterType,
}: ProductsFilterProps) {
  const filterTypeList: FilterItemType[] = [
    { title: "Мониторы", filter: "Monitors", id: 1 },
    { title: "Кресло", filter: "Furniture", id: 2 },
    { title: "Все", filter: "All", id: 3 },
  ];

  return (
    <div className={clases.products__sort}>
      <div className={clases.products__sortContainer}>
        <span>Тип</span>
        <FilterItem
          sortTitle="Все"
          filterData={filterTypeList}
          setChange={setFilterType}
          filterType={filterType}
        />
      </div>
    </div>
  );
}