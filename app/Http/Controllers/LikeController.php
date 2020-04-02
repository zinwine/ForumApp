<?php

namespace App\Http\Controllers;

use App\Model\Reply;

class LikeController extends Controller
{
    /**
     * Create a new AuthController instance.
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function likeIt(Reply $reply)
    {
        $reply->like()->create([
            // 'user_id' => 1,
            'user_id' => auth()->id(),
        ]);
    }

    public function unLikeIt(Reply $reply)
    {
        // $reply->like()->where('user_id', 1)->first()->delete();
        $reply->like()->where('user_id', auth()->id())->first()->delete();
    }
}
