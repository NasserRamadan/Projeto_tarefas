import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  estado: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    estado: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.estado = estado
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
