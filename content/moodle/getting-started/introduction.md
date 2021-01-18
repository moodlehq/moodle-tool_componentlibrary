---
layout: docs
title: "The Moodle UI component library"
date: 2020-01-28T10:13:29+01:00
group: moodle-components
draft: false
weight: 1
---
<style>
  .bd-title {
    display: none;
  }
</style>
<div class="d-flex">
  <div class="w-50 ml-auto mr-auto">
{{< image "logo.png" "The Moodle logo">}}
</div>
</div>

## The Moodle UI Component library

The Moodle UI component library is the central location for documenting frequently used User Interface components used in Moodle. Moodle UI components are used to represent distinct UI elements, such as tables, buttons, dialogs, and others.
The main purpose of this library is to provide documentation for designers and developers when doing frontend development of new features.

This library allows you to create user interfaces more efficiently, it is a tool for visual designers, front-end developers, ux developers and anybody creating core Moodle code or Moodle extensions.

Whenever a new Moodle feature is created or updated the building blocks for the UI of the feature should be documented in this library.

## Bootstrap docs

A large part of this library contains information about [Bootstrap](http://getbootstrap.com) components which are shipped with every Moodle installation. Bootstrap contains a lot of useful components and utilities which can safely be used for frontend development. For example, instead of adding custom CSS to add some padding in a box you should really look at the [spacing](/moodle-3.9/utilities/spacing) utilities from Bootstrap instead.

## Build with Hugo

This page and all other pages in the Component library are build using [Hugo](http:/gohugo.io), a static site generator that can turn documentation written in Markdown into nice pages like the one you are looking at right now.

## Using npm scripts

The package.json includes numerous tasks. Run `npm run` to see all the npm scripts in your terminal. **Primary tasks include:**

<table class="table">
  <thead>
    <tr>
      <th>Task</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>npm run build</code>
      </td>
      <td>
        Run all scripts to create docs, build css, build the search index.
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run start</code>
      </td>
      <td>
        Run all scripts to create docs, build css, build the search index, and watch for changes.
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run docs-build</code>
      </td>
      <td>
        Rebuild all of the docs pages in admin/tool/componentlibrary/docs
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run docs-watch</code>
      </td>
      <td>
       Build all docs pages and keep watching for changes in admin/tool/componentlibrary/content
      </td>
    </tr>
    <tr>
      <td>
        <code>npm run css-compile</code>
      </td>
      <td>
        Compile all scss for these docs pages.
      </td>
    </tr>
        <tr>
      <td>
        <code>npm run index</code>
      </td>
      <td>
        Index all pages for the search feature
      </td>
    </tr>
  </tbody>
</table>
