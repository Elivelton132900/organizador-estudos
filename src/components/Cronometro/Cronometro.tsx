import Botao from "../Botao/Botao";
import Relogio from "./Relogio/Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import { useState, useEffect } from "react";

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {

  const [tempo, setTempo] = useState<number>()

  const regressiva = (contador: number = 0): void => {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000);
  }

  useEffect(() => {
    if(selecionado?.tempo) { // "se selecionado existir e selecionado.tempo existir".
      // É a mesma coisa que if(selecionado && selecionado.tempo). optional chaining.
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  )
}