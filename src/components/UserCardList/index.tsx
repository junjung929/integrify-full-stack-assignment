import { Grid } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import { UserCard } from '..';
import { User } from '../../types';

interface Props {
  users: User[];
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      height: '100%',
    },
  })
);

const UserCardList = ({ users }: Props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} alignItems="stretch">
      {users.map((user) => (
        <Grid key={`user-${user.id}`} item xs sm={4}>
          <UserCard user={user} className={classes.card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCardList;
