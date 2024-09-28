<?php

/**
 * We don't care for unhandled exceptions in tests.
 * It is the nature of a test to throw an exception.
 * Without this suppression we had 100+ Linter warning in this file which
 * don't help anything.
 *
 * @noinspection PhpDocMissingThrowsInspection
 * @noinspection PhpUnhandledExceptionInspection
 */

namespace Tests\Unit\Rules;

use App\Constants\RandomID;
use App\Rules\AlbumIDListRule;
use Tests\AbstractTestCase;

class AlbumIDListRuleTest extends AbstractTestCase
{
	public function testNegative(): void
	{
		$rule = new AlbumIDListRule();
		$msg = '';
		$rule->validate('attr', null, function ($message) use (&$msg) { $msg = $message; });
		$expected = ':attribute must be a comma-separated string of strings with either ' .
			RandomID::ID_LENGTH . ' characters each or one of the built-in IDs unsorted, starred, recent, on_this_day';

		self::assertEquals($expected, $msg);
	}
}