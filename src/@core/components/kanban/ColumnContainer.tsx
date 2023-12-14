import React from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import { Column, Row, Id } from 'src/context/types'
import { useMemo } from 'react'
import TaskCard from './TaskCard'
import { Box } from '@mui/system'
import { CSS } from '@dnd-kit/utilities'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import Typography from '@mui/material/Typography'

interface ColumnContainerProps {
  column: Column
  rows: Row[]
}

function ColumnContainer(props: ColumnContainerProps) {
  const { column, rows } = props
  const taskIds = useMemo(() => rows.map(row => row.id), [rows])
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: props.column.id,
    data: {
      type: 'Column',
      column
    }
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    cursor: 'grab'
  }
  if (isDragging) {
    return (
      <Box
        ref={setNodeRef}
        style={style}
        sx={{
          style: { style },
          width: '430px',
          borderRadius: 'md',
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: theme => `${theme.palette.primary.main} !important`,
          opacity: 0.6
        }}
      >
        <Box
          {...attributes}
          {...listeners}
          sx={{
            fontSize: 'md',
            height: '60px',
            fontWeight: 'bold'
          }}
        >
          <Typography variant='h5' align='left'>
            {props.column.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            gap: '14px',
            padding: '1px',
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '100%',
            marginBottom: 5
          }}
        >
          <SortableContext items={taskIds}>
            {rows.length === 0 ? (
              <Box>No records found</Box>
            ) : (
              rows.map(row => (
                <Box key={row.id}>
                  <TaskCard row={row} />
                </Box>
              ))
            )}
          </SortableContext>
        </Box>
      </Box>
    )
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      sx={{
        style: { style },
        width: '430px',
        borderRadius: 'md',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        {...attributes}
        {...listeners}
        sx={{
          fontSize: 'md',
          height: '60px',
          cursor: 'grab',
          fontWeight: 'bold'
        }}
      >
        <Typography variant='h5' align='left'>
          {props.column.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          gap: '14px',
          padding: '1px',
          overflowX: 'hidden',
          overflowY: 'hidden',
          height: '100%',
          marginBottom: 5
        }}
      >
        <SortableContext items={taskIds}>
          {rows.length === 0 ? (
            <Box>No records found</Box>
          ) : (
            rows.map(row => (
              <Box key={row.id}>
                <TaskCard row={row} />
              </Box>
            ))
          )}
        </SortableContext>
      </Box>
    </Box>
  )
}

export default ColumnContainer
