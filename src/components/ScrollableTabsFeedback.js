import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FeedbackCard from './FeedbackCard';

export default function ScrollableTabsFeedback({feedbackData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { sm: '100%', lg: '100%' },
      }}
    >
      <Tabs
        textColor="inherit"
        indicatorColor="none"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
{
  feedbackData.map((item, i) => (
    <FeedbackCard key={i} {...item} />
  ))
}
      </Tabs>
    </Box>
  );
}
