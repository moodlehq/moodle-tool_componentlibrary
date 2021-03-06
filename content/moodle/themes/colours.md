---
layout: docs
title: "Colours"
date: 2020-02-04T09:40:32+01:00
draft: false
weight: 1
---

## The Moodle colour scheme:

{{< example show_markup=false >}}
<div class="card-deck">
{{< colors.inline >}}
{{- range (index $.Site.Data "colours") }}
  <div class="card mb-2 justify-content-center align-items-center d-flex" style="flex: 0 0 20%; height: 150px">
    <div class="card-body bg-{{ .name }} w-100" style="height: 100px">
    </div>
    <div class="card-footer w-100">
     <span>{{ .name }}</span>
   </div>
  </div>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Grays

{{< example show_markup=false >}}
<div class="card-deck">
{{< colors.inline >}}
{{- range (index $.Site.Data "grays") }}
  <div class="card mb-2 justify-content-center align-items-center d-flex" style="flex: 0 0 20%; height: 150px">
    <div class="card-body bg-{{ .name }} w-100" style="height: 100px; background-color: {{ .hex }}">
    </div>
    <div class="card-footer w-100">
     <span>{{ .name }}</span>
   </div>
  </div>
{{- end -}}
{{< /colors.inline >}}
<div class="card mb-2 justify-content-center align-items-center d-flex" style="flex: 0 0 20%; height: 150px">
    <div class="card-body bg-eee w-100" style="height: 100px; background-color: #eee">
    </div>
    <div class="card-footer w-100">
     <span>#eee</span>
   </div>
  </div>
</div>
{{< /example >}}

These colours are used throughout Moodle in text, buttons

{{< example show_markup=false >}}
<p>
<span class="badge badge-success">Badges</span>
</p>
<p>
<button class="btn btn-success">Buttons</button>
</p>
<p>
  <div class="border border-success">Borders</div>
</p>

{{< /example >}}

## Customizing moodle colours

Use the $theme-colours Scss array to customize colours in theme/boost/scss/preset/default.scss.

{{< highlight scss >}}
$theme-colors: map-merge((
    primary: #1177d1,
    secondary: #ced4da,
    success: #398439,
    info: #5bc0de,
    warning: #f0ad4e,
    danger: #d43f3a,
    light: #f8f9fa,
    dark: #373a3c
), $theme-colors);
{{< /highlight >}}
