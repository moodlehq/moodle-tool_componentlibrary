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
 * Interface to the Lunr search engines.
 *
 * @module     tool_componentlibrary/search
 * @package    tool_componentlibrary
 * @copyright  2020 Bas Brands <bas@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'tool_componentlibrary/lunr', 'core/log'],

function($, lunr, Log) {

    var lunrIndex,
        $results,
        pagesIndex;

    // Initialize lunrjs using our generated index file
    function initLunr(jsonFile) {
        // First retrieve the index file
        $.getJSON(jsonFile)
            .done(function(index) {
                pagesIndex = index;
                // Set up lunrjs by declaring the fields we use
                // Also provide their boost level for the ranking
                lunrIndex = lunr(function() {
                    this.field("title", {
                        boost: 10
                    });
                    this.field("tags", {
                        boost: 5
                    });
                    this.field("content");

                    // ref is the result item identifier (I chose the page URL)
                    this.ref("uri");

                    pagesIndex.forEach(function(page) {
                        this.add(page);
                    }.bind(this));
                });
                // Feed lunr with each file and let lunr actually index them

            })
            .fail(function(jqxhr, textStatus, error) {
                Log.debug("Error getting Hugo index file:" + textStatus + ", " + error);
            });
    }

    // Nothing crazy here, just hook up a listener on the input field
    function initUI() {
        $results = $('[data-region="docsearch"] input');
        $('[data-region="docsearch"] input').keyup(function() {
            $results.empty();

            // Only trigger a search when 2 chars. at least have been provided
            var query = $(this).val();
            if (query.length < 2) {
                return;
            }

            var results = search(query);

            renderResults(results);
        });
    }

    /**
     * Trigger a search in lunr and transform the result
     *
     * @param  {String} query
     * @return {Array}  results
     */
    function search(query) {
        // Find the item in our index corresponding to the lunr one to have more info
        // Lunr result:
        //  {ref: "/section/page1", score: 0.2725657778206127}
        // Our result:
        //  {title:"Page1", href:"/section/page1", ...}
        return lunrIndex.search(query).map(function(result) {
            return pagesIndex.filter(function(page) {
                return page.uri === result.ref;
            })[0];
        });
    }

    /**
     * Display the 10 first results
     *
     * @param  {Array} results to display
     */
    function renderResults(results) {
        if (!results.length) {
            return;
        }

        // Clear out the results.
        $('[data-region="docsearch"] .dropdown-menu').html(' ');

        var baseUrl = M.cfg.wwwroot + '/admin/tool/componentlibrary/docspage.php';
        // Only show the ten first results
        results.slice(0, 10).forEach(function(result) {
            var $result = $("<li>");
            $result.append($("<a>", {
                class: 'dropdown-item',
                href: baseUrl + result.uri,
                text: result.title
            }));
            $('[data-region="docsearch"] .dropdown-menu').append($result);
        });
        $('[data-region="docsearch"] .dropdown-menu').addClass('show');
        $('[data-region="docsearch"]').addClass('show');
    }

    function init(jsonFile) {
        initLunr(jsonFile);
        initUI();
    }

    // This module does not expose anything.
    return {
        init: init
    };
});
