import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import { useProducts } from "../../contexts/ProductsContext";
import { NewProduct } from "../../types";

const RegisterProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [isAvailableForSale, setIsAvailableForSale] = useState<string>("1");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || !description || !value) {
      toast.error("Todos os campos são obrigatórios");
      return;
    }

    setIsLoading(true);

    const product: NewProduct = {
      name,
      description,
      value,
      isAvailableForSale: isAvailableForSale === "1",
    };

    addProduct(product);

    toast.success("Produto cadastro com sucesso!");
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Produtos</h1>
        <label>Nome:</label>
        <input
          type="text"
          className="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Descrição:</label>
        <textarea
          name="description"
          className="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        <label>Valor:</label>
        <IMaskInput
          mask="R$ num"
          blocks={{
            num: {
              mask: Number,
              thousandsSeparator: ".",
              radix: ",",
              scale: 2,
            },
          }}
          unmask={true}
          value={value}
          onAccept={(value: any) => setValue(value)}
          className="value"
        />

        <label>Disponível para venda?</label>
        <select
          value={isAvailableForSale}
          onChange={(event) => setIsAvailableForSale(event.target.value)}
        >
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>

        <button type="submit" className="cadaster" disabled={isLoading}>
          {isLoading ? "Salvando" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default RegisterProduct;
