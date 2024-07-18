import React, { useState } from 'react';
import styles from "./formulaio.module.css";


const Formulario = ({onAddVideo}) => {

const [title,setTitle] = useState('')
const [category,setCategory] = useState('')
const [imagemLink,setImagemLink] = useState('')
const [description, setDescription] = useState('')


const handleSave = (evento) => {
  evento.preventDefault()
  const newVideo = { 
    title,
    category,
    imagemLink,
    description,
  };
  onAddVideo(newVideo);
  handleClear();
};

const handleClear = () => { 
  setTitle('')
  setCategory('')
  setImagemLink('')
  setDescription('')
}; 

return (
    <section className={styles.formulario}>
      <form onSubmit={handleSave}>
        <h2>Preencha os dados</h2>
    
    <div className={styles.campoTexto}>
        <label>
          Título:
          <input
            placeholder='digite seu titulo'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
      </label>
      </div>
      <div className={styles.campoTexto}>
        <label>
          Link da Imagem:
          <input
            placeholder='link da imagem'
            type="text"
            value={imagemLink}
            onChange={(e) => setImagemLink(e.target.value)}
            required
          />
        </label>
      </div>
    <div className={styles.campoTexto}>
        <label>
          Categoria:
          <input
            placeholder='digite sua categoria'
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
      </div>
    <div className={styles.campoTexto}>
        <label>
          Descrição:
          <textarea
            placeholder='descrição do video'
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

export default Formulario;
