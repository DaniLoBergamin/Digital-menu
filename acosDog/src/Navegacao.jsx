// PROPS - Objeto especial para usar e estruturar a interface.

export function Navegacao(props){
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
        <label htmlFor="pagina-0">BÁSICOS / COMBINADOS</label>
        <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
        <label htmlFor="pagina-1">DOGS ESPECIAIS</label>
        <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
        <label htmlFor="pagina-2">BEBIDAS</label>
    </div>
}