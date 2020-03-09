---
layout: docs
title: "Contrast"
description: "Moodle's use of colour in the Boost and classic themes and the impact it has on accessibility"
date: 2020-02-04T09:40:32+01:00
draft: false
---

## Colour contrast checks

The colour contrast of the components on this page are checked with some JS that adds a badge like this: <span class="badge badge-danger border border-dark m-1">2.50:1</span> if a the colour contrast of the component does not meet the WCAG standards. For AA compliance with these standards the number should be at least 4.5:1 to pass.

## Theme Buttons

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

## Buttons according to MDL-64494

In this issue a new pallet was suggested. The colours pass but might not be easy to differentiate. Some outline buttons have not been made accessible.

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <button type="button" class="btn btn-mdl-{{ .name }} mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        btn-{{ .name }}
    </button>
    <button type="button" class="btn btn-outline-mdl-{{ .name }}">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        btn-outline-{{ .name }}
    </button>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}


## New Accessible buttons

The buttons shown below are using the Component Library CSS. For each button the colour was based on the buttons shown when you click on the down <button class="btn btn-sm btn-secondary" type="button" aria-expanded="false"><i class="fa fa-caret-down fa-fw"></i></button> button. Only buttons that did not pass WCAG standards have changed.

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range $themecolours := (index $.Site.Data "a11ycolours") }}
<div class="row mt-2 mb">
    <div class="col-12">
        <button type="button" class="btn btn-new-{{ .name }} mr-2">
            <i class="icon fa fa-lightbulb-o fa-fw"></i>
            New btn-{{ $themecolours.name }}
        </button>
        <button type="button" class="btn btn-outline-new-{{ .name }} mr-2">
            <i class="icon fa fa-lightbulb-o fa-fw"></i>
            New btn-outline-{{ $themecolours.name }}
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


## Alerts

The alert shown below are rendered with your current theme CSS.

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <div class="alert alert-{{ .name }} mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-{{ .name }}
    </div>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## Alerts with links
When an alert is using a link, make sure the link uses the ```.alert-link``` class, the link will not be accessible without it see:

<div data-action="contrastcheck">
    <div class="alert alert-info mr-2">
        <a href="#">Missing link-alert</a>
    </div>
</div>

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <div class="alert alert-{{ .name }} mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-{{ .name }} <a href="#" class="alert-link">Link</a>
    </div>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}

## New Alerts using the new Button colours

Because of the changes in the button colours alerts will be affected too:

{{< example show_markup="false">}}
<div data-action="contrastcheck">
{{< colors.inline >}}
{{- range (index $.Site.Data "a11ycolours") }}
<p>
    <div class="alert alert-new-{{ .name }} mr-2">
        <i class="icon fa fa-lightbulb-o fa-fw"></i>
        alert-{{ .name }} <a href="#" class="alert-link">Link</a>
    </div>
</p>
{{- end -}}
{{< /colors.inline >}}
</div>
{{< /example >}}