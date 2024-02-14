import { kids } from "./cardapio";

// PROPS - Objeto especial para usar e estruturar a interface.
export function ItemCardapio(props) {
    return <div className="container-item-cardapio">
        <div>
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="" />
    </div>
}