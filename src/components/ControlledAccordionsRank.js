import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCard from './ItemCard';
import Rating from '@mui/material/Rating';
import numeral from 'numeral'

export default function ControlledAccordionsRank({ currentPost }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {currentPost.map(item => (
        <Accordion
          key={item.id}
          style={{ boxShadow: "none" }}
          expanded={expanded === `${item.id}`}
          onChange={handleChange(`${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}bh-content`}
            id={`${item.id}bh-header`}
          >
            <p style={{ width: '30%', flexShrink: 0, color: "text.secondary", textAlign:"center"}}>
              {item.rank}
            </p>
            <p style={{ width: '40%', color: 'darkred', textAlign:"center"  }}>
              {item.name}
            </p>
            <p style={{ width: '30%', color: 'text.secondary', textAlign:"center", fontSize:"14px"  }}>
              <Rating name="read-only" value={item.score} precision={0.5} readOnly />
              <br/>{numeral(item.score).format('0.00000')} 星 / 5 星
            </p>
          </AccordionSummary>
          <AccordionDetails className='p-0'>
            <ItemCard key={item.id} {...item} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
