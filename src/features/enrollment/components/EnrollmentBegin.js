import { useEffect, useState } from 'react';

// Components
import Button from '../../../components/common/Button';
import Container from '../../../components/layout/Container';

// MUI
import { Grid, List, ListItem, Typography } from '@mui/material';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../store/slices/userSlice';

// Constants
import {
  workingTitle,
  customerRequirements,
  contractorRequirements,
} from '../../../constants/content';
import { CONTRACTOR_ROUTE, CUSTOMER_ROUTE } from '../../../constants/routes';
import UserType from '../../../constants/userType';

// React Router
import { Link } from 'react-router-dom';

const EnrollmentBegin = () => {
  const dispatch = useDispatch();
  const [requirements, setRequirements] = useState(null);
  const [enrollmentRoute, setEnrollmentRoute] = useState(null);

  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    if (data.committedToPath === UserType.CUSTOMER) {
      setRequirements(customerRequirements);
      setEnrollmentRoute(CUSTOMER_ROUTE);
    }
    if (data.committedToPath === UserType.CONTRACTOR) {
      setRequirements(contractorRequirements);
      setEnrollmentRoute(CONTRACTOR_ROUTE);
    }
  }, [data]);

  const handleEnrollmentBeginClick = () => {
    dispatch(
      updateUser({
        uid: data.userId,
        updateData: { userType: data.committedToPath },
      })
    );
  };

  return (
    <Container maxWidth='xs'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='stretch'
        spacing={1}
        sx={{ my: '3rem' }}
      >
        <Grid item>
          <Typography variant='h6' component='h1'>
            {data.legalName.firstName}, you're about to begin your{' '}
            <i>{workingTitle}</i> journey
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            As a {data.committedToPath}, we're going to need some additional
            information about you, such as:
          </Typography>
        </Grid>
        {requirements && (
          <Grid item>
            <List>
              {requirements.map((requirement, index) => (
                <ListItem key={index}>
                  <Typography variant='body2' component='p'>
                    {requirement.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        )}
        <Grid item>
          <Link to={enrollmentRoute} style={{ color: 'inherit' }}>
            <Button
              fullWidth
              text={`Become a ${data.committedToPath}`}
              variant='contained'
              onClick={handleEnrollmentBeginClick}
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EnrollmentBegin;
