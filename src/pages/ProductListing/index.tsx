/*
𝐋𝐢𝐬𝐭𝐚𝐠𝐞𝐦:
- Quando cadastrar um novo produto é para abrir a listagem automaticamente ✅
- Deve existir um botão para cadastrar um novo produto a partir da listagem ✅ 
- Opção 'Não' para disponibilidade do produto ✅ 
- Botão para apagar produto cadastrado ✅
- Colunas da listagem: nome, valor ✅ 
- Ordenação por valor do menor para o maior
*/

import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import { IoClose } from "react-icons/io5";
import "./styles.css";
import { toast } from "react-toastify";

export type Product = {
  id: number;
  name: string;
  description: string;
  value: string;
  isAvailableForSale: boolean;
};

const ProductListing = () => {
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();

  function navigateToRegisterProduct() {
    navigate("/RegisterProduct");
  }

  async function handleDeleteProduct(productId: string) {
    if (window.confirm("Confirmar exclusão do produto?")) {
      try {
        deleteProduct(productId);
        toast.success("Produto excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
        toast.error("Erro ao excluir o produto. Tente novamente.");
      }
    }
  }

  return (
    <div>
      <form>
        <h2>Lista de produtos cadastrados</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Disponibilidade</th>
                <th>Excluír</th>
              </tr>
            </thead>

            <tbody>
              {products
                .slice()
                .sort(
                  (a, b) =>
                    parseFloat(a.value.replace(",", ".")) -
                    parseFloat(b.value.replace(",", "."))
                )
                .map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>R${product.value}</td>
                    <td>{product.isAvailableForSale ? "Sim" : "Não"}</td>
                    <td>
                      <button
                        className="toSwitchOff"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <IoClose />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <button onClick={navigateToRegisterProduct} className="addNewProduct">
          Adicionar produto
        </button>
      </form>
    </div>
  );
};

export default ProductListing;
