import { Card } from '@mui/material';
import React from 'react';
import { User } from '../../types';
import Content from './Content';

interface Props {
  user: User;
  className?: string;
}

const UserProfile = ({ user, className }: Props) => {
  if (!user) {
    return null;
  }
  return (
    <Card className={className}>
      <Content user={user} />
    </Card>
  );
};

export default UserProfile;
