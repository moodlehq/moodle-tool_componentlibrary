---
layout: docs
title: "Search"
description: The Moodle search UI for any input form in Moodle designed for searching
date: 2019-12-10T13:53:41+01:00
draft: true
---

## How it works

Searches should have a input area with a placeholder text like "Search" or something like "Search users". There should be a search button attached with the magnifying class fontawesome icon.

## Examples

Simple moodle forms based searches.

{{< example >}}
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Me" aria-label="Search" aria-describedby="button-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
        <i class="fa fa-search"></i><span class="sr-only">Search Me</span>
    </button>
  </div>
</div>
{{< /example >}}



