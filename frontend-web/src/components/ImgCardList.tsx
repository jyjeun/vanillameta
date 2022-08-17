import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CardContent, CardActionArea, Stack } from '@mui/material';

function ImgCardList(props) {
  const srcUrl = '/assets/images/';
  const [selectedValue, setSelectedValue] = useState('init');

  // useEffect(() => {
  //   props.inputValue(selectedValue);
  // }, [selectedValue]);

  const handleClick = event => {
    setSelectedValue(event.currentTarget.value);
    console.log(selectedValue, 'state');
    console.log(event.currentTarget.value, 'event');
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      flexWrap="wrap"
      component="ul"
      sx={{ maxWidth: '100%', listStyle: 'none', m: '16px auto', p: 0, gap: { xs: 2, md: 3 } }}
    >
      {props.data.map(item => (
        <Box component="li" key={item.key} sx={props.large ? { width: { xs: 100, md: 130 }, my: 0 } : { width: 150 }}>
          <Card>
            <CardActionArea
              onClick={handleClick}
              value={item.value}
              sx={{
                boxShadow: selectedValue === item.value ? theme => `0 0 0 3px ${theme.palette.primary.main} inset` : 'none',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: props.large ? { xs: 140, md: 170 } : 200,
                }}
              >
                <Box
                  component="img"
                  src={srcUrl + item.src}
                  sx={{ width: 80, height: 60, objectFit: 'contain', mb: 3, border: 0 }}
                />
                <Typography variant="subtitle2" component="span">
                  {item.value}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: 'center', color: theme => theme.palette.grey.A700 }}>
                  {item.caption}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Stack>
  );
}

export default ImgCardList;