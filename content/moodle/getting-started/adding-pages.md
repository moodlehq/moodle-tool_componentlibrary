---
layout: docs
title: "Adding pages"
date: 2020-03-02T10:13:29+01:00
draft: false
weight: 2
---

## Adding or editing a page in the component library

In this step-by-step guide you will create a new page called Breadcrumb navigation and compile it from a markdown text file to a HTML page in the component library.

To add a page to the component library on your local machine navigate open your editor or file manager and create a new markdown text file in folder /content/moodle/components/breadcrumbs.md


```
└── content
    └── moodle
       └── components
          └── breadcrumbs.md
```

Open the file in your favourite editor and start it with some metadata, we call this syntax [frontmatter](https://gohugo.io/content-management/front-matter/).

```
---
layout: docs
title: "Breadcrumb navigation"
date: 2020-03-02T10:13:29+01:00
draft: false
---
```

Make sure you add these characters `---` before and after your metadata. You can change the title and date to match your document.

## Run the component library NPM task.

In your terminal run the command `npm install` and then `npm run start` in the /admin/tool/componentlibrary folder to. This will start the watcher and livereload deamons that will build the HTML pages for the markdown text file you are writing. If you do not have npm installed on your system please visit [npmjs.com](https://www.npmjs.com/get-npm) to learn how to get a working setup.

```
Bas@ /var/www/moodle/admin/tool/componentlibrary (master) $ npm run start

> moodle-componentlibrary@1.0.0 start /private/var/www/moodles/moodle/moodle/admin/tool/componentlibrary
> npm-run-all --parallel docs-watch livereload docs-index


> moodle-componentlibrary@1.0.0 livereload /private/var/www/moodles/moodle/moodle/admin/tool/componentlibrary
> livereload


> moodle-componentlibrary@1.0.0 docs-watch /private/var/www/moodles/moodle/moodle/admin/tool/componentlibrary
> hugo -w


> moodle-componentlibrary@1.0.0 docs-index /private/var/www/moodles/moodle/moodle/admin/tool/componentlibrary
> hugo --cleanDestinationDir & hugo-lunr-indexer -i "content/**" -o docs/my-index.json -l "yaml" -d "---"

Starting LiveReload v0.9.1 for /private/var/www/moodles/moodle/moodle/admin/tool/componentlibrary on port 35729.
Total in 56 ms
Error: Error copying static files: unlinkat /var/www/moodle/admin/tool/componentlibrary/docs/bootstrap/utilities: directory not empty

                   | EN  
+------------------+----+
  Pages            | 97  
  Paginator pages  |  0  
  Non-page files   | 11  
  Static files     | 14  
  Processed images |  0  
  Aliases          |  7  
  Sitemaps         |  1  
  Cleaned          |  0  

Watching for changes in /var/www/moodle/admin/tool/componentlibrary/{content,hugo}
Press Ctrl+C to stop
Watching for config changes in /var/www/moodle/admin/tool/componentlibrary/config.yml
```

Once the watcher and livereload deamons are running you can open your browser and navigate to: **http://yourmoodlehost/admin/tool/componentlibrary/**

You should be able to find your new page in the page navigation. Now all you need to do is start editing your breadcrumb.md file and save your changes. The npm daemons will notice the change, rebuild the HTMl and reload your browser so you can see the changes on your page directly.
