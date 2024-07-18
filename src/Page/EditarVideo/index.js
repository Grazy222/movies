import React, {useState, useEffect} from "react";
import styles from "./EditarVideo.module.css";

const EditarVideo = ({ video, onEditVideo }) => {

    const [titulo, setTitulo] = useState('');
    const [capa, setCapa] = useState('');
    const [category, setCategory] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if(video) {
            setTitulo(video.titulo);
            setCapa(video.capa);
            setCategory(video.category || '');
            setDescricao(video.descricao || '');
        }
    }, [video]);

     const handleSave = (e) => {
        e.prventDefault();
        const upadateVideo = {
            ...video,
            titulo,
            capa,
            category,
            descricao,
        };
        onEditVideo(upadateVideo);
     };

    return(
        <div className={styles.formContainer}>
            <h1>Editar Card</h1>
            <form className={styles.form} onSubmit={handleSave}>
            <div className={styles.inputGroup}>
                <label>
                    Título:
                    <input  type="text"
                    value={titulo}
                    onChange={ (e) => setTitulo(e.target.value)} 
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
        </div >
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
export default EditarVideo;