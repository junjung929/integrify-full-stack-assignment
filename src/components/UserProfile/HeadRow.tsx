import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
  text: string;
}
const HeadRow = ({ text }: Props) => {
  return (
    <Grid container item>
      <Grid item component={Typography} variant="h5" xs={6}>
        {text}
      </Grid>
    </Grid>
  );
};

export default HeadRow;
