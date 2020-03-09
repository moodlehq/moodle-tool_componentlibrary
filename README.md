## Moodle Component Library plugin

The Moodle UI component Library is built with the aim to provide a single repository
of Moodle UI components to be used for new and existing Moodle pages.

A Moodle UI component is a self-contained UI element originating from one source file
that can be used in different locations in core code, for example a button.

This plugin generates the documentation of the Moodle User Interface components. It
is build using the [Bootstrap](http://getbootstrap.com) docs and the [Hugo](gohugo.io)
static site builder.

You will find all of the Bootstrap Component documentation pages using this plugin,
and Moodle specific documentation all rendered using your Moodle's CSS and Javascript!

## Installation

Either install this plugin using Moodle's plugin installation interface or unzip it in
your Moodle's admin/tools folder. Ensure the extracted folder name is called
componentlibrary.

cd admin/tool/

git clone git@github.com:moodlehq/moodle-tool_componentlibrary.git componentlibrary

Once installed you can find the component library navigating to
Site Administration > Development > Component Library

## Usage

-- warning: this process might change a lot during the development of this plugin

You can add documentation pages for new or existing UI elements using the [Hugo](gohugo.io)
static site builder. To install Hugo you will need to have Node installed.

Install Hugo:
```
cd admin/tool/componentlibrary
npm install
````

Create the component library html pages:
```
npm run start
```
This will override any docs pages already included in this plugin.

Hugo docs pages are written using Markdown, an easy to learn way of writing formatted pages.
With Hugo we can do a lot more, there is an excellent
[course on using Hugo](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3)
on Youtube.