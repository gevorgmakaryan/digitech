import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Venue = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
          }}
        >
          The Venue
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="center"
        >
          Palazzo Visconti di Modrone
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="center"
        >
          Strategic location situated in the heart of Milan and the unique example of <i>Rococò Milanese</i>.
        </Typography>
        <Typography align="center">
          <i>Via Cino del Duca n. 8, Milan, Metropolitan City of Milan, Italy</i>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[{
          src: '/assets/backgrounds/2.jpg',
          alt: 'Palazzo Visconti',
        }, {
          src: '/assets/backgrounds/1.jpg',
          alt: 'Palazzo Visconti',
        }, {
          src: '/assets/backgrounds/3.jpg',
          alt: 'Palazzo Visconti',
        }].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'img'}
              src={item.src}
              alt={item.alt}
              width={'100%'}
              height={'100%'}
              borderRadius={1}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Venue;