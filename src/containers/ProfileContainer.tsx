import { Container } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../actions';
import UserProfile from '../components/UserProfile';
import { User } from '../types';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '90vh',
      marginTop: 10,
    },
  })
);
const ProfileContainer = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams<{ id: string }>();
  const userId = Number(params.id);
  const classes = useStyles();
  useEffect(() => {
    setLoading(true);
    getUser(userId)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (!user && loading) {
    return (
      <Container maxWidth="xs" style={{ marginTop: 20 }}>
        loading...
      </Container>
    );
  }
  if (!user) {
    return (
      <Container maxWidth="xs" style={{ marginTop: 20 }}>
        No user found
      </Container>
    );
  }
  return (
    <Container maxWidth="xs" className={classes.container}>
      <UserProfile user={user} />
    </Container>
  );
};

export default ProfileContainer;
