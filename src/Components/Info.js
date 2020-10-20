import React from 'react';

const Informacion = ({info}) => {

    if(Object.keys(info).length === 0) return null; 

    const { strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart } = info;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Del Artista
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt="Logo Artista"/>
                <p className="card-text">Genero : {strGenre}</p>
                <h2 className='card-text'>Biografía</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="social-web-container">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer" className="social-web-icon-size">
                        <img alt="Facebook Logo" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"/>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer" className="social-web-icon-size">
                    <img alt="Twitter Logo" src="https://assets.stickpng.com/images/58e9196deb97430e819064f6.png"/>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer" className="social-web-icon-size">
                    <img alt="Play Logo" src="https://images.vexels.com/media/users/3/128600/isolated/preview/f36e73d610c0bafa888a92bd1f593fb8-red-play-line-icon-svg-by-vexels.png"/>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Informacion;