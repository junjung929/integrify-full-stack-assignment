import { Avatar } from '@mui/material';
import faker from 'faker';
import React from 'react';

interface Props {
  name: string;
  userId: number;
}
const UserAvatar = ({ name, userId }: Props) => {
  const getImage = (id: number) => {
    faker.seed(id);
    return faker.internet.avatar();
  };
  return (
    <Avatar
      sx={{
        width: 100,
        height: 100,
      }}
      style={{ alignSelf: 'center', margin: 10 }}
      alt={name}
      src={getImage(userId)}
    />
  );
};

export default UserAvatar;
