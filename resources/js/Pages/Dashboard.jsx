import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth, cinemas, movies }) {

        const [formData, setFormData] = useState({
            availableSeats: '',
            screenedAt: '',
            theaterId: '',
            movieId: ''
        });
    
        const handleSubmit = (e) => {
            e.preventDefault();
            Inertia.post('/events', formData);
        };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center">Add Events</h2>}
        >
        </AuthenticatedLayout>
    );
}
