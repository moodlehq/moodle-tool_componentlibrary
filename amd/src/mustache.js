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
 * This is called from to render mustache templates
 *
 * @module     tool_componentlibrary/mustache
 * @package    tool_componentlibrary
 * @copyright  2020 Bas Brands <bas@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'core/ajax', 'core/log', 'core/notification', 'core/templates', 'core/config', 'core/str'],
       function($, ajax, log, notification, templates, config, str) {

    /**
     * Search through a template for a template docs comment.
     *
     * @param {String} templateSource The raw template
     * @param {String} templateName The name of the template used to search for docs tag
     * @return {String|boolean} the correct comment or false
     */
    var findDocsSection = function(templateSource, templateName) {

        if (!templateSource) {
            return false;
        }
        // Find the comment section marked with @template component/template.
        var marker = "@template " + templateName,
            i = 0,
            sections = [];

        sections = templateSource.match(/{{!([\s\S]*?)}}/g);

        // If no sections match - show the entire file.
        if (sections !== null) {
            for (i = 0; i < sections.length; i++) {
                var section = sections[i];
                var start = section.indexOf(marker);
                if (start !== -1) {
                    // Remove {{! and }} from start and end.
                    var offset = start + marker.length + 1;
                    section = section.substr(offset, section.length - 2 - offset);
                    return section;
                }
            }
        }
        // No matching comment.
        return false;
    };

    /**
     * Handle a template loaded response.
     *
     * @param {String} root The template container
     * @param {String} templateName The template name
     * @param {String} source The template source
     * @param {String} originalSource The original template source (not theme overridden)
     * @param {String} example JSON
     */
    var templateLoaded = function(root, templateName, source, originalSource, example) {

        root.find('[data-region="source"]').text(source);


        if (!example) {
            // Find the comment section marked with @template component/template.
            var docs = findDocsSection(source, templateName);
            if (docs === false) {
                docs = findDocsSection(originalSource, templateName);
            }
            if (docs === false) {
                log.debug('Template is missing docs section.');
                return;
            }
            var example = docs.match(/Example context \(json\):([\s\S]*);?/);
            example = example[1].trim();
            root.find('[data-region="config"]').text(example);
        }

        var context = false;

        if (example) {
            try {
                context = JSON.parse(example);
            } catch (e) {
                log.debug('Could not parse json example context for template.');
                log.debug(e);
            }
        }
        if (context) {
            templates.render(templateName, context).done(function(html, js) {
                templates.replaceNodeContents(root.find('[data-region="rendered"]'), html, js);
            }).fail(notification.exception);
        } else {
            str.get_string('templatehasnoexample', 'tool_templatelibrary').done(function(s) {
                root.find('[data-region="rendered"]').text(s);
            }).fail(notification.exception);
        }
    };

    /**
     * Load the a template source from Moodle.
     *
     * @param {String} templateName
     */
    var loadTemplate = function(root, templateName, example) {
        var parts = templateName.split('/');
        var component = parts.shift();
        var name = parts.join('/');

        var promises = ajax.call([{
            methodname: 'core_output_load_template',
            args: {
                    component: component,
                    template: name,
                    themename: config.theme,
                    includecomments: true
            }
        }, {
            methodname: 'tool_templatelibrary_load_canonical_template',
            args: {
                    component: component,
                    template: name
            }
        }], true, false);

        // When returns a new promise that is resolved when all the passed in promises are resolved.
        // The arguments to the done become the values of each resolved promise.
        $.when.apply($, promises, example)
            .done(function(source, originalSource) {
              templateLoaded(root, templateName, source, originalSource, example);
            })
            .fail(notification.exception);
    };

    var init = function() {
        var root = $('[data-region="componentlibrary"]');
        root.find('[data-region="mustachecode"]').each(function() {
            var templatename = $(this).attr("data-template");
            loadTemplate($(this), templatename);
        });
        root.find('[data-region="mustachewithcontext"').each(function() {
            var templatename = $(this).attr("data-template");
            var context = $(this).attr("data-config");
            loadTemplate($(this), templatename, context);
        });
    };

    // This module does not expose anything.
    return {
        init: init
    };
});
