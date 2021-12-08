import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import {Step, Typography} from '@mui/material';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Choose',
  'Confirm',
  'Pay',
];

export default function Steppers() {
  return (
    <Box sx={{ width: '50%'}}>
      <Stepper activeStep={1} alternativeLabel >
        {steps.map((label, ind) => (
          <Step key={label}  >
            <StepLabel>
                <Typography  style={{color: ind<2 ?"cadetblue" : "grey", transform:"scale(.8,.8)",fontWeight: 'bold'}}>{label}</Typography>
                </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
