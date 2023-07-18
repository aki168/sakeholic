import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemCard from "./ItemCard";

export default function ControlledAccordions({ currentPost }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {currentPost.map((item) => {
        const { id, brewery_name: maker, name, area, f1, f2, f3, f4, f5, f6 } = item;
        const chart = [f1, f2, f3, f4, f5, f6];
        return (
          <Accordion
            key={item.id}
            style={{ boxShadow: "none" }}
            expanded={expanded === `${id}`}
            onChange={handleChange(`${id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${id}bh-content`}
              id={`${id}bh-header`}
            >
              <p
                style={{
                  width: "30%",
                  flexShrink: 0,
                  color: "darked",
                  textAlign: "center",
                }}
              >
                {name}
              </p>
              <p
                style={{
                  width: "40%",
                  color: "text.secondary",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {maker ? maker : <small className="text-info">暫無資料</small>}
              </p>
              <p
                style={{
                  width: "30%",
                  color: "text.secondary",
                  textAlign: "center",
                }}
              >
                {area}
              </p>
            </AccordionSummary>
            <AccordionDetails className="p-0">
              {expanded === String(id) && (
                <ItemCard key={id} chart={chart} {...item} />
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
