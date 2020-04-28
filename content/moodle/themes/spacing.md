---
layout: docs
title: "Spacing"
description: Instead of adding paddings and margins to UI elements use the Bootstrap spacing utilities
date: 2020-02-04T09:40:32+01:00
draft: false
weight: 4
---

### example class pt-3

class: ```pt-3:```

result: padding-top-three

css:
{{< highlight css >}}
.pt-3 {
  padding-top: 1rem; // 16px
}
{{< /highlight >}}

### Class variables

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

### Example of paddings

{{< example>}}
<div class="d-flex align-items-center justify-content-center">
  <div class="p-5 bg-dark">
    <div class="p-4 bg-info">
      <div class="p-3 bg-success">
        <div class="p-2 bg-warning">
          <div class="p-1 bg-danger">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}
