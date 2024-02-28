import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react';
import { Head, Link } from '@inertiajs/react';

export default function Card({event}) {
  return (
            <div className="bg-black p-4 text-white">
                <h2 className="text-xl font-semibold">{event.movie.title}</h2>
                <p>{event.movie.description}</p>
                <p>Available Seats: {event.available_seats}</p>
                <Link href={route('events.show', event)} className="text-blue-400 hover:text-blue-600">View Event</Link>
            </div>
  )
}
