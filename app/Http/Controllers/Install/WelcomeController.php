<?php

namespace App\Http\Controllers\Install;

use Illuminate\Contracts\View\View;
use Illuminate\Routing\Controller;

final class WelcomeController extends Controller
{
	/**
	 * @return View
	 */
	public function view(): View
	{
		// Show separator
		return view('install.welcome', [
			'title' => 'Lychee-installer',
			'step' => 0,
		]);
	}
}
