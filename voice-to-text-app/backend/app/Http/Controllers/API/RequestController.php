<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Request;

class RequestController extends Controller
{
    
    public function store(HttpRequest $request)
    {
        $user = Auth::user();
        $text = $request->input('text');

        $requestModel = $user->requests()->create(['text' => $text]);

        return response()->json($requestModel, 201);
    }

    public function index()
    {
        $user = Auth::user();
        $requests = $user->requests()->latest()->get();

        return response()->json($requests);
    }
}