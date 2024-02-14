import { useState } from 'react'
import banner from './assets/banner.png'
import './App.css'
import { Navegacao } from './navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, especiais, bebidas } from './cardapio';


export function App(){
  const paginaMenu = [pratosPrincipais, especiais, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return <div>
            <img src={banner} alt="" className='capa'/>
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
            <div className='menu'>
              {paginaMenu[paginaSelecionada].map(item => 
                <ItemCardapio nome={item.nome} 
                              descricao={item.descricao} 
                              preco={item.preco}
                              imagem={item.imagem} />)}           
            </div>                
          </div>
}