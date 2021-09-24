import { Avatar, CardContent, Link, Typography, Grid } from '@mui/material';
import React, { ReactNode } from 'react';
import { User } from '../../types';
import faker from 'faker';

faker.seed(123);

interface Props {
  user: User;
}
const SecondaryRow = ({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) => {
  return (
    <Grid container item>
      <Grid
        item
        component={Typography}
        sx={{ mb: 1.5 }}
        color="text.secondary"
        xs={4}
      >
        {label}:
      </Grid>
      <Grid
        item
        component={Typography}
        sx={{ mb: 1.5 }}
        color="text.secondary"
        xs={6}
      >
        {value}
      </Grid>
    </Grid>
  );
};
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
      <Grid container spacing={1}>
        <Grid container item>
          <Grid item component={Typography} variant="h5" xs={4}>
            Name:
          </Grid>
          <Grid item component={Typography} variant="h5" xs={6}>
            {user.name}
          </Grid>
        </Grid>
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
        <Grid container item>
          <Grid item component={Typography} variant="h5" xs={4}>
            Address
          </Grid>
        </Grid>
        <SecondaryRow label="Street" value={user.address.street} />
        <SecondaryRow label="Suite" value={user.address.suite} />
        <SecondaryRow label="City" value={user.address.city} />
        <SecondaryRow label="Zip Code" value={user.address.zipcode} />
      </Grid>
    </CardContent>
  );
};

export default Content;
