import React from 'react';

export default function Details({ event }) {
    return (
        <div className="max-w-xl mx-auto p-4">
            <img src={event.movie.image} alt={event.movie.title} className="w-full h-auto rounded-lg mb-4" />
            <p className="text-lg font-semibold mb-2">{event.movie.title}</p>
            <p className="text-gray-600 mb-4">{event.movie.description}</p>
            <div className="flex flex-col mb-4">
                <p className="text-sm text-gray-500">Date: {event.screened_at}</p>
                <p className="text-sm text-gray-500">Time: {event.time}</p>
                <p className="text-sm text-gray-500">Available Seats: {event.available_seats}</p>
            </div>
        </div>
    );
}
