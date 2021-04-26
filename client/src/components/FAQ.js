import React from "react";
import "./FAQ.css";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
function FAQ() {
  const Accordion = withStyles({
    root: {
      margin: "0px",
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": { margin: "0px" },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
        color: "var(--primary)",
      },
    },
    content: {
      "&$expanded": {},
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  const [expanded, setExpanded] = React.useState("panel");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions (FAQs)</h1>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<i className="fas fa-chevron-down"></i>}>
          <h2>
            ex pariatur perferendis accusamus, id dignissimos praesentium!
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            similique dolor error fugiat debitis beatae enim. Sint, iste
            blanditiis nihil vitae eum veritatis officia, vel corporis, error
            ipsa assumenda dolorem?
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<i className="fas fa-chevron-down"></i>}>
          <h2>
            Doloremque voluptatem assumenda, enim, minima quos sed voluptatibus
            aperiam, ipsum similique suscipit odit fugiat sunt?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laboriosam molestias eligendi inventore velit aperiam labore cumque
            sint, corrupti laborum eius architecto id odit mollitia harum vero
            quis quae similique?
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<i className="fas fa-chevron-down"></i>}>
          <h2>Exercitationem nihil temporibus provident quia?</h2>
        </AccordionSummary>
        <AccordionDetails>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit delectus neque nemo iusto voluptatum odio vero aliquam
            aperiam.
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<i className="fas fa-chevron-down"></i>}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            deserunt iste architecto ea odit?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            similique dolor error fugiat debitis beatae enim. Sint, iste
            blanditiis nihil vitae eum veritatis officia, vel corporis, error
            ipsa assumenda dolorem?
          </h3>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
