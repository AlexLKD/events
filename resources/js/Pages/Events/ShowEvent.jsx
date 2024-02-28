import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EventDetails from '@/Components/EventDetails'
export default function Show ({ event, auth }) {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center">Event n°{event.id} </h2>}
        >
            <EventDetails
                key = {event.id}
                event = {event}
            />
        </AuthenticatedLayout>
    );
};

