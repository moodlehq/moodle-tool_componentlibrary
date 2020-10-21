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
 * Interface to using clipboard.js
 *
 * @module     tool_componentlibrary/clipboardwrapper
 * @package    tool_componentlibrary
 * @copyright  2020 Bas Brands <bas@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'theme_boost/bootstrap/tooltip', 'tool_componentlibrary/build/clipboard'],

function($, Tooltip, ClipboardJS) {

    var init = function() {
        // Insert copy to clipboard button before .highlight
        var btnHtml = '<div class="bd-clipboard"><button type="button"' +
            ' class="btn-clipboard" title="Copy to clipboard">Copy</button></div>';
        document.querySelectorAll('figure.highlight, div.highlight')
            .forEach(function (element) {
                element.insertAdjacentHTML('beforebegin', btnHtml);
            });

        document.querySelectorAll('.btn-clipboard')
            .forEach(function(btn) {
                var tooltipBtn = new Tooltip(btn);

                btn.addEventListener('mouseleave', function () {
                    // Explicitly hide tooltip, since after clicking it remains
                    // focused (as it's a button), so tooltip would otherwise
                    // remain visible until focus is moved away
                    tooltipBtn.hide();
                });
            });

        var clipboard = new ClipboardJS('.btn-clipboard', {
            target: function (trigger) {
                return trigger.parentNode.nextElementSibling;
            }
        });

        clipboard.on('success', function(e) {
            var tooltipBtn = new Tooltip(e.trigger);
            e.trigger.setAttribute('data-original-title', 'Copied!');
            tooltipBtn.show();
            setTimeout(function() {
                tooltipBtn.dispose();
            }, 3000);

            e.trigger.setAttribute('data-original-title', 'Copy to clipboard');
            e.clearSelection();
        });
    };

    // This module does not expose anything.
    return {
        init: init
    };
});