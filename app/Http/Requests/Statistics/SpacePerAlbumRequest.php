<?php

namespace App\Http\Requests\Statistics;

use App\Contracts\Http\Requests\HasAlbum;
use App\Contracts\Http\Requests\HasOwnerId;
use App\Contracts\Http\Requests\RequestAttribute;
use App\Contracts\Models\AbstractAlbum;
use App\Http\Requests\BaseApiRequest;
use App\Http\Requests\Traits\HasAlbumTrait;
use App\Http\Requests\Traits\HasOwnerIdTrait;
use App\Models\Album;
use App\Models\Configs;
use App\Policies\AlbumPolicy;
use App\Rules\RandomIDRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class SpacePerAlbumRequest extends BaseApiRequest implements HasAlbum, HasOwnerId
{
	use HasAlbumTrait;
	use HasOwnerIdTrait;

	/**
	 * {@inheritDoc}
	 */
	public function authorize(): bool
	{
		if ($this->album === null) {
			return Gate::check(\SettingsPolicy::CAN_SEE_STATISTICS, [Configs::class]);
		}

		return Gate::check(AlbumPolicy::CAN_ACCESS, [AbstractAlbum::class, $this->album]);
	}

	/**
	 * {@inheritDoc}
	 */
	public function rules(): array
	{
		return [
			RequestAttribute::ALBUM_ID_ATTRIBUTE => ['sometimes', new RandomIDRule(true)],
		];
	}

	/**
	 * {@inheritDoc}
	 */
	protected function processValidatedValues(array $values, array $files): void
	{
		/** @var string|null */
		$albumID = $values[RequestAttribute::PARENT_ID_ATTRIBUTE] ?? null;
		$this->album = $albumID === null ? null : Album::query()->findOrFail($albumID);

		// Filter only to user if user is not admin
		if (Auth::check() && Auth::user()?->may_administrate !== true) {
			$this->owner_id = intval(Auth::id());
		}
	}
}
