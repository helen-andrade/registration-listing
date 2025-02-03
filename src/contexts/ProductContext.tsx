import { createContext, ReactNode, useState } from "react";

type ProductContextProps = {
  children: ReactNode;
};

type ProductContextType = {
  productName: string;
  setProductName: (value: string) => void;
  productDescription: string;
  setProductDescription: (value: string) => void;
  productValue: string;
  setProductValue: (value: string) => void;
  isAvailableForSale: boolean;
  setIsAvailableForSale: (value: boolean) => void;

  selectedProductName: string;
  setSelectedProductName: (newState: string) => void;
  selectedProductDescription: string;
  setSelectedProductDescription: (newState: string) => void;
  selectedProductValue: string;
  setSelectedProductValue: (newState: string) => void;
  selectedIsAvailableForSale: boolean;
  setSelectedIsAvailableForSale: (newState: boolean) => void;
};

const initialValue: ProductContextType = {
  productName: "",
  setProductName: () => {},
  productDescription: "",
  setProductDescription: () => {},
  productValue: "",
  setProductValue: () => {},
  isAvailableForSale: true,
  setIsAvailableForSale: () => {},

  selectedProductName: "",
  setSelectedProductName: () => {},
  selectedProductDescription: "",
  setSelectedProductDescription: () => {},
  selectedProductValue: "",
  setSelectedProductValue: () => {},
  selectedIsAvailableForSale: true,
  setSelectedIsAvailableForSale: () => {},
};

export const ProductContext = createContext<ProductContextType>(initialValue);

export const ProductContextProvider = ({ children }: ProductContextProps) => {
  const [productName, setProductName] = useState(initialValue.productName);
  const [productDescription, setProductDescription] = useState(
    initialValue.productDescription
  );
  const [productValue, setProductValue] = useState(initialValue.productValue);
  const [isAvailableForSale, setIsAvailableForSale] = useState(
    initialValue.isAvailableForSale
  );

  const [selectedProductName, setSelectedProductName] = useState(
    initialValue.selectedProductName
  );
  const [selectedProductDescription, setSelectedProductDescription] = useState(
    initialValue.selectedProductDescription
  );
  const [selectedProductValue, setSelectedProductValue] = useState(
    initialValue.selectedProductValue
  );
  const [selectedIsAvailableForSale, setSelectedIsAvailableForSale] = useState(
    initialValue.selectedIsAvailableForSale
  );

  return (
    <ProductContext.Provider
      value={{
        productName,
        setProductName,
        productDescription,
        setProductDescription,
        productValue,
        setProductValue,
        isAvailableForSale,
        setIsAvailableForSale,

        selectedProductName,
        setSelectedProductName,
        selectedProductDescription,
        setSelectedProductDescription,
        selectedProductValue,
        setSelectedProductValue,
        selectedIsAvailableForSale,
        setSelectedIsAvailableForSale,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
