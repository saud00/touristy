import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

export default function BasicDateRangePicker({setDays, setDispatcher}) {
    // const dispatch = useDispatch()
    // console.log(setDispatcher)
  const [value, setValue] = React.useState([null, null]);
  const today = new Date()

  if (value[1]){
    const day1 = new Date(value[0].toLocaleDateString("en-US"))
    const day2 = new Date(value[1].toLocaleDateString("en-US"))
    const diffTime = Math.abs(day2 - day1);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    setDays(days)
    setDispatcher(true)
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        minDate={today}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} size="small"/>
            <Box sx={{ mx: 2  }}> to </Box>
            <TextField {...endProps}  size="small"/>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
