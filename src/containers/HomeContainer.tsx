import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getUsers } from '../actions';
import { UserCardList } from '../components';
import { User } from '../types';

const HomeContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if ((!users || users.length < 1) && loading) {
    return <Container style={{ marginTop: 20 }}>loading...</Container>;
  }

  if (!users || users.length < 1) {
    return <Container style={{ marginTop: 20 }}>No users found</Container>;
  }
  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <UserCardList users={users} />
    </Container>
  );
};

export default HomeContainer;
