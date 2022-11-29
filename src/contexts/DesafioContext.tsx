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
    levelUp: () => void;
    iniciarNovoDesafio: () => void;
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

    function levelUp() {
        setLevel(level + 1);
    }

    function iniciarNovoDesafio() {
        const desafioAleatorioIndex = Math.floor(Math.random() * desafios.length );
        const desafio = desafios[desafioAleatorioIndex];

        setAtivoDesafio(desafio);
    }


    return (
        <DesafioContext.Provider 
        value={{ 
            level,
            experienciaUsuario,
            desafioCompletos,
            ativoDesafio,
            levelUp,
            iniciarNovoDesafio
        }}>
            {children}
        </DesafioContext.Provider>
    );
}



//todos os elementos dentro do Provider, vao ter acesso aos dados daquele contexto...Todos os dados que for armazenar dentro daquele contexto... Foi colocado por fora para que toda a aplicação tenha acesso aos dados...
//O provider recebe uma propriedade (Value), que é, o que quero enviar de informação. 