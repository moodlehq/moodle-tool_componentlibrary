---
layout: docs
title: "Background contrast"
description: "Moodle's use of Background colour in the Boost and classic themes and the impact it has on accessibility"
date: 2020-02-04T09:40:32+01:00
draft: false
tags:
 - MDL-64494
 - 3.9
---

## Frontpage course listing

The frontpage course listing uses a (somewhat outdated) pattern of styling the background colour for a course to color #F2F2F2.

Testing with new link colours:

{{< highlight css >}}
.linktest-1 {
    color: #1174cc;
}
.linktest-2 {
    color: #1072c8;
}
.linktest-3 {
    color: #106fc3
}
{{< /highlight >}}


{{< example show_markup="false">}}
<div class="courses" >
    <div class="coursebox clearfix even" style="background-color:#F2F2F2">
        <div class="info">
            <h3 class="coursename">
                <a class="" href="http://localhost:8888/moodle/course/view.php?id=18">German Expert</a>
            </h3>
            <div class="moreinfo"></div>
            <div class="enrolmenticons">
                <i class="icon fa fa-sign-in fa-fw " title="Self enrolment" aria-label="Self enrolment"></i>
            </div>
        </div>
        <div class="content">
            <div class="summary">
                <div class="no-overflow">Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufllig, andere bewusst
                </div>
            </div>
            <ul class="teachers" data-action="contrastcheck">
                <li><a class="linktest-1" href="http://localhost:8888/moodle/user/view.php?id=13&amp;course=1">Irene Ipsen (new link colour 1)</a></li>
                <li><a class="linktest-2" href="http://localhost:8888/moodle/user/view.php?id=13&amp;course=1">Gubbe Gortal (new link colour 2)</a></li>
                <li><a class="linktest-3" href="http://localhost:8888/moodle/user/view.php?id=13&amp;course=1">Marga More (new link colour 3)</a></li>
            </ul>
        </div>
    </div>
    <div class="coursebox clearfix odd">
        <div class="info">
            <h3 class="coursename">
                <a class="" href="http://localhost:8888/moodle/course/view.php?id=18">German Expert</a>
            </h3>
            <div class="moreinfo"></div>
            <div class="enrolmenticons">
                <i class="icon fa fa-sign-in fa-fw " title="Self enrolment" aria-label="Self enrolment"></i>
            </div>
        </div>
        <div class="content">
            <div class="summary">
                <div class="no-overflow">Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufllig, andere bewusst
                </div>
            </div>
            <ul class="teachers" data-action="contrastcheck">
                <li><a class="linktest-1" href="http://localhost:8888/moodle/user/view.php?id=13&amp;course=1">Irene Ipsen (new link colour 1)</a></li>
                <li><a class="linktest-2" href="http://localhost:8888/moodle/user/view.php?id=13&amp;course=1">Gubbe Gortal (new link colour 2)</a></li>
                <li><a class="linktest-3" href="http://localhost:8888/moodle/user/view.php?id=13&amp;course=1">Marga More (new link colour 3)</a></li>
            </ul>
        </div>
    </div>
</div>
{{< /example >}}

## Tables with links

Pages like the enrolment page use tables with links.

{{< example show_markup="false" >}}
<table class="flexible table table-striped table-hover generaltable generalbox" data-action="contrastcheck">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#F2F2F2">
      <th scope="row"><input type="checkbox" class="m-1" value="" data-action="toggle" data-toggle="master" data-togglegroup="participants-table" data-toggle-selectall="Select all" data-toggle-deselectall="Deselect all"></th>
      <td><a href="#">Bas Brands (old link colour)</a></td>
      <td>bas@example.com</td>
      <td>
      </td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox" class="m-1" value="" data-action="toggle" data-toggle="master" data-togglegroup="participants-table" data-toggle-selectall="Select all" data-toggle-deselectall="Deselect all"></th>
      <td><a href="#">Chris Cross</a></td>
      <td>chris@example.com</td>
      <td>
        Active
        </td>
    </tr>
    <tr style="background-color:#F2F2F2">
      <th scope="row"><input type="checkbox" class="m-1" value="" data-action="toggle" data-toggle="master" data-togglegroup="participants-table" data-toggle-selectall="Select all" data-toggle-deselectall="Deselect all"></th>
      <td>
<a class="linktest-1" href="#">Irene Ipsum (new link colour 1)</a><br>
<a class="linktest-3" href="#">Irene Ipsum (new link colour 2)</a><br>
<a class="linktest-3" href="#">Irene Ipsum (new link colour 2)</a><br>
        </td>
      <td>irene@example.com</td>
      <td>@blab</td>
    </tr>
  </tbody>
</table>
{{< /example >}}
