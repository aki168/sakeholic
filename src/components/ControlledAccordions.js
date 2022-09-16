import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCard from './ItemCard';

export default function ControlledAccordions({currentPost}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {currentPost.map ( item => (
      <Accordion expanded={expanded === `${item.id}` } onChange={handleChange(`${item.id}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${item.id}bh-content`}
          id={`${item.id}bh-header`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color:"darkred" }}>
            {item.name}
          </Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary', fontSize:'12px' }}>
            {item.maker}
          </Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>
            {item.area}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ItemCard key={item.id} {...item} />
        </AccordionDetails>
      </Accordion>
      )) }
    </div>
  );
}
