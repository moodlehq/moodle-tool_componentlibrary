// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * This is called from to run any js code
 *
 * @module     tool_componentlibrary/jsrunner
 * @package    tool_componentlibrary
 * @copyright  2020 Bas Brands <bas@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery'],

function($) {

    var init = function() {
        var root = $('[data-region="componentlibrary"]');
        root.find('[data-action="runjs"]').each(function() {
            var jsCode = $(this).html();
            eval(jsCode); // eslint-disable-line no-eval
        });
    };

    // This module does not expose anything.
    return {
        init: init
    };
});
