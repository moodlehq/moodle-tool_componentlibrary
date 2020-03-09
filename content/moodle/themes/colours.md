---
layout: docs
title: "Colours"
date: 2020-02-04T09:40:32+01:00
draft: false
---

## Description

Normally themes set the colours used in the page. This is done using the SCSS array set in the theme preset.

{{< highlight css >}}
$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #868e96 !default;
$gray-700: #495057 !default;
$gray-800: #373a3c !default;
$gray-900: #212529 !default;
$black:    #000 !default;

$blue:    #1177d1 !default;
$indigo:  #6610f2 !default;
$purple:  #613d7c !default;
$pink:    #e83e8c !default;
$red:     #d9534f !default;
$orange:  #f0ad4e !default;
$yellow:  #ff7518 !default;
$green:   #5cb85c !default;
$teal:    #20c997 !default;
$cyan:    #5bc0de !default;

$primary:       $blue !default;
$secondary:     $gray-800 !default;
$success:       $green !default;
$info:          $cyan !default;
$warning:       $yellow !default;
$danger:        $red !default;
$light:         $gray-100 !default;
$dark:          $gray-800 !default;

$theme-colors: map-merge((
    primary: $primary,
    secondary: $gray-400,
    success: $success,
    info: $info,
    warning: $orange,
    danger: $danger,
    light: $gray-100,
    dark: $gray-800
), $theme-colors);
{{< /highlight >}}

## Using the $theme-colors map

Colours automatically create CSS classes for a range of Bootstrap Utility classes.

{{< example >}}
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
