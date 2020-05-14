---
layout: docs
title: "Contrast"
description: "Moodle's use of colour in the Boost and classic themes and the impact it has on accessibility"
date: 2020-02-04T09:40:32+01:00
draft: false
toc: true
tags:
 - MDL-64494
 - 3.9
---


{{< example show_markup="false">}}
<div class="bd-example" data-action="contratcheck">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="lalala-primary">
        <td>Cell</td>
        <td class="text-success">Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td class="text-success">Cell</td>
      </tr>
      <tr class="lalala-success">
        <td>Cell</td>
        <td class="text-danger">Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td class="text-danger">Cell</td>
      </tr>
<!--       <tr class="lalala-info">
        <th scope="row">5</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="lalala-warning">
        <th scope="row">7</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="lalala-danger">
        <th scope="row">9</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr> -->
    </tbody>
  </table>
</div>
{{< /example >}}