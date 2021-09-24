import { CardContent, Link, Grid } from '@mui/material';
import React from 'react';
import { User } from '../../types';
import UserAvatar from '../UserAvatar';
import HeadRow from './HeadRow';
import SecondaryRow from './SecondaryRow';

interface Props {
  user: User;
}

const Content = ({ user }: Props) => {
  return (
    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
      <UserAvatar name={user.name} userId={user.id} />
      <Grid container spacing={1}>
        <HeadRow text={user.name} />
        <SecondaryRow label="Username" value={user.username} />
        <SecondaryRow label="Email" value={user.email} />
        <SecondaryRow label="Phone" value={user.phone} />
        <SecondaryRow label="Company" value={user.company.name} />
        <SecondaryRow
          label="Website"
          value={
            <Link href={`http://${user.website}`}>http://{user.website}</Link>
          }
        />
      </Grid>
      <Grid container spacing={1}>
        <HeadRow text="Address" />
        <SecondaryRow label="Street" value={user.address.street} />
        <SecondaryRow label="Suite" value={user.address.suite} />
        <SecondaryRow label="City" value={user.address.city} />
        <SecondaryRow label="Zip Code" value={user.address.zipcode} />
      </Grid>
    </CardContent>
  );
};

export default Content;
