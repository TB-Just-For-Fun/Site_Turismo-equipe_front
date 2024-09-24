import React from "react";
import '../pages/css/galer.css'; // Importando o CSS externo


function Galery() {
    return (
        <>
            {/* Seção de Fotos e Vídeos da Província da huila */}
            <div className="secao-provincia">
                <h2>Galeria - Província da Huila</h2>

                <div className="conteudo-provincia">
                    <div className="foto-container">
                        <img src="/huila/Cascata-da-Huila-_-IMG_1710-web.jpg" alt="" className="imagem-galeria" />
                        <p className="descricao-galeria">Cascata da Huila.</p>
                    </div>

                    <div className="video-container">
                        <video controls className="video-galeria">
                            <source src="/huila/cascata.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
            </div>

            {/* Seção de Fotos e Vídeos da Província de malanje */}
            <div className="secao-provincia">
                <h2>Galeria - Província dee Malanj</h2>

                <div className="conteudo-provincia">
                    <div className="foto-container">
                        <img src="provincia2_foto.jpg" alt="Descrição da Foto da Província 2" className="imagem-galeria" />
                        <p className="descricao-galeria">Esta é a descrição da Foto da Província de malanje.</p>
                    </div>

                    <div className="video-container">
                        <video controls className="video-galeria">
                            <source src="video_provincia2.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
            </div>


             {/* Seção de Fotos e Vídeos da Província do cunene */}
             <div className="secao-provincia">
                <h2>Galeria - Província do cunene</h2>

                <div className="conteudo-provincia">
                    <div className="foto-container">
                        <img src="provincia2_foto.jpg" alt="Descrição da Foto da Província 2" className="imagem-galeria" />
                        <p className="descricao-galeria">Esta é a descrição da Foto da Província do cunene.</p>
                    </div>

                    <div className="video-container">
                        <video controls className="video-galeria">
                            <source src="video_provincia 3.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Galery;

