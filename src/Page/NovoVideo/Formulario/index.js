import React, { useState } from 'react';
import styles from "./formulaio.module.css";

const AddVideoForm = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const newVideo = {
      title,
      imageLink,
      category,
      description,
    };
    onAddVideo(newVideo);
    handleClear();
  };

  const handleClear = () => {
    setTitle('');
    setImageLink('');
    setCategory('');
    setDescription('');
  };

  return (
    <section className={styles.categoria}>
    <form onSubmit={handleSave}>
      <div className={styles.formGroup}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Link da Imagem:
          <input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            required
          />
        </label>
      </div>
      <div >
        <label>
          Categoria:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Descrição:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
      </div>
      <div className={styles.botoes}>
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleClear}>Limpar</button>
      </div>
    </form>
    </section>
  );
};

export default AddVideoForm;
