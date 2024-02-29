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
            <Head title="Dashboard" />
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formData.availableSeats} onChange={(e) => setFormData({ ...formData, availableSeats: e.target.value })} />
                <input type="date" value={formData.screenedAt} onChange={(e) => setFormData({ ...formData, screenedAt: e.target.value })} />
                <select value={formData.theaterId} onChange={(e) => setFormData({ ...formData, theaterId: e.target.value })}>
                    {/* Options for theaters */}
                </select>
                <select value={formData.movieId} onChange={(e) => setFormData({ ...formData, movieId: e.target.value })}>
                    {/* Options for movies */}
                </select>
                <button type="submit">Create Event</button>
            </form>
                
        </AuthenticatedLayout>
    );
}
