
import React, { useMemo } from 'react';

interface EventItem {
    date: Date;
    href: string;
    label: string;
}

const eventData: EventItem[] = [
    {
        date: new Date("2025-03-23"),
        href: "https://www.eventbrite.com/e/sundaze-music-arts-fest-tickets-1225604208179",
        label: "Sundaze Music & Arts Festival",
    },
];

const Events: React.FC = (): React.ReactNode => {
    const getDateForPrint = (date: Date): string => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear().toString().slice(-2);
        
        return `${month}.${day}.${year}`;
    };

    // Filter out past events
    const futureEvents = useMemo(() => {
        const now = new Date();

        return eventData.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(23, 59, 59, 999); // end of the day (23:59:59.999)

            // Keep the event if its end-of-day is now or in the future
            return eventDate >= now;
        });
    }, []);

    if (!futureEvents.length) {
        return (
            <p>Sorry, nothing is currently booked. Check back later.</p>
        );
    }

    return (
        <ul>
            {eventData.length ?
                eventData.map(({ date, label, href }, index) => (
                    <li key={index}>
                        <h3 className="cta">
                            <time dateTime={date.toISOString().slice(0, 10)}>{getDateForPrint(date)}</time> - <a href={href} target="_blank" rel="noreferrer">{label}</a>
                        </h3>
                    </li>
                )) : null}
        </ul>
    )
};

export default Events;