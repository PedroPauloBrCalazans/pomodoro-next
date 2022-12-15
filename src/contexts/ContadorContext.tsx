import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { DesafioContext } from "./DesafioContext";

interface ContadorContextData {
    minutos: number;
    secundos: number;
    finalizou: boolean;
    isAtivo: boolean;
    iniciarContador: () => void;
    resertarContador: () => void;
}

interface ContadorProviderProps {
    children: ReactNode;
}

export const ContadorContext = createContext({} as ContadorContextData)

let contadorTimeout: NodeJS.Timeout;

export function ContadorProvider({ children } : ContadorProviderProps) {

    //chamando contexto 
    const { iniciarNovoDesafio } = useContext(DesafioContext);

    // Manipular horas em segundos, fica mais facil manipular essa operacao
    // 25 * 60, 60 segundos tem 1 minuto,,, 25 representa 25 minutos porem em segundos
    const [time, setTime] = useState(25 * 60);
    const [isAtivo, setIsAtivo] = useState(false);
    const [finalizou, setFinalizou] = useState(false);

    //calculando os minutos atraves do valor acima 

    const minutos = Math.floor(time / 60);   // Math.floor estou arredondando para baixo o valor de time, vai retornar o numero de minutos totais..
    const secundos = time % 60;  //vai retornar o resto da divisao,, os secundos.

    function iniciarContador() {
        setIsAtivo(true);
     }

     function resertarContador() {
        clearTimeout(contadorTimeout);
        setIsAtivo(false);
        setFinalizou(false);
        setTime(0.1 * 60);
     }

     useEffect(() => {
        if (isAtivo && time > 0) {
            contadorTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isAtivo && time === 0) {
            setFinalizou(true);
            setIsAtivo(false);
            iniciarNovoDesafio();
        }
     }, [isAtivo, time])

    return(
        <ContadorContext.Provider 
            value={{
                minutos,
                secundos,
                finalizou,
                isAtivo,
                iniciarContador,
                resertarContador
            }}
        >
            {children}
        </ContadorContext.Provider>
    );
}