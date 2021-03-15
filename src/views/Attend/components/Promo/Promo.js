import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Promo = () => {
  return (
    <Box>
      <Box className="swiper-container quote-swiper">
        <Grid container spacing={4}>
          {[{
            title: '€1.5 million funds',
            description: 'Invitalia - the national agency tasked with attracting foreign investment - offers interest-free loans to innovative startups through its Smart&Start Italy program, which funds projects costing up to €1.5 million.',
          }, {
            title: '> 9.600 startups',
            description: 'From 2017 to 2018, the number of startups in Italy rose over 20 percent, from 7,866 to 9,647.',
          }, {
            title: '50,000 people',
            description: 'A 2018 report showed Italian startups employed more than 50,000 people, up a third compared to the year before, and earned just under €1 billion in total revenue.',
          }, {
            title: '€522 million raised',
            description: ' Startup Italia reports that in 2018, Italian startups raised €522 million, up from just €140 million in 2017.',
          }].map((slide, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                {slide.title}
              </Typography>
              <Typography>
                {slide.description}
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

export default Promo;
