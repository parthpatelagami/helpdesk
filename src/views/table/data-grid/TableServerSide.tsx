// ** React Imports
import { useEffect, useState, useCallback, ChangeEvent } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid'

// ** ThirdParty Components
import axios from 'axios'


import Filtertoolbar from './Filtertoolbar'


type SortType = 'asc' | 'desc' | undefined | null



const TableServerSide = () => {
  // ** States
  const [total, setTotal] = useState<number>(0)
  const [sort, setSort] = useState<SortType>('asc')
  const [rows, setRows] = useState<any>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>('full_name')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 50 })
  const [column,setColumn]= useState<any>([])

  
  const fetchTableData = useCallback(
    async (sort: SortType, q: string, column: string) => {
      await axios
        .get('https://api.slingacademy.com/v1/sample-data/users', {
          params: {
            search:q,
            sort,
            column,
            offset: paginationModel.page * paginationModel.pageSize,
            limit: paginationModel.pageSize

          }
        })
        .then(res => {
          const keys = Object.keys(res.data.users[0] || {});
          const columnsArray = keys.map((key) => ({ field: key }));
          setColumn(columnsArray);
          setTotal(res.data.total_users)
          setRows(res.data.users)
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [paginationModel]
  )

  useEffect(() => {
    fetchTableData(sort, searchValue, sortColumn)
  }, [fetchTableData, searchValue, sort, sortColumn])

  const handleSortModel = (newModel: GridSortModel) => {
    if (newModel.length) {
      setSort(newModel[0].sort)
      setSortColumn(newModel[0].field)
      fetchTableData(newModel[0].sort, searchValue, newModel[0].field)
    } else {
      setSort('asc')
      setSortColumn('full_name')
    }
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
    fetchTableData(sort, value, sortColumn)
  }
  const handleFilterModelChange=(param:any)=>{
    console.log(param);
  }
  

  return (
    <Card>
      <CardHeader title='Server Side' />
      <DataGrid
        autoHeight
        pagination
        rows={rows}
        rowCount={total}
        columns={column}
        checkboxSelection
        sortingMode='server'
        paginationMode='server'
        pageSizeOptions={[7, 10, 25, 50]}
        paginationModel={paginationModel}
        onSortModelChange={handleSortModel}
        slots={{ toolbar: Filtertoolbar }}
        onPaginationModelChange={setPaginationModel}
        onFilterModelChange={handleFilterModelChange}
        slotProps={{
          baseButton: {
            size: 'medium',
            variant: 'tonal'
          },
          toolbar: {
            value: searchValue,
            clearSearch: () => handleSearch(''),
            onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
          }
        }}
      />
    </Card>
  )
}

export default TableServerSide
