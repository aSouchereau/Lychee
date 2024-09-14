<?php

namespace App\Http\Resources\Sharing;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class ListedAlbumsResource extends Data
{
	public string $id;
	public string $title;

	/**
	 * @param object{id:string,title:string} $albumListed
	 */
	public function __construct(object $albumListed)
	{
		$this->id = $albumListed->id;
		$this->title = $albumListed->title;
	}

	/**
	 * @param object{id:string,title:string} $albumListed
	 *
	 * @return ListedAlbumsResource
	 */
	public static function fromModel(object $albumListed): ListedAlbumsResource
	{
		return new ListedAlbumsResource($albumListed);
	}
}
