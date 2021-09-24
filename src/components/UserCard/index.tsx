import React from 'react';
import { User } from '../../types';
import Content from './Content';
import Action from './Action';
import { Card } from '@mui/material';

interface Props {
  user: User;
  className?: string;
}

const UserCard = ({ user, className }: Props) => {
  if (!user) {
    return null;
  }
  return (
    <Card
      className={className}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Content user={user} />
      <Action to={`/users/${user.id}`} />
    </Card>
  );
};

export default UserCard;
