@@@@@
esse-blog-e-feito-com-javascript-puro | Esse blog é feito com JavaScript puro | ptbr | 2024-09-21T18:14:57.044Z | Criando um blog modularizado dinâmico e moderno com JavaScript puro, sem TS ou frameworks.

# Esse blog é feito com JavaScript puro

<br>
<i>"E sinceramente não é algo que valha a pena se você estiver pensando em fazer a mesma coisa - a menos que seja algo mais estático."</i>
<br>

Vamos começar pelo começo, a ideia de criar um blog "modularizado", "dinâmico" e moderno com JavaScript puro parece - e é - algo
extremamente complexo. É possível chegar em um nível onde sua aplicação é completa, coerente e atende a todos esses requisitos,
mas é necessário um conhecimento muito mais completo sobre JavaScript, browsers e todo o contexto de front-end do que apenas o
básico - pelo menos se você quiser fazer algo "bom", ou minimamente "decente".

<br>

Eu particularmente não considero esse blog (falando a respeito do website, como uma peça de software) algo decente, ele é criado
a partir de experiências jogadas para o alto e organizadas de uma forma que me permitisse criar algo modularizado, mas isso está
longe de ser efetivo. Quando comecei a escrever o código desse blog, meu objetivo era "testar" como andavam os meus conhecimentos
sobre JavaScript e browsers, então me "desafiei" a escrever algo que funcionasse de uma forma parecida a um framework de frontend
moderno, com componentização e outras firulas. 

<br>

Acontece que chegar no estado da arte para essas funcionalidades não é uma função
simples. Não segui nenhuma especificação, não li o código-fonte de nenhum framework moderno de JavaScript, não fiz nada que não
fosse simplesmente olhar para uma aplicação moderna e tentar reproduzir o que ela fazia usando apenas meus conhecimentos, e esse
foi o motivo pelo qual esse blog se tornou uma peça de "frankestein" que seria inviável em uma aplicação comercial, porém me ajudou
a entender extensamente sobre algumas questões que eu nunca havia estudando antes, visto que na minha carreira eu majoritariamente
trabalhei com backend.

<br>

## Sumário

<br>

Dividi esse artigo em algumas partes, pois consegui extrair várias coisas extremamente importantes que eu julgo necessário uma pessoa que 
esteja começando o desenvolvimento de software - principalmente se tiver como objetivo atuar como frontend integralmente - aprender. 
Ou não, você também pode aprender por puro esporte e até mesmo simplesmente por aprender, de qualquer forma, recomendo
esse artigo a todos.

<br>

  - <a href='#componentização-e-rerendering'>Componentização e re-rendering</a>
    - <a href='#renderização-condicional'>Renderização condicional</a>
    - <a href='#sobre-propagação-de-eventos'>Sobre propagação de eventos</a>
    - <a href='#temas-e-cores'>Temas e cores</a>
    - <a href='#linguagens-e-localização'>Linguagens e localização</a>
  - <a href='#blogging-o-pacote-básico'>Blogging - o pacote básico</a>
    - <a href='#carregando-blogposts-de-arquivos-markdown'>Carregando blogposts de arquivos markdown</a>
    - <a href='#o-jeito-mais-incorreto-de-carregar-metadados'>O jeito mais incorreto de carregar metadados</a>
    - <a href='#pesquisando-entre-os-blogposts-carregados'>Pesquisando entre os blogposts carregados</a>
    - <a href='#seo-e-redirecionadores'>SEO e redirecionadores</a>
  - <a href='#code-highlighting-e-customização'>Code highlighting e customização</a>

<br>

<h2 id="componentização-e-rerendering">Componentização e re-rendering</h2>

<br>

Frameworks como React utilizam diversas técnicas para alcançar um nível de observabilidade que permite que o desenvolvedor final seja
capaz de criar aplicações componentizadas com re-rendering condicional baseado em um estado. No meu blog eu fiz algo diferente, e para
não falar que estou poluíndo o DOM com re-renders, fiz uma *gambiarra* com o intuito de salvar um estado prévio (o que, apesar de ser
um array aleatório sem muita preparação, podemos chamar de VirtualDOM).

<br>

<h3 id="renderização-condicional">Renderizaçao condicional</h3>

<br>

Nesse exemplo, faço uma funcionalidade que me permite emular renderização condicional na minha aplicação:

```js
class App {
    static currentPageContent = [];
    static pageContent = [];
}

function updatePageContent() {
  const currentTextContent = App.currentPageContent.join('');
  const newTextContent = App.pageContent.join('');

  if (currentTextContent != newTextContent) {
    // Pequeno hack para evitar reference traps
    App.currentPageContent = App.pageContent.map(x => x);
    document.body.innerHTML = newTextContent;
    document.body.style.backgroundColor = App.theme[App.theme.current].secondary;
  }
}
```

<br>

É nesse momento que eu já começo a me perguntar o que estou fazendo... Claro, a solução funciona, mas fica a pergunta para treinamento
mental: isso deveria realmente funcionar? Até o momento está funcionando maravilhosamente tanto no meu local quando no Github Pages, que
é onde eu hosteio a solução. Voltando para o contexto da situação, agora que já definimos a funcionalidade para atualizar nossa tela
automaticamente após atualização do nosso "VirtualDOM" (carinhosamente apelidado de *pageContent*), vamos definir um cronjob para que
seja feita essa checagem da maneira mais ~~limpa~~ possível.

<br>

```js
//Chamada inicial que busca evitar aquela tela vazia ao entrar no site
updatePageContent();

//Agora chamamos a cada 10 milissegundos porque realmente não nos preocupamos
//com as capacidades da máquina do usuário final.
setInterval(updatePageContent, 10);
```

<br>

Com tudo configurado, basta adicionar novos valores à variável *pageContent* e poderá ser vista a mágica acontecer: o DOM será
atualizado automaticamente. Tudo perfeito, correto? Agora tente colocar qualquer input de texto, estado ou número e veja a sua
aplicação explodir (não me responsabilizo por danos!). Falaremos disso mais à frente e o que podemos fazer para contornar esse
problema (tem tudo a ver com eventos e propagação! um ótimo exercício para JavaScript básico).

<h3 id="sobre-propagação-de-eventos">Sobre propagação de eventos</h3>

<br>


@@@@@
this-blog-was-made-with-pure-javascript | This blog was made with pure JavaScript | enus | 2024-09-21T18:14:57.044Z | Criando um blog modularizado dinâmico e moderno com JavaScript puro, sem TS ou frameworks.

# This blog was made with pure JavaScript

## Teste2

Algum texto.

  - Item 1
  - Item 2
  - Item 3
    - Item 4
        - Item 5
            - Item 6

```ts


function toCelsius(fahrenheit: number) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
```
<a href="test">a</a>