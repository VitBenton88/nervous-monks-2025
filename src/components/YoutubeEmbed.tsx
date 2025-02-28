import React from 'react';

interface YoutubeEmbedProps {
    embedId?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId = '9XjjFLAchb0' }): React.ReactNode => {
    return (
        <iframe
            width='560'
            height='315' 
            src={`https://www.youtube.com/embed/${embedId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' 
            referrerPolicy='strict-origin-when-cross-origin' 
            allowFullScreen
        >
        </iframe>
    )
};

export default YoutubeEmbed;