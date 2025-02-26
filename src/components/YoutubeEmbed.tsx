import React from 'react';

interface YoutubeEmbedProps {
    embedId?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId = "9XjjFLAchb0" }): React.ReactNode => {
    return (
        <iframe
            width="560"
            height="315" 
            src={`https://www.youtube.com/embed/${embedId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        >
        </iframe>
    )
};

export default YoutubeEmbed;