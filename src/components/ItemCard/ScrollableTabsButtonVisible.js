import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Badge } from 'react-bootstrap';

export default function ScrollableTabsButtonVisible({currentData}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { sm: '100%', lg: '90%' },
      }}
    >
      <Badge className='mt-2 fw-light' bg="info"># 風味標籤 tags </Badge>
      {currentData[0] && (
      <Tabs
        textColor="inherit"
        indicatorColor="secondary"
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
          currentData.map( oneTag => (
            <Tab key={oneTag.id} label={`# ${oneTag.tag}`}/>
          ))
        }
      </Tabs>) }
    </Box>
  );
}
