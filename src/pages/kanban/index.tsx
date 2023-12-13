import KanbanBoard from 'src/@core/components/kanban/KanbanBoard'
import { Row, Column } from 'src/context/types'
import { KanbanRowData, KanbanColumnData } from 'src/@core/components/kanban/data/kanbanboarddata'

function Kanban() {
  const rowData: Row[] = KanbanRowData
  const columnData: Column[] = KanbanColumnData

  return (
    <>
      <KanbanBoard row={rowData} column={columnData} />
    </>
  )
}
export default Kanban
