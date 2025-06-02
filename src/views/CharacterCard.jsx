import React from "react";

const CharacterCard = ({ character }) => {
  // Compatibilidad con datos mal nombrados (ej. "nombre" vs "name")
  const name = character.name || character.nombre;
  const status = character.status || character.estado;
  const species = character.species || character.especie;
  const gender = character.gender || character.género;
  const origin = character.origin?.name || character.origen?.nombre;
  const location = character.location?.name || character.ubicación?.nombre;
  const image = character.image || character.imagen;
  const episodes = character.episode || character.episodio;
  const created = character.created || character.creado;

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.info}>
        <h2>{name}</h2>
        <p><strong>Estado:</strong> {status}</p>
        <p><strong>Especie:</strong> {species}</p>
        <p><strong>Género:</strong> {gender}</p>
        <p><strong>Origen:</strong> {origin}</p>
        <p><strong>Ubicación:</strong> {location}</p>
        <p><strong>Creado el:</strong> {new Date(created).toLocaleDateString()}</p>
        <p><strong># de Episodios:</strong> {episodes.length}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    margin: "10px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  info: {
    padding: "15px",
  },
};

export default CharacterCard;

