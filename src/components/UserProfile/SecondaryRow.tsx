import { Grid, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface Props {
  value: ReactNode;
  label: string;
}
const SecondaryRow = ({ label, value }: Props) => {
  return (
    <Grid container item>
      <Grid
        item
        component={Typography}
        sx={{ mb: 1.5 }}
        color="text.secondary"
        xs={4}
      >
        {label}:
      </Grid>
      <Grid
        item
        component={Typography}
        sx={{ mb: 1.5 }}
        color="text.secondary"
        xs={6}
      >
        {value}
      </Grid>
    </Grid>
  );
};

export default SecondaryRow;
