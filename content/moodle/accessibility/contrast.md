---
layout: docs
title: "Contrast"
description: "Moodle's use of colour in the Boost and classic themes and the impact it has on accessibility"
date: 2020-02-04T09:40:32+01:00
draft: false
toc: true
tags:
 - MDL-64494
 - 3.9
---

## Colour contrast checks

The colour contrast of the components on this page are checked with some JS that adds a badge like this: <span class="badge badge-danger border border-dark m-1">2.50:1</span> if a the colour contrast of the component does not meet the WCAG standards. For AA compliance with these standards the number should be at least 4.5:1 to pass.

## Buttons

The buttons shown below are rendered with your current theme CSS.

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <button type="button" class="btn btn-{{ .name }} mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        btn-{{ .name }}
    </button>
    <button type="button" class="btn btn-outline-{{ .name }}">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        btn-outline-{{ .name }}
    </button>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Buttons WCAG AA

For each button the colour was based on the buttons shown when you click on the down <button class="btn btn-sm btn-secondary" type="button" aria-expanded="false"><i class="fa fa-caret-down fa-fw"></i></button> button. Only buttons that did not pass WCAG standards have changed.

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range $themecolours := (index $.Site.Data "a11ycolours") }}
<div class="row mt-2 mb">
    <div class="col-12">
        <button type="button" class="btn btn-aa-{{ .name }} mr-2">
            <i class="icon fa fa-lightbulb-o fa-fw"></i>
            aa btn-{{ $themecolours.name }}
        </button>
        <button type="button" class="btn btn-outline-aa-{{ .name }} mr-2">
            <i class="icon fa fa-lightbulb-o fa-fw"></i>
            aa btn-outline-{{ $themecolours.name }}
        </button>
        <button class="btn btn-sm btn-secondary" type="button" data-toggle="collapse" data-target="#btn-test-{{ .name }}" aria-expanded="false">
           <i class="fa fa-caret-down fa-fw"></i>
        </button>
    </div>
</div>
<div class="collapse" id="btn-test-{{ .name }}">
    <div class="row py-3">
    {{ range $num := (seq 49) }}
        <div class="col-md-3 mb-2">
            <button type="button" class="btn btn-test-{{ $num }}-{{ $themecolours.name }} mr-2">
                <i class="icon fa fa-lightbulb-o fa-fw"></i>
                {{ $themecolours.name }} {{ $num }}
            </button>
        </div>
    {{ end }}
    </div>
    <div class="row py-3">
    {{ range $num := (seq 49) }}
        <div class="col-md-3 mb-2">
            <button type="button" class="btn btn-outline-test-{{ $num }}-{{ $themecolours.name }} mr-2">
                <i class="icon fa fa-lightbulb-o fa-fw"></i>
                {{ $themecolours.name }} {{ $num }}
            </button>
        </div>
    {{ end }}
    </div>
</div>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Buttons WCAG AAA

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <button type="button" class="btn btn-aaa-{{ .name }} mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        btn-{{ .name }}
    </button>
    <button type="button" class="btn btn-outline-aaa-{{ .name }}">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        btn-outline-{{ .name }}
    </button>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Alerts

The alert shown below are rendered with your current theme CSS. Moodle core only support 4 types of alerts.

{{< example show_markup="false">}}
<div data-action="contrastcheck">
<p>
    <div class="alert alert-info mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-info
    </div>
</p>
<p>
    <div class="alert alert-success mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-success
    </div>
</p>
<p>
    <div class="alert alert-warning mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-warning
    </div>
</p>
<p>
    <div class="alert alert-danger mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-danger
    </div>
</p>
</div>
{{< /example >}}

## Alerts WCAG AA

Because of the changes in the button colours alerts will be affected too:

{{< example show_markup="false">}}
<div data-action="contrastcheck">
<p>
    <div class="alert alert-aa-info mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-info
    </div>
</p>
<p>
    <div class="alert alert-aa-success mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-success
    </div>
</p>
<p>
    <div class="alert alert-aa-warning mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-warning
    </div>
</p>
<p>
    <div class="alert alert-aa-danger mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-danger
    </div>
</p>
</div>
{{< /example >}}


## Alerts WCAG AAA

Because of the changes in the button colours alerts will be affected too:

{{< example show_markup="false">}}
<div data-action="contrastcheck">
<p>
    <div class="alert alert-aaa-info mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        aaa alert-info
    </div>
</p>
<p>
    <div class="alert alert-aaa-success mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-success
    </div>
</p>
<p>
    <div class="alert alert-aaa-warning mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-warning
    </div>
</p>
<p>
    <div class="alert alert-aaa-danger mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-danger
    </div>
</p>
</div>
{{< /example >}}

## Alerts with links
When an alert is using a link, make sure the link uses the ```.alert-link``` class, the link will not be accessible without it see:

{{< example show_markup="false">}}
<div data-action="contrastcheck">
    <div class="alert alert-info mr-2">
        <a href="#">Missing alert-link class</a>
    </div>
</div>
<div data-action="contrastcheck">
    <div class="alert alert-info mr-2">
        <a href="#" class="alert-link">With alert-link class</a>
    </div>
</div>
{{< /example >}}

## Badges

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <div class="badge badge-{{ .name }} mr-2">
        badge-{{ .name }}
    </div>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Badges WCAG AA

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <div class="badge badge-aa-{{ .name }} mr-2">
        badge-aa-{{ .name }}
    </div>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Badges WCAG AAA

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <div class="badge badge-aaa-{{ .name }} mr-2">
        badge-aaa-{{ .name }}
    </div>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}
