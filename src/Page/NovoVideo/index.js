import React, { useState } from 'react';
import styles from "./novoVideo.module.css";
// import AddVideoForm from '../../Components/Formulario/index';

const NovoVideo = ({ onAddVideo }) => {
  const [titulo, setTitulo] = useState('');
  const [capa, setCapa] = useState('');
  const [category, setCategory] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const newVideo = {
      id: Date.now().toString(),
      titulo,
      capa,
      category,
      descricao,
    };

    onAddVideo(newVideo);
    setTitulo('');
    setCapa('');
    setCategory('');
    setDescricao('');
  };

  return (
    <div className={styles.formContainer}>
      <h1>Novo Video</h1>
      <form className={styles.form} onSubmit={handleSave}>
        <div className={styles.inputGroup}>
          <label>
            Título:
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label>
            Categoria:
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Selecione</option>
              <option value="Episódio1">Episódio1</option>
              <option value="Episódio2">Episódio2</option>
              <option value="Episódio3">Episódio3</option>
              <option value="Episódio4">Episódio4</option>
            </select>
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label>
            Link da Imagem:
            <input
              type="text"
              value={capa}
              onChange={(e) => setCapa(e.target.value)}
              required
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label>
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </label>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => {
            setTitulo('');
            setCapa('');
            setCategory('');
            setDescricao('');
          }}>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default NovoVideo;


