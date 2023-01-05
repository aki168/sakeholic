import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card } from 'react-bootstrap'
import ItemCard from '@COM/ItemCard';

export default function ControlledAccordionsUser({ sakeCardDefault }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  let likeItemFilter = sakeCardDefault.filter(item => item.isLike===true)

  return (
    <Card style={{maxWidth:"900px"}}>
      {likeItemFilter.map(item => {
        const { id, name, maker } = item

      return(
        <Accordion
          key={id}
          style={{ boxShadow: "none" }}
          expanded={expanded === `${id}`}
          onChange={handleChange(`${id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}bh-content`}
            id={`${id}bh-header`}
          >
            <p style={{ width: '30%', flexShrink: 0, color: "darkred", textAlign:"center" }}>
              {name}
            </p>
            <p style={{ width: '40%', color: 'text.secondary', fontSize: '14px', textAlign:"center" }}>
              {maker? maker : <small className='text-info'>暫無酒廠資訊</small>}
            </p>
          </AccordionSummary>
          <AccordionDetails className='p-0'>
            <ItemCard key={id} {...item} />
          </AccordionDetails>
        </Accordion>
      )})}
    </Card>
  );
}
