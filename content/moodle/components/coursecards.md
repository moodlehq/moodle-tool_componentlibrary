---
layout: docs
title: "Course cards"
description: "Course cards are easy to access clickable components used in collections to navigate to the course home page."
date: 2020-01-14T16:32:24+01:00
draft: false
weight: 20
---

## How it works

Course cards are rendered using a shared template found in
**course/templates/coursecard.mustache**. They are loaded throught JavaScript or PHP on pages like the user dashboard.

Course cards should always contain an image, if no image is provided by the backend a placeholder image is used. The card image and title should be clickable and should always link you to a course page.

Course cards should always show

* Course image
* Course full name
* Course category
* If a course is favourited

## Sources

A deck of course cards:
**core_course/view-cards.mustache**

A single card:
**course/templates/coursecard.mustache**

## Usage

The example below show a deck of cards as used on the starred courses block

{{< mustachejson template="core_course/view-cards" >}}
{
    "courses": [
        {
            "viewurl": "https://moodlesite/course/view.php?id=2",
            "courseimage": "https://placekitten.com/300/500",
            "fullname": "Mathematics Year One",
            "isfavourite": true,
            "coursecategory": "Miscellaneous",
            "showcoursecategory": true,
            "visible": true
        },
        {
            "viewurl": "https://moodlesite/course/view.php?id=3",
            "courseimage": "https://placekitten.com/330/500",
            "fullname": "Health and Safety",
            "isfavourite": false,
            "coursecategory": "Business",
            "showcoursecategory": true,
            "visible": true
        },
        {
            "viewurl": "https://moodlesite/course/view.php?id=4",
            "courseimage": "https://placekitten.com/360/500",
            "fullname": "French Advanced",
            "isfavourite": false,
            "coursecategory": "Languages",
            "showcoursecategory": true,
            "visible": true
        },
        {
            "viewurl": "https://moodlesite/course/view.php?id=4",
            "courseimage": "https://placekitten.com/360/400",
            "fullname": "French Year one",
            "isfavourite": false,
            "coursecategory": "Languages",
            "showcoursecategory": true,
            "visible": true
        }
    ]
}
{{< /mustachejson >}}


## Placeholder images

Placeholder images are rendered in core using placeholder images.

{{< php >}}
    $OUTPUT->get_generated_image_for_id($id);
{{< /php >}}

{{< example show_markup="false">}}
<div class="card-deck">
{{< root.inline >}}
{{- $pl1 := readFile "content/static/moodle/components/coursecards/placeholder-1.txt" -}}
{{- $pl2 := readFile "content/static/moodle/components/coursecards/placeholder-2.txt" -}}
{{- $pl3 := readFile "content/static/moodle/components/coursecards/placeholder-3.txt" -}}
{{- $pl4 := readFile "content/static/moodle/components/coursecards/placeholder-4.txt" -}}
{{- $pl5 := readFile "content/static/moodle/components/coursecards/placeholder-5.txt" -}}
{{- $pl6 := readFile "content/static/moodle/components/coursecards/placeholder-6.txt" -}}
{{- $pl7 := readFile "content/static/moodle/components/coursecards/placeholder-7.txt" -}}
{{- $pl8 := readFile "content/static/moodle/components/coursecards/placeholder-8.txt" -}}
{{- $pl9 := readFile "content/static/moodle/components/coursecards/placeholder-9.txt" -}}

  <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl1 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl2 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl3 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl4 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl5 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl6 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl7 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl8 -}}')">
  </div>
    <div class="card mb-2 justify-content-center align-items-center d-flex text-center" style="flex: 0 0 20%; height: 150px; background-image: url('{{- $pl9 -}}')">
  </div>
{{< /root.inline >}}
</div>
{{< /example >}}

