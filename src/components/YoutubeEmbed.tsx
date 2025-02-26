import React from 'react';

interface YoutubeEmbedProps {
    embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = (embedId): React.ReactNode => {
    return ( 
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )
};

export default YoutubeEmbed;