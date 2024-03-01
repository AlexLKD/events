<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;
use App\Models\Movie;
use App\Models\Theater;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('movie')->with('theater')->with('city')->get();
        return Inertia::render('Events/Index', ['events' => $events]);
    }
    
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $theaters = Theater::all();
        $movies = Movie::all();
        return inertia('Dashboard', compact('theaters', 'movies'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        // Valider les données du formulaire
        $validatedData = $request->validate([
            'available_seats' => 'required|numeric',
            'screened_at' => 'required|date',
            'theater_id' => 'required|exists:theaters,id',
            'movie_id' => 'required|exists:movies,id',
        ]);
    
        Event::create($validatedData);

    
        return redirect()->route('dashboard')->with('success', 'Event created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($event)
    {
        $event = Event::with('movie')->findOrFail($event);
        return Inertia::render('Events/ShowEvent', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }
}
