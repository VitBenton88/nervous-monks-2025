
import React, { useMemo } from 'react';

type URLString = string & { __brand: "URLString" };
interface EventItem {
    date: Date;
    href: URLString;
    label: string;
}

const toURLString = (value: string): URLString => {
    // Validate that the string is a valid URL
    try {
        new URL(value); // This will throw if the URL is invalid
        return value as URLString; // Type assertion after validation
    } catch (error) {
        throw new Error(`Invalid URL: ${value}`);
    }
}

const eventData: EventItem[] = [
    // {
    //     date: new Date('1969-08-17'),
    //     href: toURLString('https://www.example.com'),
    //     label: 'Woodstock',
    // },
    {
        date: new Date('2025-03-23'),
        href: toURLString('https://www.eventbrite.com/e/sundaze-music-arts-fest-tickets-1225604208179'),
        label: 'Sundaze Music & Arts Festival',
    },
];

const Events: React.FC = (): React.ReactNode => {
    const getDateForPrint = (date: Date): string => {
        const month = date.getMonth() + 1;
        const day = date.getDate() + 1;
        const year = date.getFullYear().toString().slice(-2);
        
        return `${month}.${day}.${year}`;
    };

    // Filter out past events
    const futureEvents = useMemo(() : EventItem[] => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        return eventData.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(24, 59, 59, 999);

            // Keep the event if its end-of-day is now or in the future
            return eventDate >= now;
        });
    }, []);

    if (!futureEvents.length) {
        return (
            <p className='noEvents'>Sorry, nothing is currently booked. Check back later.</p>
        );
    }

    return (
        <ul>
            {eventData.length ?
                eventData.map(({ date, label, href }, index) => (
                    <li key={index}>
                        <h3 className='cta'>
                            <time dateTime={date.toISOString().slice(0, 10)}>{getDateForPrint(date)}</time> - <a href={href} target='_blank' rel='noreferrer'>{label}</a>
                        </h3>
                    </li>
                )) : null}
        </ul>
    )
};

export default Events;