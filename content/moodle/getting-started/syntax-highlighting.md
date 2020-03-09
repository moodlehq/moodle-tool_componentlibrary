---
layout: docs
title: "Syntax highlighting"
date: 2020-02-04T09:40:32+01:00
draft: false
weight: 3
---

## Using Shortcodes for syntax

Using this (shortcode) syntax you can higlight programming syntax in the component library

## HTML highlighting

Syntax for markdown (.md) files:

```
{{</* highlight html */>}}
<div class="myclass">
  This is an example.
</div>
{{</* /highlight  */>}}
```
Rendered result on this page:

{{< highlight html >}}
<div class="myclass">
	This is an example.
</div>
{{< /highlight >}}

## PHP highlighting

Syntax for markdown (.md) files:

```
{{</* php */>}}
  $mform->addElement('passwordunmask', 'password', get_string('label'), $attributes);
{{</* /php  */>}}
```
Rendered result on this page:

{{< php >}}
	$mform->addElement('passwordunmask', 'password', get_string('label'), $attributes);
{{< /php >}}

## JavaScript highlighting

Syntax for markdown (.md) files:

```
{{</* highlight js */>}}
var config = {
    test: null,
    selector: '[data-drag-type=move]'
};
{{</* /highlight  */>}}
```
Rendered result on this page:

{{< highlight js >}}
var config = {
    test: null,
    selector: '[data-drag-type=move]'
};
{{< /highlight >}}


## HTML Higlighting and rendering

Using this (shortcode) syntax you can show syntax and render it on the page in one go.

```
{{</* example */>}}
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
{{</* /example  */>}}
```

{{< example >}}
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
{{< /example >}}
