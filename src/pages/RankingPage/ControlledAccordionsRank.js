import { useState } from 'react';
import numeral from 'numeral'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import ItemCard from '@COM/ItemCard';

export default function ControlledAccordionsRank({ currentPost }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {currentPost.map(item => {
        const { id, name, score, rank } = item
        return (
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
              <p style={{ width: '30%', flexShrink: 0, color: "text.secondary", textAlign: "center" }}>
                {rank}
              </p>
              <p style={{ width: '40%', color: 'darkred', textAlign: "center" }}>
                {name}
              </p>
              <p style={{ width: '30%', color: 'text.secondary', textAlign: "center", fontSize: "14px" }}>
                <Rating name="read-only" value={score} precision={0.5} size="small" readOnly />
                <br />{numeral(score).format('0.00')} / 5 星
              </p>
            </AccordionSummary>
            <AccordionDetails className='p-0'>
              <ItemCard key={id} {...item} />
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
}
