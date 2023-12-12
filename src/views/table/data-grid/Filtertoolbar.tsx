import {
  Box,
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Select,
  TextField,
  Toolbar
} from "@mui/material";
import { useTheme } from '@mui/material/styles'
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactDatePickerProps } from "react-datepicker";
import Icon from "src/@core/components/icon";
import CustomAutocomplete from "src/@core/components/mui/autocomplete";
import CustomTextField from "src/@core/components/mui/text-field";
import PickersRange from "./PickersRange";
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";


const FILTERS = [
  { id: 1, label: "Filter 1", options: ['filter1-option', 'filter1-option2', 'filter1-optio3', 'filter1-option4'],type:"select" },
  { id: 2, label: "Filter 2", options: ['filter2-option1', 'filter2-option2', 'filter2-option3', 'filter2-option4'],type:"select" },
  { id: 3, label: "Filter 3", options: ['filter3-option1', 'filter3-option2', 'filter3-option3', 'filter3-option4'],type:"dfse" },
];
interface jsonres{
  title?:string;

}
type JSONArray = jsonres[]
const Filtertoolbar = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [callfrom, setCallFrom] = useState<any>(null);
  const [filteroption,setFilteroption]= useState<JSONArray>([]);
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement: ReactDatePickerProps['popperPlacement'] = direction === 'ltr' ? 'bottom-start' : 'bottom-end'
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDropdown = () => {
    setCallFrom(null);
  };
  const handleFilterChange = (event: any, filter: any) => {
    const updatedFilters: any[] = [...selectedFilters];
    if (event.target.checked) {
      updatedFilters.push(filter);
    } else {
      updatedFilters.splice(updatedFilters.indexOf(filter), 1);
    }
    setSelectedFilters(updatedFilters);
  };
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res:any)=>{
      setFilteroption(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <Toolbar>
      <Box
        sx={{
          display: 'flex',
          alignItems: "center"
        }}
      >
        {FILTERS.map((filter) => {
          const isSelected = selectedFilters.some((selectedFilter) => selectedFilter.id === filter.id);
          if (!isSelected) {
            return null;
          }
          if(filter.type=='select'){
            return (
              <ListItem>
                <CustomAutocomplete
                  sx={{width:200}}
                  multiple
                  limitTags={1}
                  disableCloseOnSelect
                  options={filteroption}
                  id='autocomplete-checkboxes'
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <CustomTextField {...params} label='Checkboxes' placeholder='Favorites' />}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox checked={selected} sx={{ mr: 2 }} />
                      {option.title}
                    </li>
                  )}
                  renderTags={(value) =>
                    <Box>
                    {value.length>0 ? value[0].title+(value.length>1 ? `+${value.length-1}`:''):''}
                    </Box>
                  }
                />
                </ListItem>
            );
          }else{
            return(
              <DatePickerWrapper>
                <PickersRange popperPlacement={popperPlacement} />
              </DatePickerWrapper>
            );
          }
          
        })}
        <Box sx={{ mt: 5 }}>
          <Button
            size="small"
            onClick={handleClick}
            startIcon={(<IconButton size='small' title='Clear' aria-label='Clear'>
              <Icon fontSize='1.25rem' icon='ic:baseline-plus' />
            </IconButton>)}
          >
            More
          </Button>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {FILTERS.map(filters => (
            <MenuItem key={filters.id} value={filters.label} onChange={(e) => handleFilterChange(e, filters)}>
              <Checkbox checked={selectedFilters.some((selectedFilter) => selectedFilter.id === filters.id)} />
              <ListItemText primary={filters.label} />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          anchorEl={callfrom}
          open={Boolean(callfrom)}
          onClose={handleCloseDropdown}
        >
          <MenuItem>
            <TextField size="small" />
          </MenuItem>
        </Menu>
      </Box>
    </Toolbar>
  );
};
export default Filtertoolbar