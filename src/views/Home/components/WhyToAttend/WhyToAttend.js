import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const WhyToAttend = () => {
  return (
    <Box>
      <Typography
        variant={'h3'}
        component={'h2'}
        align={'center'}
        sx={{
          fontWeight: 900,
          textTransform: 'uppercase',
        }}
      >
        Why to attend
      </Typography>
      <Box marginTop={{ xs: 4, md: 6 }}>
        <Grid container spacing={4}>
          {[{
            title: 'Investment Opportunities',
            subtitle: 'Find the leading rising local & international companies, exchange the business development strategies and discover new investment opportunities.',
          }, {
            title: 'Businness Partnerships',
            subtitle: 'Meet c-level companies and startups. Network, build potentially new business partners, develop new strategies and construct strong relationships.',
          }, {
            title: 'Explore',
            subtitle: 'A perfect time for journalists, tech influencers, independent editorial board members or startup enthusiasts to meet new technologies and ideas poised to change the way we live.',
          }, {
            title: 'Market Research',
            subtitle: 'Propel your career advancement, gain personal fulfillment and open up new opportunities & challenges. A can\'t miss event for you to size up the competition.',
          }].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Typography
                variant="h5"
                gutterBottom
                fontWeight={900}
                sx={{
                  textTransform: 'uppercase',
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="h6" fontWeight={400} color={'textSecondary'}>
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
          <Grid item container xs={12} justifyContent={'center'}>
            <Button size={'large'} component={'a'} href={'https://forms.gle/dR3yTYJ8MepyTjwX8'} target={'_blank'} variant={'contained'}>
              Register to attend
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyToAttend;
