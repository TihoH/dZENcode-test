import { useEffect, useState } from "react";
import { Order, Product } from "../types/product";



type dataResponse = {
  orders: Order[];
  products: Product[];
};

export function useGetProudcts() {
  const [dataOrders, setDataOrders] = useState<Order[]>([]);
  const [dataProducts, setDataProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/data/db.json");
        const data:dataResponse = await response.json();

        if (!response.ok) return;

        setDataOrders(data.orders);
        setDataProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { dataOrders, dataProducts, isLoading };
}
