import { createContext, ReactNode, useContext, useState } from "react";
import { NewProduct, Product } from "../types";
import { v4 as uuidv4 } from 'uuid';


type ProductContextProps = {
  children: ReactNode;
};

type ProductsContextType = {
  products: Product[];
  addProduct: (product: NewProduct) => void;
  deleteProduct: (id: string) => void;
};

const defaultValue: ProductsContextType = {
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
};

const mockProducts: Product[] = [
  {
    name: "Garrafa térmica",
    description: "Garrafa verde musgo, 420ml",
    value: "175,00",
    isAvailableForSale: true,
    id: '1',
  },
  {
    name: "Copo térmico",
    description: "Cor azul, 700ml",
    value: "90,00",
    isAvailableForSale: false,
    id: '2',
  },
  {
    name: "Mochila",
    description: "Mochila escolar cor preta tamanho G",
    value: "170,00",
    isAvailableForSale: true,
    id: '3',
  },
  {
    name: "Resma de papel A4",
    description: "Resma de papel A4 500 folhas",
    value: "25,00",
    isAvailableForSale: true,
    id: '4',
  },
  {
    name: "Borracha gigante",
    description: "Borracha branca tamanho G",
    value: "12,00",
    isAvailableForSale: false,
    id: '5',
  },
  {
    name: "Lápis de cor",
    description: "Caixa com 12 unidades sortidas",
    value: "15,00",
    isAvailableForSale: true,
    id: '6',
  },
];

const ProductsContext = createContext<ProductsContextType>(defaultValue);

export default function ProductsContextProvider({
  children,
}: ProductContextProps) {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const addProduct = (product: NewProduct) => setProducts([...products, {id: uuidv4(), ...product}]);

  const deleteProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("[error]");
  }

  return context;
}
