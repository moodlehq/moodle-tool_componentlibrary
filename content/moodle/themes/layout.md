---
layout: docs
title: "Layout"
date: 2019-12-10T13:53:41+01:00
draft: false
---

{{< example >}}
<div id="page-wrapper">
    <div id="page" class="container-fluid">
        <h1>header</h1>

        <div id="page-content" class="row pb-3">
            <div id="region-main-box" class="col-12">
				<div class="bg-secondary w-100 my-2">SETTINGSMENU</div>
                <section id="region-main" class="has-blocks mb-3" aria-label="CONTENT">

                    <div class="bg-info w-100 p-5">PAGE CONTENT</div>

                </section>
                <section data-region="blocks-column" class="d-print-none" aria-label="{{#str}}blocks{{/str}}">
                    SIDEPREBLOCKS
                </section>
            </div>
        </div>
    </div>
    FOOTER
</div>
{{< /example >}}