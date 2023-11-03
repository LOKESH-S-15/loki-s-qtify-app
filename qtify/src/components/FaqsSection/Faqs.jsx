import React from 'react';
import styles from "./Faqs.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const Faqs = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(isExpanded)
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.faqsWrapper}>
     <h1 className={styles.faqsText}>FAQs</h1>
     <div>
     <div className={styles.accordionCon}>
     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1bh-content"
         id="panel1bh-header"
       >
         
         <Typography >Is QTify free to use?</Typography>
       </AccordionSummary>
       <AccordionDetails style={{backgroundColor:"Black"}}>
         <Typography>
         Yes! It is 100% free, and has 0% ads!
         </Typography>
       </AccordionDetails>
     </Accordion>
     <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2bh-content"
         id="panel2bh-header"
       >
         <Typography >
         Can I download and listen to songs offline?
         </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
         Sorry, unfortunately we don't provide the service to download any songs..
         </Typography>
       </AccordionDetails>
     </Accordion>
     
   </div>
     </div>
      
    </div>
  )
}

export default Faqs
