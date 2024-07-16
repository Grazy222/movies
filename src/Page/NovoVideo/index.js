import React from 'react';
import AddVideoForm from '../../Page/NovoVideo/Formulario/index';

const NovoVideo = ({ onAddVideo }) => {
  return (
    <div>
      <h1>Adicionar Novo Vídeo</h1>
      <AddVideoForm onAddVideo={onAddVideo} />
    </div>
  );
};

export default NovoVideo;
