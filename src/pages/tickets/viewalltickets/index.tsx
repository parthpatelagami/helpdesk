import { Grid } from "@mui/material"
import TableServerSide from "src/views/table/data-grid/TableServerSide"


const viewallticket=()=>{
    

    return (
       <Grid container spacing={6}>
         <Grid item xs={12}>
        <TableServerSide />
      </Grid>
       </Grid>
    )
}

export default viewallticket