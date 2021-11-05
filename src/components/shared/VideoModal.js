import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  mobiWid: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <ReactPlayer url="https://player.vimeo.com/video/590029748?h=e847405db6" />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        className={classes.mobiWid}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem auto",
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
