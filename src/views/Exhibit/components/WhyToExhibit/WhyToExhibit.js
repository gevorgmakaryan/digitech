import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const WhyToExhibit = () => {
  return (
    <Box>
      <Typography
        variant={'h3'}
        component={'h3'}
        align={'center'}
        sx={{
          fontWeight: 700,
        }}
      >
        Why to exhibit
      </Typography>
      <Box marginTop={4}>
        <Grid container spacing={4}>
          {[{
            title: 'Participants',
            subtitle: 'Unique and the first platform in Milan that brings together leading rising tech companies coming from all over the world.',
          }, {
            title: 'Opportunities',
            subtitle: 'Opportunity to develop new business contacts, to find investors and partners, and create long term collaborations.',
          }, {
            title: 'Networking',
            subtitle: 'Meet other leading local and international companies. Network, exchange with ideas and develop new partnerships.',
          }, {
            title: 'Brand Awareness',
            subtitle: 'Promote your company\'s services and technological products to the vertical target, encouraging their use.',
          }, {
            title: 'Large Audience',
            subtitle: 'Possibility to introduce your services and solutions to potential final clients and end-users enlarging your B2C market.',
          }, {
            title: 'Recruiting',
            subtitle: 'Recruiting opportunity for companies who are in search of specialized IT professionals.',
          }].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Typography variant="h6" gutterBottom>
                <strong>
                  {item.title}
                </strong>
              </Typography>
              <Typography>
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
          <Grid item container xs={12} justifyContent={'center'}>
            <Button size={'large'} component={'a'} href={'#'} variant={'contained'}>
              Register to exhibit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyToExhibit;
