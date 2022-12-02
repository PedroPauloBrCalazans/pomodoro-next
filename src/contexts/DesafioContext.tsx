import { createContext, useState, ReactNode } from "react";

import desafios from "../../desafios.json";

interface DesafioJSON {
    type:  'body' | 'eye';
    description: string;
    amount: number;
}
 
interface DesafioContextData { 
    level: number;
    experienciaUsuario: number;
    desafioCompletos: number;
    ativoDesafio: DesafioJSON;
    experienciaNovoNivel: number;
    levelUp: () => void;
    iniciarNovoDesafio: () => void;
    resetarDesafio: () => void;
    completarDesafio: () => void;
}

interface DesafioProviderProps {
    children: ReactNode;
}

export const DesafioContext = createContext({} as DesafioContextData);

export function DesafioProvider({ children }: DesafioProviderProps) {

    const [level, setLevel] = useState(1);
    const [experienciaUsuario, setExperienciaUsuario] = useState(0);
    const [desafioCompletos, setDesafioCompleto] = useState(0);

    const [ativoDesafio, setAtivoDesafio] = useState(null);

    const experienciaNovoNivel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function iniciarNovoDesafio() {
        const desafioAleatorioIndex = Math.floor(Math.random() * desafios.length );
        const desafio = desafios[desafioAleatorioIndex];

        setAtivoDesafio(desafio);
    }

    function resetarDesafio() {
        setAtivoDesafio(null);
    }

    function completarDesafio() {
        if(!ativoDesafio) {
            return; //retorna void...
        }

        const { amount } = ativoDesafio;

        let finalExperiencia = experienciaUsuario + amount;

        if(finalExperiencia >= experienciaNovoNivel) {
            finalExperiencia = finalExperiencia - experienciaNovoNivel;
            levelUp();
        }

        setExperienciaUsuario(finalExperiencia);
        setAtivoDesafio(null);
        setDesafioCompleto(desafioCompletos + 1);
    }


    return (
        <DesafioContext.Provider 
        value={{ 
            level,
            experienciaUsuario,
            desafioCompletos,
            ativoDesafio,
            experienciaNovoNivel,
            levelUp,
            iniciarNovoDesafio,
            resetarDesafio,
            completarDesafio
        }}>
            {children}
        </DesafioContext.Provider>
    );
}



//todos os elementos dentro do Provider, vao ter acesso aos dados daquele contexto...Todos os dados que for armazenar dentro daquele contexto... Foi colocado por fora para que toda a aplicação tenha acesso aos dados...
//O provider recebe uma propriedade (Value), que é, o que quero enviar de informação. 