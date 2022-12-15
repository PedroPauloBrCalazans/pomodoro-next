import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletarDesafio } from '../components/CompletarDesafio';
import { Contador } from '../components/Contador';
import { ExperienceBar } from '../components/ExperienceBar';
import { Perfil } from '../components/Perfil';
import { DesafioBox } from '../components/DesafioBox';

import styles from '../styles/pages/Home.module.css';
import { ContadorProvider } from '../contexts/ContadorContext';
import { DesafioProvider } from '../contexts/DesafioContext';

interface HomeProps {
  level: number
  experienciaUsuario: number
  desafioCompletos: number
}

export default function Home(props: HomeProps) {

   return (
    <DesafioProvider 
      level={props.level}
      experienciaUsuario={props.experienciaUsuario}
      desafioCompletos={props.desafioCompletos}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Pomodo.ro</title>
        </Head>
        <ExperienceBar />
        <ContadorProvider>
          <section>
            <div>
                <Perfil />
                <CompletarDesafio />
                <Contador />
            </div>
            <div>
              <DesafioBox />
            </div>
          </section>
        </ContadorProvider>
      </div>
    </DesafioProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => { // obrigatorio ser esse nome...
//chamada API..

const { level, experienciaUsuario, desafioCompletos } = ctx.req.cookies;

  return {
    props: {
      level: Number(level), // convertendo de string para numeros...
      experienciaUsuario: Number(experienciaUsuario),
      desafioCompletos: Number(desafioCompletos)
    }
  }
}

// quando declaro essa function/const (getServerSideProps), dentro de uma pagina do Next.JS, consigo manipular quais dados são repassado da camada do (Next.js => Node) para camada front-end(react).

// Dentro da getServerSideProps posso fz uma chamada API que busca alguns dados para preencher na interface... 
//O que eu fizer de chamada para serviço externo, que for assicronomo que se for feito de dentro do componente nao vai está disponivel na minha tela quando um motor de busca(google), for acessar a minha aplicação..
// Se for feito a chamada para o serviço externo dentro da getServerSideProps, o que o Next vai fazer => antes de construir a interface, vai fz a chamada API, pega os dados e passa para os componentes ja prontos.

//getServerSideProps tudo que faço aqui, roda no servidor NODE, e nao no brower...