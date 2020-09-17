---
layout: docs
title: "Search Input"
description: "find items in a collection of data"
date: 2020-08-26T16:32:24+01:00
draft: false
weight: 60
tags:
- In development
- MDL-69454
---

<style>
.simplesearchform .btn {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
.simplesearchform .btn .icon{
    margin: 0;
}
.simplesearchform .btn-submit {
    border-color: #ced4da;
    color: #6c757d;
}

.simplesearchform .withclear {
    padding-right: 2rem;
}

.simplesearchform .btn-close,
.simplesearchform .btn-clear {
    position: absolute;
    right: 0;
    color: #6c757d;
    z-index: 4;
}

.simplesearchform .btn-submit {
    background-color: #f8f9fa;
}

.simplesearchform .searchinput.center {
    justify-content: center;
}
.simplesearchform .searchinput {
    display: flex;
    flex: 1 1 auto;
}
.simplesearchform .collapsing {
    height: inherit;
    transition: none;
    width: inherit;
}
</style>

{{< example show_markup="false">}}
<form autocomplete="off" action="http://localhost/admin/search.php" method="get" accept-charset="utf-8" id="searchinput-1" class="mform form-inline simplesearchform">
    <div class="input-group">
        <label for="searchinput">
            <span class="sr-only">Search</span>
        </label>
        <input type="text"
            id="searchinput"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            name="query"
            autocomplete="off"
            value=""
        >
        <div class="input-group-append">
            <button type="submit" class="btn btn-submit search-icon">
                <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
{{< /example >}}

## How it works

Single searches allow the user the quickly search a collection of data. A search is input in the search field and the results are shown immediately (using JS) or after the search has been posted to Moodle.

Searches are used in the page navbar, blocks, module pages, settings, the contentbank etc.

### Standard search types

{{< example show_markup="false">}}
<div class="small">
Default search input
</div>
<form autocomplete="off" action="http://localhost/admin/search.php" method="get" accept-charset="utf-8" id="searchinput-1" class="mform form-inline simplesearchform">
    <div class="input-group">
        <label for="searchinput">
            <span class="sr-only">Search</span>
        </label>
        <input type="text"
            id="searchinput"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            name="query"
            autocomplete="off"
            value=""
        >
        <div class="input-group-append">
            <button type="submit" class="btn btn-submit search-icon">
                <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
<div class="mt-3 small">
Emphasized search input using .btn-primary
</div>
<form autocomplete="off" action="http://localhost/admin/search.php" method="get" accept-charset="utf-8" id="searchinput-1" class="mform form-inline simplesearchform">
    <div class="input-group">
        <label for="searchinput">
            <span class="sr-only">Search</span>
        </label>
        <input type="text"
           id="searchinput"
           class="form-control"
           placeholder="Search"
           aria-label="Search"
           name="query"
           autocomplete="off"
           value=""
        >
        <div class="input-group-append">
            <button type="submit" class="btn btn-primary search-icon">
                <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
{{< /example >}}

**features**
* form based
* uses action url
* configurable input name
* configurable button type
* expands to full width on mobile

<div class="my-5"></div>

### Auto search input with clear option

{{< example show_markup="false">}}
<div id="searchform-auto" class="form-inline simplesearchform">
    <div class="input-group searchbar" role="search">
        <label for="searchinput-auto">
            <span class="sr-only">{{#str}} searchcontentbankbyname, contentbank {{/str}}</span>
        </label>
        <input type="text"
           data-target="input"
           id="searchinput-auto"
           class="form-control withclear"
           placeholder="Search"
           name="search"
           autocomplete="off"
        >
        <button
            class="btn btn-clear d-none"
            data-action="clearsearch"
            type="button"
        >
            <i class="icon fa fa-times fa-fw " aria-hidden="true"></i>
            <span class="sr-only">Clear search</span>
        </button>
    </div>
</div>

{{#js}}
require(
[
    'jquery',
],
function(
    $
) {
    var container = $('#searchform-auto');
    var clearsearch = $('#searchform-auto [data-action="clearsearch"]');
    var input = $('#searchform-auto [data-target="input"]');

    input.on('change keydown paste input', function() {
        if (input.val() !== '') {
            clearsearch.removeClass('d-none');
        } else {
            clearsearch.addClass('d-none');
        }
    });

    clearsearch.on('click', function() {
        input.val("");
        input.focus();
        clearsearch.addClass('d-none');
    })
});
{{/js}}
{{< /example >}}

**features**

* show clear icon when you start typing
* search results are rendered immediately
* clear icon disapears when the input field is empty

<div class="my-5"></div>

### Navbar search form

{{< example show_markup="false">}}

<nav class="navbar navbar-light bg-light">
    <div id="searchinput-navbar" class="searchinputwrapper simplesearchform ml-auto">
        <div class="collapse" id="searchform-navbar">
            <div class="searchinput">
                <form autocomplete="off" action="http://localhost/admin/search.php" method="get" accept-charset="utf-8" id="searchinput-navbar" class="mform form-inline searchinputform">
                    <div class="input-group">
                        <label for="searcinput">
                            <span class="sr-only">Search</span>
                        </label>
                        <div class="position-relative">
                            <input type="text"
                            id="searchinput"
                               class="form-control withclear"
                               placeholder="Search"
                               aria-label="Search"
                               data-target="input"
                               name="q"
                               autocomplete="off"
                            >
                            <button class="btn btn-close"
                                data-action="closesearch"
                                data-toggle="collapse"
                                href="#searchform-navbar"
                                type="button"
                            >
                                <i class="icon fa fa-times fa-fw " aria-hidden="true"></i>
                                <span class="sr-only">Close search</span>
                            </button>
                        </div>
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-submit">
                                <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <button
            class="btn p-2 border-0"
            type="button"
            data-toggle="collapse"
            data-action="opensearch"
            href="#searchform-navbar"
            role="button"
            aria-expanded="false"
            aria-controls="searchform-navbar"
        >
            <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
            <span class="sr-only">Toggle search</span>
        </button>
    </div>
</nav>

{{#js}}
require(
[
    'jquery',
],
function(
    $
) {
    var container = $('#searchform-navbar');
    var opensearch = $('#searchinput-navbar [data-action="opensearch"]');
    var input = $('#searchinput-navbar [data-target="input"]');

    container.on('hidden.bs.collapse', function() {
        opensearch.removeClass('d-none');
        input.val('');
    });
    container.on('show.bs.collapse', function() {
        opensearch.addClass('d-none');
    });
    container.on('shown.bs.collapse', function() {
        input.focus();
    });
});
{{/js}}

{{< /example >}}

**features**

* click search button to start typing
* click close button to hide search
* click enter after input to post the form



