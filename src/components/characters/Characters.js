import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './Characters.css'

const URL = "https://rickandmortyapi.com/api/character/";

const Characters = ({ search }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = async (page = 1, search = "") => {
    setLoading(true);
    try {
      const response = await axios.get(`${URL}?page=${page}&name=${search}`);
      const data = response.data;
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickOpen = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCharacters(page, search);
  }, [page, search]);

  return (
    <>
      <h1>Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className="characters-list">
            {characters.map(character => (
              <li key={character.id}>
                <img 
                  src={character.image} 
                  alt={character.name} 
                  onClick={() => handleClickOpen(character)} 
                />
                <p>{character.name}</p>
              </li>
            ))}
          </ul>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            className="pagination"
            color="primary"
          />
          <Dialog open={open} onClose={handleClose}>
  <DialogTitle>{selectedCharacter?.name}</DialogTitle>
  <DialogContent>
    <img src={selectedCharacter?.image} alt={selectedCharacter?.name} className="dialog-image"/>
    <p className="dialog-text">Status: {selectedCharacter?.status}</p>
    <p className="dialog-text">Species: {selectedCharacter?.species}</p>
    <p className="dialog-text">Type: {selectedCharacter?.type}</p>
    <p className="dialog-text">Gender: {selectedCharacter?.gender}</p>
    <p className="dialog-text">Origin: {selectedCharacter?.origin?.name}</p>
  </DialogContent>
</Dialog>
        </>
      )}
    </>
  );
}

export default Characters;
