import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
    marginTop: "3.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5rem",
    },
  },
  accordion: {
    background: "#01060C",
    color: "white",
    paddingTop: "0.5rem",
  },
  heading: {
    background: "#2081E2",
    color: "white",
    borderRadius: "0 1rem 0 0",
    fontSize: "0.5rem",
  },
  summary: {
    background: "#0A131A",
    color: "gray",
    marginTop: "0rem",
    padding: "1rem 1.5rem",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.heading}
        >
          <Typography>What is Artifact Keychain ?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Artifact is the worlds first physical keychain accessory that can be
            purchased through a “mint” process. Specifically used for displaying
            NFT’s directly from all of your online NFT galleries.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.heading}
        >
          <Typography>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            The Artifact connects to your wallets via the Artifact Marketplace,
            add into your profile which NFT’s youd like to be displayed easily
            authenticate NFT’s via profile portal and keep your favorite NFT
            projects on rotation
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.heading}
        >
          <Typography> What are the Artifact NFT benefits?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Artifact NFT’s are redeemable for (1) physical Artifact keychain
            accessory The NFT also doubles as your membership pass to the
            Artifact Marketplace where you will have access to your profile to
            connect all your galleries as well as advertising capabilities.
            Artifact NFT holders also will be eligible for future mints for the
            Artifact Technology 2nd collection and beyond
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={classes.heading}
        >
          <Typography>When is the drop how much? </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Minting for presale begins November 5 2021 prices are .045 for
            regular size unit (R type) and .07 for bigger size unit (x type)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className={classes.heading}
        >
          <Typography>When will i get physical keychain? </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Shipping begins March 2022 (any delays to be announced via email and
            social media)
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel6" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className={classes.heading}
        >
          <Typography>Are all the keychains the same?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            The keychains have the same features in two basic sizes i.e large
            3.2 inch and small 2.4 inch. Each keychain is connected to a unique
            NFT which represents the users membership to the Artifact
            Marketplace where you can create a profile, connect all NFT
            galleries, advertise new projects and have access to new Artifact
            drops in the future
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel7" ? (
              <RemoveIcon style={{ color: "white" }} />
            ) : (
              <AddIcon style={{ color: "white" }} />
            )
          }
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          className={classes.heading}
        >
          <Typography>Will there be a secondary market?</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summary}>
          <Typography>
            Yes if the Artifact NFT has not been redeemed holders may trade this
            NFT on the secondary market
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
