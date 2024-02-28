import React, { Fragment } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index ({ events, auth }) {

    return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Events</h2>}
            >
            <div>
                <h1>Events with more than 150 available seats</h1>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>{event.id}
                                , {event.available_seats}
                        </li>
                    ))}
                </ul>
            </div>
            
            </AuthenticatedLayout>
    );
};

