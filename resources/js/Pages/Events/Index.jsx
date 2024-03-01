import { InertiaLink } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Card from '@/Components/Card';

export default function Index ({ events, auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center">All Events</h2>}
        >
            <Head title="All Events" />
            <div>
                <div className="grid grid-cols-3 gap-4">
                    {events.data.map((event) => (
                        <Card
                            key={event.id}
                            event={event}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                {events.links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    className={`px-4 py-2 mx-1 rounded-lg ${
                link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
        >
            {link.label}
        </Link>
    ))}
</div>
        </AuthenticatedLayout>
    );
}
