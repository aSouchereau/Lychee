<?php

namespace App\Http\Resources\GalleryConfigs;

use App\Enum\ImageOverlayType;
use App\Enum\ThumbOverlayVisibilityType;
use App\Models\Configs;
use App\Policies\SettingsPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\URL;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class InitConfig extends Data
{
	public bool $are_nsfw_visible;
	public bool $are_nsfw_blurred;
	public bool $is_nsfw_warning_visible;
	public bool $is_nsfw_warning_visible_for_admin;
	public bool $is_nsfw_background_blurred;
	public string $nsfw_banner_override;
	public bool $is_nsfw_banner_backdrop_blurred;
	public bool $show_keybinding_help_popup;
	public ImageOverlayType $image_overlay_type;
	public ThumbOverlayVisibilityType $display_thumb_album_overlay;
	public ThumbOverlayVisibilityType $display_thumb_photo_overlay;
	public ?string $clockwork_url;

	public function __construct()
	{
		$this->are_nsfw_visible = Configs::getValueAsBool('nsfw_visible');
		$this->are_nsfw_blurred = Configs::getValueAsBool('nsfw_blur');
		$this->is_nsfw_warning_visible = Configs::getValueAsBool('nsfw_warning');
		$this->is_nsfw_warning_visible_for_admin = Configs::getValueAsBool('nsfw_warning_admin');
		$this->nsfw_banner_override = Configs::getValueAsString('nsfw_banner_override');
		$this->is_nsfw_banner_backdrop_blurred = Configs::getValueAsBool('nsfw_banner_blur_backdrop');
		$this->image_overlay_type = Configs::getValueAsEnum('image_overlay_type', ImageOverlayType::class);
		$this->display_thumb_album_overlay = Configs::getValueAsEnum('display_thumb_album_overlay', ThumbOverlayVisibilityType::class);
		$this->display_thumb_photo_overlay = Configs::getValueAsEnum('display_thumb_photo_overlay', ThumbOverlayVisibilityType::class);
		$this->show_keybinding_help_popup = Configs::getValueAsBool('show_keybinding_help_popup');
		$this->clockwork_url = $this->has_clockwork_in_menu();
	}

	private function has_clockwork_in_menu(): string|null
	{
		if (!Gate::check(SettingsPolicy::CAN_ACCESS_DEV_TOOLS, [Configs::class])) {
			return null;
		}

		// Defining clockwork URL
		$clockWorkEnabled = config('clockwork.enable') === true || (config('app.debug') === true && config('clockwork.enable') === null);
		$clockWorkWeb = config('clockwork.web');
		if ($clockWorkEnabled && $clockWorkWeb === true) {
			return URL::asset('clockwork/app');
		}
		if (is_string($clockWorkWeb)) {
			return $clockWorkWeb . '/app';
		}

		return null;
	}
}