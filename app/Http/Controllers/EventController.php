<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $events = Event::with('movie')->where('available_seats', '>', 150)->get();
        $events = Event::with('movie')->get();
        return Inertia::render('Events/Index', ['events' => $events]);
    }
    
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        $validatedData = $request->validate([
            'availableSeats' => 'required|integer',
            'screenedAt' => 'required|date',
            'theaterId' => 'required|exists:theaters,id',
            'movieId' => 'required|exists:movies,id'
        ]);

        // Créer l'événement avec les données validées
        Event::create($validatedData);

        // Redirection après la création
        return redirect()->route('dashboard')->with('success', 'Event created successfully');
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
