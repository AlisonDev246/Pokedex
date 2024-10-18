/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos 
1- listagem
2- cartao pokémon

precisamos criar duas variaveis JS para trabalhar com os elementos da tela

vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokémons


- remover a classe aberto so do cartão que esta aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
-remover a classe ativa que marca o pokémon selecionado
*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com evento de clique feito pelo usuario na listagem de pokémons
    pokemon.addEventListener('click',  () => {
        //remover a classe aberto so do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado 
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       //remover a classe ativa que marca o pokémon selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')
     
       //adicionar a classe ativo no item da lista selecionado
       
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')
      
        
    })
})


