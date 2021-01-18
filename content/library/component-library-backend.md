---
layout: docs
title: "Component Library Backend"
date: 2020-01-01T15:43:07+01:00
group: moodle-components
draft: false
---

## Creating new Pages

Pages for the component library are written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and a number of [Hugo](https://gohugo.io) powered tools.

To add a page simply create a Markdown file in content/moodle/[foldername]/

## Generating the HTML versions of the Markdown files

The HTML pages for this library are created in the docs/ folder of this plugin.

Please run `npm install` in the $moodleroot/admin/tools/componentlibrary folder to fetch all requirements for contributing to this library.

Once all requirements are installed you all you need to do is run `npm run start` to create the component library pages.

## Location of Markdown files

```
└── content
    ├─ bootstrap
    └─ moodle
```

## HTML output folder

```
├── docs
```

## Page setup using the Hugo static site builder

If you have run `npm install` the hugo static site builder for creating this library is found in your node_modules folder.

The hugo config file can be found in /admin/tool/componentlibrary/config.yml

The HTML and CSS for the component library pages are found here:

```
└─── hugo
    ├── archetypes
    ├── dist
    ├── scss
    └─- site
```

`archetypes` are template markdown files used when creating a new hugo page.

`dist` CSS and JavaScript for use in Hugo pages

`scss` The SCSS used to generate the docs css for the Component Library.

`site` The page templates for hugo that include the left hand menu, navbar etc. And the templates to render example code shown in this component library.


## Creating a new docs page

Run this command to create a new page called `MYDOCSPAGE`. Or simply copy one of the existing markdown files in the /content folder, rename it and start editing it.

```
./node_modules/hugo-bin/vendor/hugo new -k moodle moodle/testing/MYDOCSPAGE.md
```

Open your new docs page in your editor and start writing your page. When you are done run this command to see the results.

```
npm run start
```

