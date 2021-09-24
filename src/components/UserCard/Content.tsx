import { CardContent, Link, Typography } from '@mui/material';
import React from 'react';
import { User } from '../../types';
import UserAvatar from '../UserAvatar';

interface Props {
  user: User;
}
const Content = ({ user }: Props) => {
  return (
    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
      <UserAvatar name={user.name} userId={user.id} />

      <Typography variant="h5" component="div" textAlign="center">
        {user.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
        <i>@{user.username}</i>
      </Typography>
      <Link href={`http://${user.website}`} variant="body2" textAlign="center">
        http://{user.website}
      </Link>
    </CardContent>
  );
};

export default Content;
