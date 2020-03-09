---
layout: docs
title: "Colours"
date: 2020-02-04T09:40:32+01:00
draft: false
---

## Description

Normally themes set the colours used in the page. This is done using the SCSS array set in the theme preset. Moodle comes with a default colour set optimized for accessibility when the default presets are used in themes Boost and Classic.

## Customizing preset colours

Because Boost Css is build with Scss we can utilize some great features build into Bootstrap. In the example blow a Scss array of colours is defined before we load all of the Bootstrap and Moodle scss files. This array of colours dictates how Bootstrap css will be created for our components like alerts, buttons and backgrounds.

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


@each $color, $value in $theme-colors {
    .btn-#{$color} {
        @include button-variant($value, $value);
    }
}
{{< /highlight >}}

This generates classes like:
{{< highlight css>}}
.btn-primary {
    color: #fff;
    background-color: #1177d1;
    border-color: #1177d1;
}
{{< /highlight >}}
## Using the $theme-colors map

Colours automatically create CSS classes for a range of Bootstrap Utility classes.

{{< example show_markup="false">}}
<div class="row no-gutter">
   <div class="col-sm-6 py-3"><p>Using a white Background</p></div>
   <div class="col-sm-6 py-3 text-light bg-dark"><p>Using a dark Background</p></div>
</div>
{{< colors.inline >}}
{{- range (index $.Site.Data "colours") }}
<div class="row no-gutter">
   <div class="col-sm-6">
      <p class="text-{{ .name }}">.text-{{ .name }} {{ .hex }}</p>
    </div>
    <div class="col-sm-6 bg-dark">
      <p class="text-{{ .name }}">.text-{{ .name }} {{ .hex }}</p>
    </div>
</div>
{{- end -}}
{{< /colors.inline >}}
{{< /example >}}

## Moodle comes

{{< example show_markup=false >}}
<div class="card-deck">
{{< colors.inline >}}
{{- range (index $.Site.Data "colours") }}
  <div class="card mb-2 justify-content-center align-items-center d-flex" style="flex: 0 0 20%; height: 150px">
    <div class="card-body bg-{{ .name }} w-100" style="height: 100px">
    </div>
    <div class="card-footer w-100">
     <span>.bg-{{ .name }}</span>:
     <span>{{ .hex }}</span>
   </div>
  </div>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}
