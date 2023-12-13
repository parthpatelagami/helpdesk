import React from 'react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import { Column, Row } from 'src/context/types'
import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { useMemo, useState } from 'react'
import ColumnContainer from './ColumnContainer'
import { createPortal } from 'react-dom'
import TaskCard from './TaskCard'

interface KanbanBoardProps {
  column: Column[]
  row: Row[]
}

function KanbanBoard(props: KanbanBoardProps) {
  const [columns, setColumns] = useState<Column[]>(props.column)
  const columnsId = useMemo(() => columns.map(col => col.id), [columns])
  const [tasks, setTasks] = useState<Row[]>(props.row)
  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [activeRow, setActiveRow] = useState<Row | null>(null)

  return (
    <Box
      sx={{
        alignItems: 'center',
        overflowX: 'auto',
        overflowY: 'auto',
        margin: 'auto',
        width: '100%',
        height: '100%',
        paddingX: '40px'
      }}
    >
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
        <Box
          sx={{
            m: 'auto',
            display: 'flex',
            gap: '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '16px'
            }}
          >
            <SortableContext items={columnsId}>
              {columns.map(column => (
                <ColumnContainer column={column} rows={tasks.filter(tasks => tasks.columnId === column.id)} />
              ))}
            </SortableContext>
          </Box>
        </Box>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer column={activeColumn} rows={tasks.filter(tasks => tasks.columnId === activeColumn.id)} />
            )}
            {activeRow && <TaskCard row={activeRow} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </Box>
  )
  function onDragStart(event: DragStartEvent) {
    console.log('Drag Start', event)
    if (event.active.data.current?.type == 'Column') {
      setActiveColumn(event.active.data.current.column)
      return
    }
    if (event.active.data.current?.type == 'Row') {
      setActiveRow(event.active.data.current.row)
      return
    }
  }
  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null)
    setActiveRow(null)
    console.log(event)
    const { active, over } = event
    if (!over) return

    const activeColumnId = active.id
    const overColumnId = over.id

    if (activeColumnId === overColumnId) return

    setColumns(columns => {
      const activeColumnIndex = columns.findIndex(col => col.id === activeColumnId)
      const overColumnIndex = columns.findIndex(col => col.id === overColumnId)

      return arrayMove(columns, activeColumnIndex, overColumnIndex)
    })
  }

  function onDragOver(event: DragOverEvent) {
    console.log(event)
    const { active, over } = event
    if (!over) return

    const activeRowId = active.id
    const overRowId = over.id

    if (activeRowId === overRowId) return

    const isActiveARow = active.data.current?.type === 'Row'
    const isOverARow = over.data.current?.type === 'Row'

    if (!isActiveARow) return

    // dropping a Row over another Row
    if (isActiveARow && isOverARow) {
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(t => t.id === activeRowId)

        const overIndex = tasks.findIndex(t => t.id === overRowId)

        tasks[activeIndex].columnId = tasks[overIndex].columnId

        return arrayMove(tasks, activeIndex, overIndex)
      })
    }

    const isOverAColumn = over.data.current?.type === 'Column'

    // dropping a Row over a

    if (isActiveARow && isOverAColumn) {
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(t => t.id === activeRowId)

        tasks[activeIndex].columnId = overRowId

        return arrayMove(tasks, activeIndex, activeIndex)
      })
    }
  }
}

export default KanbanBoard
