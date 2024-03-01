import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard({ auth, movies, theaters }) {

    const { data, setData, post, processing, errors } = useForm({
        available_seats: '',
        screened_at: '',
        theater_id: theaters[0].id,
        movie_id: movies[0].id
      })
      
      function submit(e) {
        e.preventDefault()
        post(route('events.store'))
      }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center">Add Events</h2>}
        >
            <Head title="Dashboard" />
            <h2>Create Event</h2>
            <form onSubmit={submit}>
                <div>
                    <label>Available Seats:</label>
                    <input type="text" value={data.available_seats} onChange={e => setData('available_seats', e.target.value)}/>
                </div>
                <div>
                    <label>Screened At:</label>
                    <input type="date" value={data.screened_at} onChange={e => setData('screened_at', e.target.value)}/>
                </div>
                <div>
                    <label>Theater:</label>
                    <select value={data.theater_id} onChange={e => setData('theater_id', e.target.value)}>
                        {theaters.map((theater) => (
                            <option key={theater.id} value={theater.id}>{theater.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Movie:</label>
                    <select value={data.movie_id} onChange={e => setData('movie_id', e.target.value)}>
                        {movies.map((movie) => (
                            <option key={movie.id} value={movie.id}>{movie.title}</option>
                        ))}
                    </select>
                </div>
                <button type="s ubmit">Create Event</button>
            </form>


                <div>
                    <Link href={route('movies.create')} className="btn btn-primary">Add Movie</Link>
                </div>
        </AuthenticatedLayout>
    );
}