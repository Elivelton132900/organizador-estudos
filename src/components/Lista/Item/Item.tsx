import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa { // Prop vai conter tudo do ITarega e vai ter coisas próprias
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void

}

export default function Item(
  { 
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id,
    selecionaTarefa
  }: Props) {

  return (
    <li 
      className={`
      ${style.item} 
      ${selecionado ? style.itemSelecionado : ''} 
      ${completado ? style.itemCompletado : ''}
      `} 
      onClick={() => !completado && selecionaTarefa( // Condicional, só executa se não ter completado
      {
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      }
      )}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="item completado"></span>}
    </li>
  )
}