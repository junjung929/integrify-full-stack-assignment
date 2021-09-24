import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { User } from '../../types';

interface Props {
  user: User;
  className?: string;
}

const UserProfile = ({ user }: Props) => {
  return (
    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
        }}
        style={{ alignSelf: 'center', margin: 10 }}
      >
        {user.name.slice(0, 1)}
      </Avatar>
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

const UserCard = ({ user, className }: Props) => {
  if (!user) {
    return null;
  }
  const content = <UserProfile user={user} />;
  return (
    <Card
      className={className}
      sx={{
        minWidth: 220,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {content}
      <CardActions>
        <Button
          variant="contained"
          component={RouterLink}
          to={`/users/${user.id}`}
        >
          more details
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
