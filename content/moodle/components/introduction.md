---
layout: docs
title: "Introduction"
description: "What are Moodle UI components and when should they be documented?"
date: 2020-01-28T10:13:29+01:00
group: moodle-components
draft: false
weight: 1
---

## What are Moodle UI components?

UI components are used to represent distinct UI elements, such as tables, buttons, dialogs, and others.
The main purpose of this library is to provide documentation for designers and developers when doing frontend development of new features.

Since the Moodle UI builds on Bootstrap the documentation for the Bootstrap components are included in this library. Bootstrap componentent and utilities are used everywhere in Moodle and there is no need to duplicate the Bootstrap documentation. Only UI components that are not documented in the Bootstrap docs should be listed here.

## How to document a Moodle UI component?

An example page for describing a Moodle UI component can be found in folder `/content/moodle/components/example.md`. Start by making a copy of this file, make sure you edit the top part of the file; change ```title: "Example"``` to your page name and change ```draft: false``` to ```draft: true```
