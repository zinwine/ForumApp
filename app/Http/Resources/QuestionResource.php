<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'replies' => ReplyResource::collection($this->replies),
            'replie_count' => $this->replies->count(),
            'slug' => $this->slug,
            'path' => $this->path,
            'body' => $this->body,
            'crated_at' => $this->created_at->diffForHumans(),
            'user_name' => $this->user->name,
            'user_id' => $this->user->id,
        ];
    }
}
