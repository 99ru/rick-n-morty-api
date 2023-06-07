// CardItem.js
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function CardItem({ character }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <li onClick={handleClickOpen}>
        <img
          className="character-image"
          src={character.image}
          alt={character.name}
        />
        <p className="character-name">{character.name}</p>
        <p className="character-status">
          <span
            className={`status-dot ${character.status.toLowerCase()}`}
          ></span>
          {character.status}
        </p>
      </li>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{character.name}</DialogTitle>
        <DialogContent>
          <img
            src={character.image}
            alt={character.name}
            className="dialog-image"
          />
          <p className="dialog-text">Status: {character.status}</p>
          <p className="dialog-text">Species: {character.species}</p>
          <p className="dialog-text">Type: {character.type}</p>
          <p className="dialog-text">Gender: {character.gender}</p>
          <p className="dialog-text">Origin: {character.origin?.name}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CardItem;
