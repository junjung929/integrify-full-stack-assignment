import { Button, CardActions } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}
const Action = ({ to }: Props) => {
  return (
    <CardActions style={{ marginBottom: 10 }}>
      <Button variant="contained" component={Link} to={to}>
        more details
      </Button>
    </CardActions>
  );
};

export default Action;
