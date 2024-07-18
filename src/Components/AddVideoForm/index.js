import styles from "./CampoTexto.module.css";

const AddVideoForm = (props) => {

    const NovoVideo = ({ onAddVideo }) => {
  const [titulo, setTitulo] = useState('');
  const [capa, setCapa] = useState('');
  const [category, setCategory] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const newVideo = {
      id: Date.now().toString(), // Gera um ID único
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
        <div>
      <h1>Novo Video</h1>
      <form onSubmit={handleSave}>
        <div>
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
        <div>
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
        <div>
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
        <div>
          <label>
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </label>
        </div>
        <div>
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
Componente EditarVideo
Crie o formulário para editar um vídeo.

jsx
Copiar código
import React, { useState, useEffect } from 'react';

const EditarVideo = ({ video, onEditVideo }) => {
  const [titulo, setTitulo] = useState('');
  const [capa, setCapa] = useState('');
  const [category, setCategory] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (video) {
      setTitulo(video.titulo);
      setCapa(video.capa);
      setCategory(video.category || '');
      setDescricao(video.descricao || '');
    }
  }, [video]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedVideo = {
      ...video,
      titulo,
      capa,
      category,
      descricao,
    };
    onEditVideo(updatedVideo);
  };

  return (
    <div>
      <h1>Editar Card</h1>
      <form onSubmit={handleSave}>
        <div>
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
        <div>
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
        <div>
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
        <div>
          <label>
            Descrição:
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </label>
        </div>
        <div>
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

 
export default AddVideoForm