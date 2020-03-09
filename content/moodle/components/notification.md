---
layout: docs
title: "Notification"
description: "Moodle notifications"
date: 2020-02-04T09:40:32+01:00
draft: false
---

## Description

Notifications are coupled with actions and provide instant feedback to the action results. Moodle notifications are shown right above the actionable content or overlaying the user interface for JavaScript related actions.

## Source files

* lib/amd/src/notification.js
* lib/templates/notification_info.mustache
* lib/templates/notification_success.mustache
* lib/templates/notification_warning.mustache
* lib/templates/notification_error.mustache

## Core renderer

Notifications can be added in PHP using the core renderer notification method

{{< php >}}
  $OUTPUT->notification('message', 'info');
{{< / php >}}

## Notification templates

{{< mustachejson template="core/notification_info" >}}
{
    "message": "You have pants on",
    "closebutton": 1,
    "announce": 1,
    "extraclasses": "foo bar"
}
{{< /mustachejson >}}

{{< mustachejson template="core/notification_success" >}}
{
    "message": "Your pants are on awesome!",
    "closebutton": 1,
    "announce": 1,
    "extraclasses": "foo bar"
}
{{< /mustachejson >}}

{{< mustachejson template="core/notification_warning" >}}
{
    "message": "Your pants are on down!",
    "closebutton": 1,
    "announce": 1,
    "extraclasses": "foo bar"
}
{{< /mustachejson >}}

{{< mustachejson template="core/notification_error" >}}
{
    "message": "Your pants are on fire!",
    "closebutton": 1,
    "announce": 1,
    "extraclasses": "foo bar"
}
{{< /mustachejson >}}

## JavaScript Notifications

{{< example >}}
<button class="btn btn-default" data-action="shownotification">Show JS Notification</button>
{{#js}}
require(
[
    'jquery',
    'core/notification'
],
function(
    $,
    Notification
) {
    $('[data-action="shownotification"]').on('click', function() {
      Notification.alert('Notification message', 'Extra content for notification message');
    });
});
{{/js}}
{{< /example >}}


