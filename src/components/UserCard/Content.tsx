import { Avatar, CardContent, Link, Typography } from '@mui/material';
import React from 'react';
import { User } from '../../types';
import faker from 'faker';

faker.seed(123);

interface Props {
  user: User;
}
const Content = ({ user }: Props) => {
  return (
    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
        }}
        style={{ alignSelf: 'center', margin: 10 }}
        alt={user.name}
        src={faker.internet.avatar()}
      />
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
