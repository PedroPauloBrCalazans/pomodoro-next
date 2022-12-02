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
- Quando eu tiver o contexto de desafios todos os componentes da nossa aplicação vão poder criar um novo desafio, pegar desafio ativo, saber quantos já foram completados..
- const desafioContext = createContext({ valor inicial para o contexto... });
- Contexto é uma forma de acesso ao uma informação de diversos lugares.....
- Podemos ter informações dentro do context e funções.
### Para rodar a aplicação ->  `yarn dev`

vai abrir em [http://localhost:3000]


Math.random => retornar um numero randomico aleatorio entre 0 e 1... Se quiser que retorne aleatorio entre 0 e alguma coisa tenho que passar qual que é essa coisa *(multiplicando) o numero...
para retornar apenas numeros inteiros Math.floor(Math.random() * algumaCoisa.length)...


Math.pow()  => calcular uma potencia

Math.round() => arredonda o resultado...

muito comum no React um contexto dependender do outro..
<DesafioProvider>
    <ContadorProvider>
        <Component {...pageProps} />
    </ContadorProvider>
</DesafioProvider>

desafio manda informações para os demais inclusive para o Contador por isso de está em baixo... Como não vou ter em todas as telas o  Contador, não precisa colocar no (_app.tsx).... E colocar na homePage(index.tsx) pois pertence somente para essa tela.