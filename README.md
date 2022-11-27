# Criação do projeto com Next.JS
npx-create-next-app nome-da-aplicacao

-- Usando CSS Module..

## Sobre o Projeto


## Usando o Next.js
 - Ele substitui o create-react-app...
 - pode ser considerado um framework em cima do React. React = biblioteca de construção de interface...
 - Next trás um conjunto de funcionalidades que repetimos em todas as aplicaçoes React.
 - Next é uma camada intermediaria entre o back e o front...
 - Site públicos vai de NEXT.JS...
 - Permite trabalhar com SPA, SSR e SSG.
    -- SPA: (Aplicação de uma unica pagina, so muda o conteudo, toda interface no front-end). 
        * QUANDO NAO FUNCIONA BEM ? problemas com SEO, nao conseguimos optimizar a nossa aplicação para motores de buscas. Next resolve isso...
    --SSR(server side rendering): (Next.js).
    --SSG: (nao e muito utilizado, paginas estaticas, nao precisa acessar BD, HTML, CSS e JS puro).


    npx-create-next-app nome-da-aplicacao

    index.js -> arquivo principal 
    _app.js -> funcionalidades que se repete em todo projeto.. navBar etc.... Aqui reaproveita mas e recalculado gera um processamento a mais.
    _document => carrega uma unica vez, numa visita de usuario em nossa aplicação...aqui e estatico

## Usando Context API
- Utilizaremos Context API => São formas de fazer comunicações entre vários componentes da nossa aplicação. 
- Um componente pode se comunicar com outros componentes, passar informações..
### Para rodar a aplicação ->  `yarn dev`

vai abrir em [http://localhost:3000]