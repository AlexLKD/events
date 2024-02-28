import React from 'react'
import { Head } from '@inertiajs/react';


export default function Details({event}) {
    return (
            <div>
                <img src={event.movie.image} alt={event.movie.title} />
                <p>Description: {event.movie.description}</p>
                <p>Date: {event.screened_at}</p>
                <p>Time: {event.time}</p>
                <p>Available Seats: {event.available_seats}</p>
            </div>
    )
  }