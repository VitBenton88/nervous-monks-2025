import React, { useMemo } from 'react';

const Marquee: React.FC = (): React.ReactNode => {
    ;
    const marqueeMessages = useMemo((): string[] => [
        'The truth is stranger than fiction',
        '?',
        'Only the curious will discover',
        'Welcome to the official homepage of the band Nervous Monks!!1!',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        'If a man comes to the door of poetry untouched by the madness of the Muses, believing that technique alone will make him a good poet, he and his sane compositions never reach perfection, but are utterly eclipsed by the performances of the inspired madman.'
    ], []);
    const randomlySelectedMessage = useMemo((): string => marqueeMessages[Math.floor(Math.random() * marqueeMessages.length)], [marqueeMessages]);

    return (
        <div id='marquee'>
            <span>{randomlySelectedMessage}</span>
        </div>
    )
};

export default Marquee;