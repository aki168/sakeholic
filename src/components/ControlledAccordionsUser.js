import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCard from './ItemCard';
import { Card } from 'react-bootstrap'

export default function ControlledAccordionsUser({ sakeCardDefault }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //
  let likeItemFilter = sakeCardDefault.filter(item => item.isLike===true);

  return (
    <Card style={{maxWidth:"900px"}}>
      {likeItemFilter.map(item => (
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
            <p style={{ width: '30%', flexShrink: 0, color: "darkred", textAlign:"center" }}>
              {item.name}
            </p>
            <p style={{ width: '40%', color: 'text.secondary', fontSize: '14px', textAlign:"center" }}>
              {item.maker? item.maker : <small className='text-info'>暫無酒廠資訊</small>}
            </p>
            {/* <p style={{ width: '30%', color: 'text.secondary', textAlign:"center" }}>
              {item.area}
            </p> */}
          </AccordionSummary>
          <AccordionDetails className='p-0'>
            <ItemCard key={item.id} {...item} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Card>
  );
}