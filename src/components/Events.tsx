
import React from 'react';

interface EventItem {
    date: Date;
    href: string;
    label: string;
}

const eventData: EventItem[] = [
    {
        date: new Date("2024-03-23"),
        href: "https://www.eventbrite.com/e/sundaze-music-arts-fest-tickets-1225604208179",
        label: "Sundaze Music & Arts Festival",
    },
];


const Events: React.FC = (): React.ReactNode => {
    const getDateForPrint = (date: Date): string =>
        date.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "numeric",
            day: "2-digit",
        });

    return (
        <ul>
            {eventData.map(({ date, label, href }, index) => (
                <li key={index}>
                    <h3 className="cta">
                        <time dateTime={date.toISOString().slice(0, 10)}>{getDateForPrint(date)}</time> - <a href={href} target="_blank" rel="noreferrer">{label}</a>
                    </h3>
                </li>
            ))}
        </ul>
    )
};

export default Events;