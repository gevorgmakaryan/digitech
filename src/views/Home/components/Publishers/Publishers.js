import React from 'react';
import Slider from 'react-slick';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  slider: {
    '& *:focus': {
      outline: 'none',
    }
  },
}));

const Publishers = () => {
  const theme = useTheme();
  const classes = useStyles();

  const sliderOpts = {
    className: classes.slider,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box>
      <Box className="swiper-container quote-swiper">
        <Slider {...sliderOpts}>
          {[{
            title: 'Italy may be the next big startup hub in Europe and you should not overlook italy as a startup destination. The European country becoming an unexpected hotbet of innovation. A combination of circumstances have this unheralded market on the rise.',
            avatar: '/assets/logos/inc-logo-black.png',
            name: 'Inc. Business Magazine'
          }, {
            title: 'Think Italy. Think innovation, impact, and integration. Italy transforms itself into a High-Tech hotbet. Today, the country has become a world leader in technology, automation, and manufacturing.',
            avatar: '/assets/logos/mit.png',
            name: 'Massachusetts Institute of Technology'
          }, {
            title: 'Italy leads in scientiffic innovation on earth and beyond. The Italian Agency for new thechnologies, along with a number of italian universities that are constantly ranked the most innovative of European colleges, are working on projects that are boosting Italy\'s startup scene and giving SMEs a competitive advantage.',
            avatar: '/assets/logos/seus.jpeg',
            name: 'South EU Summit'
          }, {
            title: 'Italy is giving itself a digital makeover. Over the past three years, the Italian government has focused its legislative interventions in ICTs and Italy has been the first country in the world to approve a Declaration of Internet Rights through a parliament vote.',
            avatar: '/assets/logos/weforum.svg',
            name: 'The World Economic Forum',
          }].map((slide, i) => (
            <Box className="swiper-slide" key={i}>
              <Box>
                <Box
                  marginBottom={4}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Avatar}
                    src={slide.avatar}
                    height={80}
                    width={80}
                    border={`1px solid ${theme.palette.divider}`}
                    padding={2}
                    marginBottom={2}
                    imgProps={{
                      style: {
                        objectFit: 'contain',
                      }
                    }}
                  />
                  <Typography variant="h5" align="center">
                    <strong>{slide.name}</strong>
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  align={'center'}
                  sx={{
                    fontStyle: 'italic'
                  }}
                >
                  {slide.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Publishers;
