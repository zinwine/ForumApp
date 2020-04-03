<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Model\Question;
use Illuminate\Http\Request;
use App\Http\Resources\QuestionResource;
use Symfony\Component\HttpFoundation\Response;

class QuestionController extends Controller
{
    /**
     * Create a new AuthController instance.
     */
    public function __construct()
    {
        $this->middleware('JWT', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return QuestionResource::collection(Question::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(QuestionRequest $request)
    {
        $request['slug'] = str_slug($request->title);
        // $request->user_id = auth('us');
        $question = auth()->user()->question()->create($request->all());

        return new QuestionResource($question);
        // Question::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Model\Question $question
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        return new QuestionResource($question);
        // return $question;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Model\Question      $question
     *
     * @return \Illuminate\Http\Response
     */
    public function update(QuestionRequest $request, Question $question)
    {
        $question->update($request->all());

        return 'Updateee';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Model\Question $question
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        $question->delete();

        return response('Deleted', 201);
    }
}
