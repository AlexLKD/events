import React, { Fragment } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Card from '@/Components/Card'

export default function Index ({ events, auth }) {
    return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center">All Events</h2>}
            >
            <div>
                <div className="grid grid-cols-3 gap-4">
                    {events.map((event) => (
                        <Card
                        key = {event.id}
                        event = {event}
                        />
                    ))}
                </div>
            </div>
            </AuthenticatedLayout>
    );
};

