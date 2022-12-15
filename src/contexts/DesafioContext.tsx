import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from 'js-cookie';

import data from "../../data.json";
import { LevelUpModal } from "../components/LevelUpModal";

interface DesafioJSON {
    type:  'body' | 'eye';
    description: string;
    amount: number;
}
 
interface DesafioContextData { 
    level: number;
    experienciaUsuario: number;
    desafioCompletos: number;
    experienciaNovoNivel: number;
    ativoDesafio: DesafioJSON;
    levelUp: () => void;
    iniciarNovoDesafio: () => void;
    resetarDesafio: () => void;
    completarDesafio: () => void;
    fecharModal: () => void;
}

interface DesafioProviderProps {
    children: ReactNode;
    level: number;
    experienciaUsuario: number;
    desafioCompletos: number;
}

//todas as propriedades que nao sao as children rest operation(pego todo o resto das propriedades e boto na variavel => ...rest)

export const DesafioContext = createContext({} as DesafioContextData);

export function DesafioProvider({ children, ...rest }: DesafioProviderProps) {

    const [level, setLevel] = useState( rest.level ?? 1); // ?? se nao existir colocar o numero 1..
    const [experienciaUsuario, setExperienciaUsuario] = useState( rest.experienciaUsuario ?? 0);
    const [desafioCompletos, setDesafioCompleto] = useState( rest.desafioCompletos ?? 0);

    const [ativoDesafio, setAtivoDesafio] = useState(null);
    const [abrirModal, setAbrirModal] = useState(false);

    const experienciaNovoNivel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission(); //pedindo permissão para enviar notificações.....
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('experienciaUsuario', String(experienciaUsuario));
        Cookies.set('desafioCompletos', String(desafioCompletos));
    }, [ level, experienciaUsuario, desafioCompletos ])

    function levelUp() {
        setLevel(level + 1);
        setAbrirModal(true);
    }

    function fecharModal() {
        setAbrirModal(false);
    }

    function iniciarNovoDesafio() {
        const desafioAleatorioIndex = Math.floor(Math.random() * data.length );
        const desafio = data[desafioAleatorioIndex];

        setAtivoDesafio(desafio);

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio..', {
                body: `Valendo ${desafio.amount}xp!`
            })
        }
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
            completarDesafio,
            fecharModal
        }}>
            {children}

            { abrirModal && <LevelUpModal/> }
            
        </DesafioContext.Provider>
    );
}



//todos os elementos dentro do Provider, vao ter acesso aos dados daquele contexto...Todos os dados que for armazenar dentro daquele contexto... Foi colocado por fora para que toda a aplicação tenha acesso aos dados...
//O provider recebe uma propriedade (Value), que é, o que quero enviar de informação. 