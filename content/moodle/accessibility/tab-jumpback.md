---
layout: docs
title: "Tab order jump back"
description: Teleport focus on taborder
date: 2020-02-04T09:40:32+01:00
draft: false
---

## Taborder issue

When a user open the messaging UI the focus is changed from the messaging toggle button to the messaging UI. When the user tries to tab back (shift-tab) the user is not returned to the toggle button.

{{< example >}}
<div style="width: 300px">
    <div class="card">
        <div class="card-body">
            Start Tabbing <a href="#">here</a>
            <button id="movefocus" class="btn btn-success">Move Focus</button>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            Lorup ipsum dolor sit amet <a href="#">card</a>
        </div>
    </div>
    <div id="card2" class="card hidden">
        <div class="card-body">
            <a class="sr-only sr-only-focusable" id="firstlink" href="#">Skip to focuson</a>
            <a class="sr-only sr-only-focusable" id="jumpback" href="#" data-jumpto="">jumpback link</a>
            <a id="focusonme" href="#"></a>
            Lorup ipsum dolor sit amet <a href="#">card</a>
        </div>
    </div>
</div>



{{#js}}
    require(
    [
        'jquery'
    ],
    function(
        $
    ) {
        $('#movefocus').on('click', function() {
            $('#card2').toggleClass('hidden');
            $('#jumpback').attr('data-jumpto', '#movefocus');
            $('#focusonme').focus();
        });
        $('#firstlink').on('focus', function() {
            $('#focusonme').focus();
        })
        $('#jumpback').on('focus', function() {
            var jumpto = $(this).attr('data-jumpto');
            $(jumpto).focus();
        })
    });
{{/js}}
{{< /example>}}

<nav class="navbarr navbar-expand navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-auto" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
            <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
            <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>