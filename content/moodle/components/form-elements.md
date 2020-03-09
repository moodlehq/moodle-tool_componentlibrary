---
layout: docs
title: "Form elements"
description: "Custom form elements for Moodle"
date: 2020-01-14T16:32:24+01:00
draft: true
---

## Moodle forms

Forms are constructed using lib/formslib.php. Using the addElement methods in php a set of different form element types can be added to a form. For more info visit the [Moodledocs](https://docs.moodle.org/dev/lib/formslib.php_Form_Definition) page for forms

{{< php >}}
    $mform->addElement('button', 'intro', get_string("buttonlabel"));
{{< / php >}}

Form elements are styled using Moodle templates which are rendered through PHP. Themes can override these templates.

Form elements are styled using the .form-control class, see the [Bootstrap](/bootstrap-4.3/forms/input-group/) docs for more info.

{{< mustachejson template="core_form/element-advcheckbox" >}}
{
    "element": {
        "id": "id_preference_auth_forcepasswordchange",
        "name": "preference_auth_forcepasswordchange",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": "You should check this box",
        "size": null,
        "value": 1,
        "type": "advcheckbox",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;If this checkbox is ticked, the user will be prompted to change their password on their next login&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Force password change\u0022 aria-label=\u0022Help with Force password change\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_preference_auth_forcepasswordchange",
        "selectedvalue": 1,
        "deselectedvalue": 0,
        "frozenvalue": 0,
        "wrapperid": "fitem_id_preference_auth_forcepasswordchange"
    },
    "label": "Force password change",
    "text": null,
    "required": true,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;If this checkbox is ticked, the user will be prompted to change their password on their next login&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Force password change\u0022 aria-label=\u0022Help with Force password change\u0022><\/i>\n<\/a>",
    "error": "Something is wrong"
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-checkbox" >}}
{
    "element": {
        "id": "id_deletepicture",
        "name": "deletepicture",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": 1,
        "type": "checkbox",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_deletepicture",
        "frozenvalue": false,
        "wrapperid": "fitem_id_deletepicture"
    },
    "label": "Delete picture",
    "text": null,
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-date_time_selector" >}}
{
    "element": {
        "id": "id_enddate",
        "name": null,
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "date_time_selector",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;The course end date is used for determining whether a course should be included in a user&#039;s list of courses. When the end date is past, the course is no longer listed in the navigation and is listed as past in the course overview. The course end date may also be used by custom reports. Users can still enter the course after the end date; in other words the date does not restrict access.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Course end date\u0022 aria-label=\u0022Help with Course end date\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_enddate",
        "groupname": "enddate",
        "elements": {
            "0": {
                "separator": "",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_enddate_day\u0022>\n        Day \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022select\u0022>\n    <select class=\u0022custom-select\n                   \n                   \u0022\n        name=\u0022enddate[day]\u0022\n        id=\u0022id_enddate_day\u0022\n        \n        \n         >\n        <option value=\u00221\u0022   >1<\/option>\n        <option value=\u00222\u0022   >2<\/option>\n        <option value=\u00223\u0022   >3<\/option>\n        <option value=\u00224\u0022   >4<\/option>\n        <option value=\u00225\u0022   >5<\/option>\n        <option value=\u00226\u0022   >6<\/option>\n        <option value=\u00227\u0022   >7<\/option>\n        <option value=\u00228\u0022   >8<\/option>\n        <option value=\u00229\u0022   >9<\/option>\n        <option value=\u002210\u0022   >10<\/option>\n        <option value=\u002211\u0022   >11<\/option>\n        <option value=\u002212\u0022   >12<\/option>\n        <option value=\u002213\u0022   >13<\/option>\n        <option value=\u002214\u0022   >14<\/option>\n        <option value=\u002215\u0022   >15<\/option>\n        <option value=\u002216\u0022   >16<\/option>\n        <option value=\u002217\u0022   >17<\/option>\n        <option value=\u002218\u0022   >18<\/option>\n        <option value=\u002219\u0022   >19<\/option>\n        <option value=\u002220\u0022 selected  >20<\/option>\n        <option value=\u002221\u0022   >21<\/option>\n        <option value=\u002222\u0022   >22<\/option>\n        <option value=\u002223\u0022   >23<\/option>\n        <option value=\u002224\u0022   >24<\/option>\n        <option value=\u002225\u0022   >25<\/option>\n        <option value=\u002226\u0022   >26<\/option>\n        <option value=\u002227\u0022   >27<\/option>\n        <option value=\u002228\u0022   >28<\/option>\n        <option value=\u002229\u0022   >29<\/option>\n        <option value=\u002230\u0022   >30<\/option>\n        <option value=\u002231\u0022   >31<\/option>\n    <\/select>\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_enddate_day\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "1": {
                "separator": "&nbsp;",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_enddate_month\u0022>\n        Month \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022select\u0022>\n    <select class=\u0022custom-select\n                   \n                   \u0022\n        name=\u0022enddate[month]\u0022\n        id=\u0022id_enddate_month\u0022\n        \n        \n         >\n        <option value=\u00221\u0022   >January<\/option>\n        <option value=\u00222\u0022 selected  >February<\/option>\n        <option value=\u00223\u0022   >March<\/option>\n        <option value=\u00224\u0022   >April<\/option>\n        <option value=\u00225\u0022   >May<\/option>\n        <option value=\u00226\u0022   >June<\/option>\n        <option value=\u00227\u0022   >July<\/option>\n        <option value=\u00228\u0022   >August<\/option>\n        <option value=\u00229\u0022   >September<\/option>\n        <option value=\u002210\u0022   >October<\/option>\n        <option value=\u002211\u0022   >November<\/option>\n        <option value=\u002212\u0022   >December<\/option>\n    <\/select>\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_enddate_month\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "2": {
                "separator": "&nbsp;",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_enddate_year\u0022>\n        Year \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022select\u0022>\n    <select class=\u0022custom-select\n                   \n                   \u0022\n        name=\u0022enddate[year]\u0022\n        id=\u0022id_enddate_year\u0022\n        \n        \n         >\n        <option value=\u00221900\u0022   >1900<\/option>\n        <option value=\u00221901\u0022   >1901<\/option>\n        <option value=\u00221902\u0022   >1902<\/option>\n        <option value=\u00221903\u0022   >1903<\/option>\n        <option value=\u00221904\u0022   >1904<\/option>\n        <option value=\u00221905\u0022   >1905<\/option>\n        <option value=\u00221906\u0022   >1906<\/option>\n        <option value=\u00221907\u0022   >1907<\/option>\n        <option value=\u00221908\u0022   >1908<\/option>\n        <option value=\u00221909\u0022   >1909<\/option>\n        <option value=\u00221910\u0022   >1910<\/option>\n        <option value=\u00221911\u0022   >1911<\/option>\n        <option value=\u00221912\u0022   >1912<\/option>\n        <option value=\u00221913\u0022   >1913<\/option>\n        <option value=\u00221914\u0022   >1914<\/option>\n        <option value=\u00221915\u0022   >1915<\/option>\n        <option value=\u00221916\u0022   >1916<\/option>\n        <option value=\u00221917\u0022   >1917<\/option>\n        <option value=\u00221918\u0022   >1918<\/option>\n        <option value=\u00221919\u0022   >1919<\/option>\n        <option value=\u00221920\u0022   >1920<\/option>\n        <option value=\u00221921\u0022   >1921<\/option>\n        <option value=\u00221922\u0022   >1922<\/option>\n        <option value=\u00221923\u0022   >1923<\/option>\n        <option value=\u00221924\u0022   >1924<\/option>\n        <option value=\u00221925\u0022   >1925<\/option>\n        <option value=\u00221926\u0022   >1926<\/option>\n        <option value=\u00221927\u0022   >1927<\/option>\n        <option value=\u00221928\u0022   >1928<\/option>\n        <option value=\u00221929\u0022   >1929<\/option>\n        <option value=\u00221930\u0022   >1930<\/option>\n        <option value=\u00221931\u0022   >1931<\/option>\n        <option value=\u00221932\u0022   >1932<\/option>\n        <option value=\u00221933\u0022   >1933<\/option>\n        <option value=\u00221934\u0022   >1934<\/option>\n        <option value=\u00221935\u0022   >1935<\/option>\n        <option value=\u00221936\u0022   >1936<\/option>\n        <option value=\u00221937\u0022   >1937<\/option>\n        <option value=\u00221938\u0022   >1938<\/option>\n        <option value=\u00221939\u0022   >1939<\/option>\n        <option value=\u00221940\u0022   >1940<\/option>\n        <option value=\u00221941\u0022   >1941<\/option>\n        <option value=\u00221942\u0022   >1942<\/option>\n        <option value=\u00221943\u0022   >1943<\/option>\n        <option value=\u00221944\u0022   >1944<\/option>\n        <option value=\u00221945\u0022   >1945<\/option>\n        <option value=\u00221946\u0022   >1946<\/option>\n        <option value=\u00221947\u0022   >1947<\/option>\n        <option value=\u00221948\u0022   >1948<\/option>\n        <option value=\u00221949\u0022   >1949<\/option>\n        <option value=\u00221950\u0022   >1950<\/option>\n        <option value=\u00221951\u0022   >1951<\/option>\n        <option value=\u00221952\u0022   >1952<\/option>\n        <option value=\u00221953\u0022   >1953<\/option>\n        <option value=\u00221954\u0022   >1954<\/option>\n        <option value=\u00221955\u0022   >1955<\/option>\n        <option value=\u00221956\u0022   >1956<\/option>\n        <option value=\u00221957\u0022   >1957<\/option>\n        <option value=\u00221958\u0022   >1958<\/option>\n        <option value=\u00221959\u0022   >1959<\/option>\n        <option value=\u00221960\u0022   >1960<\/option>\n        <option value=\u00221961\u0022   >1961<\/option>\n        <option value=\u00221962\u0022   >1962<\/option>\n        <option value=\u00221963\u0022   >1963<\/option>\n        <option value=\u00221964\u0022   >1964<\/option>\n        <option value=\u00221965\u0022   >1965<\/option>\n        <option value=\u00221966\u0022   >1966<\/option>\n        <option value=\u00221967\u0022   >1967<\/option>\n        <option value=\u00221968\u0022   >1968<\/option>\n        <option value=\u00221969\u0022   >1969<\/option>\n        <option value=\u00221970\u0022   >1970<\/option>\n        <option value=\u00221971\u0022   >1971<\/option>\n        <option value=\u00221972\u0022   >1972<\/option>\n        <option value=\u00221973\u0022   >1973<\/option>\n        <option value=\u00221974\u0022   >1974<\/option>\n        <option value=\u00221975\u0022   >1975<\/option>\n        <option value=\u00221976\u0022   >1976<\/option>\n        <option value=\u00221977\u0022   >1977<\/option>\n        <option value=\u00221978\u0022   >1978<\/option>\n        <option value=\u00221979\u0022   >1979<\/option>\n        <option value=\u00221980\u0022   >1980<\/option>\n        <option value=\u00221981\u0022   >1981<\/option>\n        <option value=\u00221982\u0022   >1982<\/option>\n        <option value=\u00221983\u0022   >1983<\/option>\n        <option value=\u00221984\u0022   >1984<\/option>\n        <option value=\u00221985\u0022   >1985<\/option>\n        <option value=\u00221986\u0022   >1986<\/option>\n        <option value=\u00221987\u0022   >1987<\/option>\n        <option value=\u00221988\u0022   >1988<\/option>\n        <option value=\u00221989\u0022   >1989<\/option>\n        <option value=\u00221990\u0022   >1990<\/option>\n        <option value=\u00221991\u0022   >1991<\/option>\n        <option value=\u00221992\u0022   >1992<\/option>\n        <option value=\u00221993\u0022   >1993<\/option>\n        <option value=\u00221994\u0022   >1994<\/option>\n        <option value=\u00221995\u0022   >1995<\/option>\n        <option value=\u00221996\u0022   >1996<\/option>\n        <option value=\u00221997\u0022   >1997<\/option>\n        <option value=\u00221998\u0022   >1998<\/option>\n        <option value=\u00221999\u0022   >1999<\/option>\n        <option value=\u00222000\u0022   >2000<\/option>\n        <option value=\u00222001\u0022   >2001<\/option>\n        <option value=\u00222002\u0022   >2002<\/option>\n        <option value=\u00222003\u0022   >2003<\/option>\n        <option value=\u00222004\u0022   >2004<\/option>\n        <option value=\u00222005\u0022   >2005<\/option>\n        <option value=\u00222006\u0022   >2006<\/option>\n        <option value=\u00222007\u0022   >2007<\/option>\n        <option value=\u00222008\u0022   >2008<\/option>\n        <option value=\u00222009\u0022   >2009<\/option>\n        <option value=\u00222010\u0022   >2010<\/option>\n        <option value=\u00222011\u0022   >2011<\/option>\n        <option value=\u00222012\u0022   >2012<\/option>\n        <option value=\u00222013\u0022   >2013<\/option>\n        <option value=\u00222014\u0022   >2014<\/option>\n        <option value=\u00222015\u0022   >2015<\/option>\n        <option value=\u00222016\u0022   >2016<\/option>\n        <option value=\u00222017\u0022   >2017<\/option>\n        <option value=\u00222018\u0022   >2018<\/option>\n        <option value=\u00222019\u0022   >2019<\/option>\n        <option value=\u00222020\u0022 selected  >2020<\/option>\n        <option value=\u00222021\u0022   >2021<\/option>\n        <option value=\u00222022\u0022   >2022<\/option>\n        <option value=\u00222023\u0022   >2023<\/option>\n        <option value=\u00222024\u0022   >2024<\/option>\n        <option value=\u00222025\u0022   >2025<\/option>\n        <option value=\u00222026\u0022   >2026<\/option>\n        <option value=\u00222027\u0022   >2027<\/option>\n        <option value=\u00222028\u0022   >2028<\/option>\n        <option value=\u00222029\u0022   >2029<\/option>\n        <option value=\u00222030\u0022   >2030<\/option>\n        <option value=\u00222031\u0022   >2031<\/option>\n        <option value=\u00222032\u0022   >2032<\/option>\n        <option value=\u00222033\u0022   >2033<\/option>\n        <option value=\u00222034\u0022   >2034<\/option>\n        <option value=\u00222035\u0022   >2035<\/option>\n        <option value=\u00222036\u0022   >2036<\/option>\n        <option value=\u00222037\u0022   >2037<\/option>\n        <option value=\u00222038\u0022   >2038<\/option>\n        <option value=\u00222039\u0022   >2039<\/option>\n        <option value=\u00222040\u0022   >2040<\/option>\n        <option value=\u00222041\u0022   >2041<\/option>\n        <option value=\u00222042\u0022   >2042<\/option>\n        <option value=\u00222043\u0022   >2043<\/option>\n        <option value=\u00222044\u0022   >2044<\/option>\n        <option value=\u00222045\u0022   >2045<\/option>\n        <option value=\u00222046\u0022   >2046<\/option>\n        <option value=\u00222047\u0022   >2047<\/option>\n        <option value=\u00222048\u0022   >2048<\/option>\n        <option value=\u00222049\u0022   >2049<\/option>\n        <option value=\u00222050\u0022   >2050<\/option>\n    <\/select>\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_enddate_year\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "3": {
                "separator": "&nbsp;",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_enddate_hour\u0022>\n        Hour \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022select\u0022>\n    <select class=\u0022custom-select\n                   \n                   \u0022\n        name=\u0022enddate[hour]\u0022\n        id=\u0022id_enddate_hour\u0022\n        \n        \n         >\n        <option value=\u00220\u0022   >00<\/option>\n        <option value=\u00221\u0022   >01<\/option>\n        <option value=\u00222\u0022   >02<\/option>\n        <option value=\u00223\u0022   >03<\/option>\n        <option value=\u00224\u0022   >04<\/option>\n        <option value=\u00225\u0022   >05<\/option>\n        <option value=\u00226\u0022   >06<\/option>\n        <option value=\u00227\u0022   >07<\/option>\n        <option value=\u00228\u0022   >08<\/option>\n        <option value=\u00229\u0022   >09<\/option>\n        <option value=\u002210\u0022 selected  >10<\/option>\n        <option value=\u002211\u0022   >11<\/option>\n        <option value=\u002212\u0022   >12<\/option>\n        <option value=\u002213\u0022   >13<\/option>\n        <option value=\u002214\u0022   >14<\/option>\n        <option value=\u002215\u0022   >15<\/option>\n        <option value=\u002216\u0022   >16<\/option>\n        <option value=\u002217\u0022   >17<\/option>\n        <option value=\u002218\u0022   >18<\/option>\n        <option value=\u002219\u0022   >19<\/option>\n        <option value=\u002220\u0022   >20<\/option>\n        <option value=\u002221\u0022   >21<\/option>\n        <option value=\u002222\u0022   >22<\/option>\n        <option value=\u002223\u0022   >23<\/option>\n    <\/select>\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_enddate_hour\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "4": {
                "separator": "&nbsp;",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_enddate_minute\u0022>\n        Minute \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022select\u0022>\n    <select class=\u0022custom-select\n                   \n                   \u0022\n        name=\u0022enddate[minute]\u0022\n        id=\u0022id_enddate_minute\u0022\n        \n        \n         >\n        <option value=\u00220\u0022   >00<\/option>\n        <option value=\u00221\u0022   >01<\/option>\n        <option value=\u00222\u0022   >02<\/option>\n        <option value=\u00223\u0022   >03<\/option>\n        <option value=\u00224\u0022   >04<\/option>\n        <option value=\u00225\u0022   >05<\/option>\n        <option value=\u00226\u0022   >06<\/option>\n        <option value=\u00227\u0022   >07<\/option>\n        <option value=\u00228\u0022   >08<\/option>\n        <option value=\u00229\u0022 selected  >09<\/option>\n        <option value=\u002210\u0022   >10<\/option>\n        <option value=\u002211\u0022   >11<\/option>\n        <option value=\u002212\u0022   >12<\/option>\n        <option value=\u002213\u0022   >13<\/option>\n        <option value=\u002214\u0022   >14<\/option>\n        <option value=\u002215\u0022   >15<\/option>\n        <option value=\u002216\u0022   >16<\/option>\n        <option value=\u002217\u0022   >17<\/option>\n        <option value=\u002218\u0022   >18<\/option>\n        <option value=\u002219\u0022   >19<\/option>\n        <option value=\u002220\u0022   >20<\/option>\n        <option value=\u002221\u0022   >21<\/option>\n        <option value=\u002222\u0022   >22<\/option>\n        <option value=\u002223\u0022   >23<\/option>\n        <option value=\u002224\u0022   >24<\/option>\n        <option value=\u002225\u0022   >25<\/option>\n        <option value=\u002226\u0022   >26<\/option>\n        <option value=\u002227\u0022   >27<\/option>\n        <option value=\u002228\u0022   >28<\/option>\n        <option value=\u002229\u0022   >29<\/option>\n        <option value=\u002230\u0022   >30<\/option>\n        <option value=\u002231\u0022   >31<\/option>\n        <option value=\u002232\u0022   >32<\/option>\n        <option value=\u002233\u0022   >33<\/option>\n        <option value=\u002234\u0022   >34<\/option>\n        <option value=\u002235\u0022   >35<\/option>\n        <option value=\u002236\u0022   >36<\/option>\n        <option value=\u002237\u0022   >37<\/option>\n        <option value=\u002238\u0022   >38<\/option>\n        <option value=\u002239\u0022   >39<\/option>\n        <option value=\u002240\u0022   >40<\/option>\n        <option value=\u002241\u0022   >41<\/option>\n        <option value=\u002242\u0022   >42<\/option>\n        <option value=\u002243\u0022   >43<\/option>\n        <option value=\u002244\u0022   >44<\/option>\n        <option value=\u002245\u0022   >45<\/option>\n        <option value=\u002246\u0022   >46<\/option>\n        <option value=\u002247\u0022   >47<\/option>\n        <option value=\u002248\u0022   >48<\/option>\n        <option value=\u002249\u0022   >49<\/option>\n        <option value=\u002250\u0022   >50<\/option>\n        <option value=\u002251\u0022   >51<\/option>\n        <option value=\u002252\u0022   >52<\/option>\n        <option value=\u002253\u0022   >53<\/option>\n        <option value=\u002254\u0022   >54<\/option>\n        <option value=\u002255\u0022   >55<\/option>\n        <option value=\u002256\u0022   >56<\/option>\n        <option value=\u002257\u0022   >57<\/option>\n        <option value=\u002258\u0022   >58<\/option>\n        <option value=\u002259\u0022   >59<\/option>\n    <\/select>\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_enddate_minute\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "5": {
                "separator": "&nbsp;",
                "html": "<a class=\u0022visibleifjs\u0022 name=\u0022enddate[calendar]\u0022 href=\u0022#\u0022 id=\u0022id_enddate_calendar\u0022><i class=\u0022icon fa fa-calendar fa-fw \u0022  title=\u0022Calendar\u0022 aria-label=\u0022Calendar\u0022><\/i><\/a>"
            },
            "6": {
                "separator": "&nbsp;",
                "html": "<label class=\u0022form-check  fitem  \u0022>\n<input type=\u0022checkbox\u0022 name=\u0022enddate[enabled]\u0022 class=\u0022form-check-input \u0022\n    id=\u0022id_enddate_enabled\u0022\n        value=\u00221\u0022\n    checked\n    size=\u0022\u0022\n     >\n    Enable\n<\/label>\n\n<span class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_enddate_enabled\u0022 >\n    \n<\/span>"
            }
        },
        "wrapperid": "fitem_id_enddate"
    },
    "label": "Course end date",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;The course end date is used for determining whether a course should be included in a user&#039;s list of courses. When the end date is past, the course is no longer listed in the navigation and is listed as past in the course overview. The course end date may also be used by custom reports. Users can still enter the course after the end date; in other words the date does not restrict access.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Course end date\u0022 aria-label=\u0022Help with Course end date\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-duration-inline" >}}
{
    "element": {
        "id": "id_expireperiod",
        "name": null,
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "duration",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": true,
        "iderror": "id_error_expireperiod",
        "groupname": "expireperiod",
        "elements": {
            "0": {
                "separator": "",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_expireperiod_number\u0022>\n        Time \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022text\u0022>\n    <input type=\u0022text\u0022\n            class=\u0022form-control \u0022\n            name=\u0022expireperiod[number]\u0022\n            id=\u0022id_expireperiod_number\u0022\n            value=\u00220\u0022\n            size=\u00223\u0022\n            >\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_expireperiod_number\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "1": {
                "separator": "&nbsp;",
                "html": "<div class=\u0022form-group  fitem  \u0022 >\n    <label class=\u0022col-form-label sr-only\u0022 for=\u0022id_expireperiod_timeunit\u0022>\n        Time unit \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022select\u0022>\n    <select class=\u0022custom-select\n                   \n                   \u0022\n        name=\u0022expireperiod[timeunit]\u0022\n        id=\u0022id_expireperiod_timeunit\u0022\n        \n        \n         >\n        <option value=\u0022604800\u0022   >weeks<\/option>\n        <option value=\u002286400\u0022 selected  >days<\/option>\n        <option value=\u00223600\u0022   >hours<\/option>\n        <option value=\u002260\u0022   >minutes<\/option>\n        <option value=\u00221\u0022   >seconds<\/option>\n    <\/select>\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_expireperiod_timeunit\u0022 >\n        \n    <\/div>\n<\/div>"
            }
        },
        "wrapperid": "fitem_id_expireperiod"
    },
    "label": "",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": ""
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-editor" >}}
{
    "element": {
        "id": "id_summary_editor",
        "name": "summary_editor",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "editor",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;The course summary is displayed in the list of courses. A course search searches course summary text in addition to course names.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Course summary\u0022 aria-label=\u0022Help with Course summary\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_summary_editor",
        "html": "<div><div>\n<textarea id=\u0022id_summary_editor\u0022 name=\u0022summary_editor[text]\u0022 class=\u0022form-control\u0022 rows=\u002215\u0022 cols=\u002280\u0022 spellcheck=\u0022true\u0022 >Tous les gnrateurs de Lorem Ipsum sur Internet tendent  reproduire le mme extrait sans fin, ce qui fait de lipsum.com le seul vrai gnrateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour gnrer un Lorem Ipsum irrprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune rptition, ni ne contient des mots farfelus, ou des touches d&#039;humour.<\/textarea>\n<\/div>\n<div>\n        <select name=\u0022summary_editor[format]\u0022 id=\u0022menusummary_editorformat\u0022 class=\u0022custom-select\u0022>\n            <option value=\u00221\u0022 >HTML format<\/option>\n            <option value=\u00220\u0022 selected>Moodle auto-format<\/option>\n            <option value=\u00222\u0022 >Plain text format<\/option>\n            <option value=\u00224\u0022 >Markdown format<\/option>\n        <\/select>\n<\/div><input type=\u0022hidden\u0022 name=\u0022summary_editor[itemid]\u0022 value=\u0022420626935\u0022 \/><noscript><div><object type='text\/html' data='http:\/\/localhost:8888\/moodle\/repository\/draftfiles_manager.php?action=browse&amp;env=editor&amp;itemid=420626935&amp;subdirs=0&amp;maxbytes=0&amp;areamaxbytes=-1&amp;maxfiles=-1&amp;ctx_id=74&amp;course=16&amp;sesskey=QreNAkRt1t' height='160' width='600' style='border:1px solid #000'><\/object><\/div><\/noscript><\/div>",
        "wrapperid": "fitem_id_summary_editor"
    },
    "label": "Course summary",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;The course summary is displayed in the list of courses. A course search searches course summary text in addition to course names.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Course summary\u0022 aria-label=\u0022Help with Course summary\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-filemanager" >}}
{
    "element": {
        "id": "id_overviewfiles_filemanager",
        "name": "overviewfiles_filemanager",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": 993598308,
        "type": "filemanager",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;The course image is displayed in the course overview on the Dashboard. Additional accepted file types and more than one file may be enabled by a site administrator. If so, these files will be displayed next to the course summary on the list of courses page.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Course image\u0022 aria-label=\u0022Help with Course image\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_overviewfiles_filemanager",
        "html": "<div id=\u0022filemanager-5e429b43d581d\u0022 class=\u0022filemanager w-100 fm-loading\u0022>\n    <div class=\u0022fp-restrictions\u0022>\n        <span>Maximum file size: Unlimited, maximum number of files: 1<\/span>\n        <span class=\u0022dnduploadnotsupported-message\u0022> - drag and drop not supported<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;If there are multiple files in the folder, the main file is the one that appears on the view page. Other files such as images or videos may be embedded in it. In filemanager the main file is indicated with a title in bold.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Set main file\u0022 aria-label=\u0022Help with Set main file\u0022><\/i>\n<\/a><\/span>\n    <\/div>\n    <div class=\u0022fp-navbar bg-faded card mb-0\u0022>\n        <div class=\u0022filemanager-toolbar icon-no-spacing\u0022>\n            <div class=\u0022fp-toolbar\u0022>\n                <div class=\u0022fp-btn-add\u0022>\n                    <a role=\u0022button\u0022 title=\u0022Add...\u0022 class=\u0022btn btn-secondary btn-sm\u0022 href=\u0022#\u0022>\n                        <i class=\u0022icon fa fa-file-o fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                    <\/a>\n                <\/div>\n                <div class=\u0022fp-btn-mkdir\u0022>\n                    <a role=\u0022button\u0022 title=\u0022Create folder\u0022 class=\u0022btn btn-secondary btn-sm\u0022 href=\u0022#\u0022>\n                        <i class=\u0022icon fa fa-folder-o fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                    <\/a>\n                <\/div>\n                <div class=\u0022fp-btn-download\u0022>\n                    <a role=\u0022button\u0022 title=\u0022Download all\u0022 class=\u0022btn btn-secondary btn-sm\u0022 href=\u0022#\u0022>\n                        <i class=\u0022icon fa fa-download fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                    <\/a>\n                <\/div>\n                <span class=\u0022fp-img-downloading\u0022>\n                    <span class=\u0022sr-only\u0022>Loading...<\/span>\n                    <i class=\u0022icon fa fa-circle-o-notch fa-spin fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                <\/span>\n            <\/div>\n            <div class=\u0022fp-viewbar btn-group float-sm-right\u0022>\n                <a title=\u0022Display folder with file icons\u0022 class=\u0022fp-vb-icons btn btn-secondary btn-sm\u0022 href=\u0022#\u0022>\n                    <i class=\u0022icon fa fa-th fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                <\/a>\n                <a title=\u0022Display folder with file details\u0022 class=\u0022fp-vb-details btn btn-secondary btn-sm\u0022 href=\u0022#\u0022>\n                    <i class=\u0022icon fa fa-list fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                <\/a>\n                <a title=\u0022Display folder as file tree\u0022 class=\u0022fp-vb-tree btn btn-secondary btn-sm\u0022 href=\u0022#\u0022>\n                    <i class=\u0022icon fa fa-folder fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i>\n                <\/a>\n            <\/div>\n        <\/div>\n        <div class=\u0022fp-pathbar\u0022>\n            <span class=\u0022fp-path-folder\u0022><a class=\u0022fp-path-folder-name\u0022 href=\u0022#\u0022><\/a><\/span>\n        <\/div>\n    <\/div>\n    <div class=\u0022filemanager-loading mdl-align\u0022><i class=\u0022icon fa fa-circle-o-notch fa-spin fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i><span class=\u0022sr-only\u0022>Loading...<\/span><\/div>\n    <div class=\u0022filemanager-container card\u0022 >\n        <div class=\u0022fm-content-wrapper\u0022>\n            <div class=\u0022fp-content\u0022><\/div>\n            <div class=\u0022fm-empty-container\u0022>\n                <div class=\u0022dndupload-message\u0022>You can drag and drop files here to add them.<br\/><div class=\u0022dndupload-arrow\u0022><\/div><\/div>\n            <\/div>\n            <div class=\u0022dndupload-target\u0022>Drop files here to upload<br\/><div class=\u0022dndupload-arrow\u0022><\/div><\/div>\n            <div class=\u0022dndupload-progressbars\u0022><\/div>\n            <div class=\u0022dndupload-uploadinprogress\u0022><i class=\u0022icon fa fa-circle-o-notch fa-spin fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i><span class=\u0022sr-only\u0022>Loading...<\/span><\/div>\n        <\/div>\n        <div class=\u0022filemanager-updating\u0022><i class=\u0022icon fa fa-circle-o-notch fa-spin fa-fw \u0022 aria-hidden=\u0022true\u0022  ><\/i><span class=\u0022sr-only\u0022>Loading...<\/span><\/div>\n    <\/div>\n<\/div><noscript><div><object type='text\/html' data='http:\/\/localhost:8888\/moodle\/repository\/draftfiles_manager.php?env=filemanager&amp;action=browse&amp;itemid=993598308&amp;subdirs=0&amp;maxbytes=-1&amp;areamaxbytes=-1&amp;maxfiles=1&amp;ctx_id=74&amp;course=16&amp;sesskey=QreNAkRt1t' height='160' width='600' style='border:1px solid #000'><\/object><\/div><\/noscript><input value=\u0022993598308\u0022 name=\u0022overviewfiles_filemanager\u0022 type=\u0022hidden\u0022 id=\u0022id_overviewfiles_filemanager\u0022 \/><p>Accepted file types:<\/p><div class=\u0022form-filetypes-descriptions w-100\u0022>\n    <ul class=\u0022list-unstyled unstyled\u0022>\n        <li>Image (GIF) <small class=\u0022text-muted muted\u0022>.gif<\/small><\/li>\n        <li>Image (JPEG) <small class=\u0022text-muted muted\u0022>.jpg<\/small><\/li>\n        <li>Image (PNG) <small class=\u0022text-muted muted\u0022>.png<\/small><\/li>\n    <\/ul>\n<\/div>",
        "wrapperid": "fitem_id_overviewfiles_filemanager"
    },
    "label": "Course image",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;The course image is displayed in the course overview on the Dashboard. Additional accepted file types and more than one file may be enabled by a site administrator. If so, these files will be displayed next to the course summary on the list of courses page.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Course image\u0022 aria-label=\u0022Help with Course image\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-filepicker" >}}
{
    "element": {
        "id": "id_h5ppackage",
        "name": "h5ppackage",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "filepicker",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;An H5P content type is a file with an H5P or ZIP extension containing all libraries required to display the content.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with H5P content type\u0022 aria-label=\u0022Help with H5P content type\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_h5ppackage",
        "html": "<div class=\u0022filemanager-loading mdl-align\u0022 id='filepicker-loading-5e429b52655b6'>\n<i class=\u0022icon fa fa-circle-o-notch fa-spin fa-fw \u0022  title=\u0022Loading...\u0022 aria-label=\u0022Loading...\u0022><\/i>\n<\/div>\n<div id=\u0022filepicker-wrapper-5e429b52655b6\u0022 class=\u0022mdl-left w-100\u0022 style=\u0022display:none\u0022>\n    <div>\n        <input type=\u0022button\u0022 class=\u0022btn btn-secondary fp-btn-choose\u0022 id=\u0022filepicker-button-5e429b52655b6\u0022 value=\u0022Choose a file...\u0022 name=\u0022h5ppackagechoose\u0022\/>\n        <span>  <\/span>\n    <\/div>    <div id=\u0022file_info_5e429b52655b6\u0022 class=\u0022mdl-left filepicker-filelist\u0022 style=\u0022position: relative\u0022>\n    <div class=\u0022filepicker-filename\u0022>\n        <div class=\u0022filepicker-container\u0022><div class=\u0022dndupload-message\u0022>You can drag and drop files here to add them. <br\/><div class=\u0022dndupload-arrow\u0022><\/div><\/div><\/div>\n        <div class=\u0022dndupload-progressbars\u0022><\/div>\n    <\/div>\n    <div><div class=\u0022dndupload-target\u0022>Drop files here to upload<br\/><div class=\u0022dndupload-arrow\u0022><\/div><\/div><\/div>\n    <\/div><\/div><input type=\u0022hidden\u0022 name=\u0022h5ppackage\u0022 id=\u0022id_h5ppackage\u0022 value=\u0022806938660\u0022 class=\u0022filepickerhidden\u0022\/><noscript><div><object type='text\/html' data='http:\/\/localhost:8888\/moodle\/repository\/draftfiles_manager.php?env=filepicker&amp;action=browse&amp;itemid=806938660&amp;subdirs=0&amp;maxbytes=-1&amp;maxfiles=1&amp;ctx_id=1&amp;course=1&amp;sesskey=QreNAkRt1t' height='160' width='600' style='border:1px solid #000'><\/object><\/div><\/noscript><p>Accepted file types:<\/p><div class=\u0022form-filetypes-descriptions w-100\u0022>\n    <ul class=\u0022list-unstyled unstyled\u0022>\n        <li>Archive (H5P) <small class=\u0022text-muted muted\u0022>.h5p<\/small><\/li>\n        <li>Archive (ZIP) <small class=\u0022text-muted muted\u0022>.zip<\/small><\/li>\n    <\/ul>\n<\/div>",
        "wrapperid": "fitem_id_h5ppackage"
    },
    "label": "H5P content type",
    "text": "",
    "required": true,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;An H5P content type is a file with an H5P or ZIP extension containing all libraries required to display the content.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with H5P content type\u0022 aria-label=\u0022Help with H5P content type\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-group" >}}
{
    "element": {
        "id": "fgroup_id_buttonar",
        "name": "buttonar",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "group",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": true,
        "iderror": "fgroup_id_buttonar",
        "groupname": "buttonar",
        "elements": {
            "0": {
                "separator": "",
                "html": "<div class=\u0022form-group  fitem  form-submit\u0022 >\n    <label class=\u0022col-form-label \u0022 for=\u0022id_saveandreturn\u0022>\n         \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022submit\u0022>\n        <input type=\u0022submit\u0022\n                class=\u0022btn\n                        btn-primary\n                        \n                    \n                    \u0022\n                name=\u0022saveandreturn\u0022\n                id=\u0022id_saveandreturn\u0022\n                value=\u0022Save and return\u0022\n                 >\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_saveandreturn\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "1": {
                "separator": " ",
                "html": "<div class=\u0022form-group  fitem  form-submit\u0022 >\n    <label class=\u0022col-form-label \u0022 for=\u0022id_saveanddisplay\u0022>\n         \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022submit\u0022>\n        <input type=\u0022submit\u0022\n                class=\u0022btn\n                        btn-primary\n                        \n                    \n                    \u0022\n                name=\u0022saveanddisplay\u0022\n                id=\u0022id_saveanddisplay\u0022\n                value=\u0022Save and display\u0022\n                 >\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_saveanddisplay\u0022 >\n        \n    <\/div>\n<\/div>"
            },
            "2": {
                "separator": " ",
                "html": "<div class=\u0022form-group  fitem   btn-cancel\u0022 >\n    <label class=\u0022col-form-label \u0022 for=\u0022id_cancel\u0022>\n         \n        \n        \n    <\/label>\n    <span data-fieldtype=\u0022submit\u0022>\n        <input type=\u0022submit\u0022\n                class=\u0022btn\n                        \n                        btn-secondary\n                    \n                    \u0022\n                name=\u0022cancel\u0022\n                id=\u0022id_cancel\u0022\n                value=\u0022Cancel\u0022\n                data-skip-validation=\u00221\u0022 data-cancel=\u00221\u0022 onclick=\u0022skipClientValidation = true; return true;\u0022 >\n    <\/span>\n    <div class=\u0022form-control-feedback invalid-feedback\u0022 id=\u0022id_error_cancel\u0022 >\n        \n    <\/div>\n<\/div>"
            }
        },
        "wrapperid": "fgroup_id_buttonar"
    },
    "label": "",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-passwordunmask" >}}
{
    "element": {
        "id": "id_newpassword",
        "name": "newpassword",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": "20",
        "value": null,
        "type": "passwordunmask",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;Enter a new password or leave blank to keep current password.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with New password\u0022 aria-label=\u0022Help with New password\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "autocomplete=\u0022off\u0022",
        "emptylabel": false,
        "iderror": "id_error_newpassword",
        "valuechars": {},
        "wrapperid": "fitem_id_newpassword"
    },
    "label": "New password",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;Enter a new password or leave blank to keep current password.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with New password\u0022 aria-label=\u0022Help with New password\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-radio-inline" >}}
{
    "element": {
        "id": "id_expiry_2",
        "name": "expiry",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": 2,
        "type": "radio",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": true,
        "iderror": "id_error_expiry_2",
        "wrapperid": "fitem_id_expiry_2"
    },
    "label": "Relative date",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": ""
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-select-inline" >}}
{
    "element": {
        "id": "id_enddate_minute",
        "name": "enddate[minute]",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "select",
        "helpbutton": "",
        "hiddenlabel": true,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_enddate_minute",
        "options": {
            "0": {
                "text": "00",
                "value": 0,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "1": {
                "text": "01",
                "value": 1,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "2": {
                "text": "02",
                "value": 2,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "3": {
                "text": "03",
                "value": 3,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "4": {
                "text": "04",
                "value": 4,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "5": {
                "text": "05",
                "value": 5,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "6": {
                "text": "06",
                "value": 6,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "7": {
                "text": "07",
                "value": 7,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "8": {
                "text": "08",
                "value": 8,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "9": {
                "text": "09",
                "value": 9,
                "selected": true,
                "disabled": false,
                "optionattributes": ""
            },
            "10": {
                "text": "10",
                "value": 10,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "11": {
                "text": "11",
                "value": 11,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "12": {
                "text": "12",
                "value": 12,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "13": {
                "text": "13",
                "value": 13,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "14": {
                "text": "14",
                "value": 14,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "15": {
                "text": "15",
                "value": 15,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "16": {
                "text": "16",
                "value": 16,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "17": {
                "text": "17",
                "value": 17,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "18": {
                "text": "18",
                "value": 18,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "19": {
                "text": "19",
                "value": 19,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "20": {
                "text": "20",
                "value": 20,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "21": {
                "text": "21",
                "value": 21,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "22": {
                "text": "22",
                "value": 22,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "23": {
                "text": "23",
                "value": 23,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "24": {
                "text": "24",
                "value": 24,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "25": {
                "text": "25",
                "value": 25,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "26": {
                "text": "26",
                "value": 26,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "27": {
                "text": "27",
                "value": 27,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "28": {
                "text": "28",
                "value": 28,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "29": {
                "text": "29",
                "value": 29,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "30": {
                "text": "30",
                "value": 30,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "31": {
                "text": "31",
                "value": 31,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "32": {
                "text": "32",
                "value": 32,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "33": {
                "text": "33",
                "value": 33,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "34": {
                "text": "34",
                "value": 34,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "35": {
                "text": "35",
                "value": 35,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "36": {
                "text": "36",
                "value": 36,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "37": {
                "text": "37",
                "value": 37,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "38": {
                "text": "38",
                "value": 38,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "39": {
                "text": "39",
                "value": 39,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "40": {
                "text": "40",
                "value": 40,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "41": {
                "text": "41",
                "value": 41,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "42": {
                "text": "42",
                "value": 42,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "43": {
                "text": "43",
                "value": 43,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "44": {
                "text": "44",
                "value": 44,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "45": {
                "text": "45",
                "value": 45,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "46": {
                "text": "46",
                "value": 46,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "47": {
                "text": "47",
                "value": 47,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "48": {
                "text": "48",
                "value": 48,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "49": {
                "text": "49",
                "value": 49,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "50": {
                "text": "50",
                "value": 50,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "51": {
                "text": "51",
                "value": 51,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "52": {
                "text": "52",
                "value": 52,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "53": {
                "text": "53",
                "value": 53,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "54": {
                "text": "54",
                "value": 54,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "55": {
                "text": "55",
                "value": 55,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "56": {
                "text": "56",
                "value": 56,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "57": {
                "text": "57",
                "value": 57,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "58": {
                "text": "58",
                "value": 58,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            },
            "59": {
                "text": "59",
                "value": 59,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            }
        },
        "nameraw": "enddate[minute]",
        "wrapperid": "fitem_id_enddate_minute"
    },
    "label": "Minute",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": ""
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-select" >}}
{
    "element": {
        "id": "id_defaultgroupingid",
        "name": "defaultgroupingid",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "select",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_defaultgroupingid",
        "options": {
            "0": {
                "text": "None",
                "value": 0,
                "selected": true,
                "disabled": false,
                "optionattributes": ""
            }
        },
        "nameraw": "defaultgroupingid",
        "wrapperid": "fitem_id_defaultgroupingid"
    },
    "label": "Default grouping",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-selectgroups" >}}
{
    "element": {
        "id": "id_auth",
        "name": "auth",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "selectgroups",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;This setting determines the authentication method used when the user logs in. Only enabled authentication plugins should be chosen, otherwise the user will no longer be able to log in. To block the user from logging in, select &quot;No login&quot;.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Choose an authentication method\u0022 aria-label=\u0022Help with Choose an authentication method\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_auth",
        "optiongroups": {
            "0": {
                "text": "Enabled",
                "options": {
                    "0": {
                        "value": "email",
                        "selected": false,
                        "text": "Email-based self-registration",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "1": {
                        "value": "manual",
                        "selected": true,
                        "text": "Manual accounts",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "2": {
                        "value": "nologin",
                        "selected": false,
                        "text": "No login",
                        "disabled": false,
                        "optionattributes": ""
                    }
                }
            },
            "1": {
                "text": "Disabled",
                "options": {
                    "0": {
                        "value": "cas",
                        "selected": false,
                        "text": "CAS server (SSO)",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "1": {
                        "value": "db",
                        "selected": false,
                        "text": "External database",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "2": {
                        "value": "ldap",
                        "selected": false,
                        "text": "LDAP server",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "3": {
                        "value": "lti",
                        "selected": false,
                        "text": "LTI",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "4": {
                        "value": "mnet",
                        "selected": false,
                        "text": "MNet authentication",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "5": {
                        "value": "none",
                        "selected": false,
                        "text": "No authentication",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "6": {
                        "value": "oauth2",
                        "selected": false,
                        "text": "OAuth 2",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "7": {
                        "value": "shibboleth",
                        "selected": false,
                        "text": "Shibboleth",
                        "disabled": false,
                        "optionattributes": ""
                    },
                    "8": {
                        "value": "webservice",
                        "selected": false,
                        "text": "Web services authentication",
                        "disabled": false,
                        "optionattributes": ""
                    }
                }
            }
        },
        "wrapperid": "fitem_id_auth"
    },
    "label": "Choose an authentication method",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;This setting determines the authentication method used when the user logs in. Only enabled authentication plugins should be chosen, otherwise the user will no longer be able to log in. To block the user from logging in, select &quot;No login&quot;.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Choose an authentication method\u0022 aria-label=\u0022Help with Choose an authentication method\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-selectyesno" >}}
{
    "element": {
        "id": "id_groupmodeforce",
        "name": "groupmodeforce",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "selectyesno",
        "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;If group mode is forced, then the course group mode is applied to every activity in the course. Group mode settings in each activity are then ignored.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Force group mode\u0022 aria-label=\u0022Help with Force group mode\u0022><\/i>\n<\/a>",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_groupmodeforce",
        "options": {
            "0": {
                "text": "No",
                "value": 0,
                "selected": true,
                "disabled": false,
                "optionattributes": ""
            },
            "1": {
                "text": "Yes",
                "value": 1,
                "selected": false,
                "disabled": false,
                "optionattributes": ""
            }
        },
        "nameraw": "groupmodeforce",
        "wrapperid": "fitem_id_groupmodeforce"
    },
    "label": "Force group mode",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "<a class=\u0022btn btn-link p-0\u0022 role=\u0022button\u0022\n    data-container=\u0022body\u0022 data-toggle=\u0022popover\u0022\n    data-placement=\u0022right\u0022 data-content=\u0022&lt;div class=&quot;no-overflow&quot;&gt;&lt;p&gt;If group mode is forced, then the course group mode is applied to every activity in the course. Group mode settings in each activity are then ignored.&lt;\/p&gt;\n&lt;\/div&gt; \u0022\n    data-html=\u0022true\u0022 tabindex=\u00220\u0022 data-trigger=\u0022focus\u0022>\n  <i class=\u0022icon fa fa-question-circle text-info fa-fw \u0022  title=\u0022Help with Force group mode\u0022 aria-label=\u0022Help with Force group mode\u0022><\/i>\n<\/a>",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-static" >}}
{
    "element": {
        "id": "id_currentpicture",
        "name": "currentpicture",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "static",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_currentpicture",
        "html": "<a href=\u0022http:\/\/localhost:8888\/moodle\/user\/profile.php?id=6\u0022><img src=\u0022http:\/\/localhost:8888\/moodle\/pluginfile.php\/28\/user\/icon\/classic\/f1?rev=24\u0022 class=\u0022userpicture\u0022 width=\u002264\u0022 height=\u002264\u0022 alt=\u0022Picture of Chris Cross\u0022 title=\u0022Picture of Chris Cross\u0022 \/><\/a>",
        "staticlabel": true,
        "wrapperid": "fitem_id_currentpicture"
    },
    "label": "Current picture",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-submit-inline" >}}
{
    "element": {
        "id": "id_cancel",
        "name": "cancel",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": "Cancel",
        "type": "submit",
        "helpbutton": false,
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": " btn-cancel",
        "attributes": "data-skip-validation=\u00221\u0022 data-cancel=\u00221\u0022 onclick=\u0022skipClientValidation = true; return true;\u0022",
        "emptylabel": true,
        "iderror": "id_error_cancel",
        "secondary": true,
        "wrapperid": "fitem_id_cancel"
    },
    "label": "",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": ""
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-submit" >}}
{
    "element": {
        "id": "id_submitbutton",
        "name": "submitbutton",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": "Upload H5P content types",
        "type": "submit",
        "helpbutton": false,
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": true,
        "iderror": "id_error_submitbutton",
        "wrapperid": "fitem_id_submitbutton"
    },
    "label": "",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-tags" >}}
{
    "element": {
        "id": "id_tags",
        "name": "tags[]",
        "label": null,
        "multiple": "multiple",
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "tags",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_tags",
        "options": {},
        "nameraw": "tags",
        "tags": true,
        "ajax": "",
        "placeholder": "Enter tags...",
        "casesensitive": false,
        "showsuggestions": true,
        "noselectionstring": "No selection",
        "managestandardtagsurl": "http:\/\/localhost:8888\/moodle\/tag\/manage.php?tc=1",
        "wrapperid": "fitem_id_tags"
    },
    "label": "Tags",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-text-inline" >}}
{
    "element": {
        "id": "id_lastip",
        "name": "lastip",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "text",
        "helpbutton": "",
        "hiddenlabel": true,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_lastip",
        "wrapperid": "fitem_id_lastip"
    },
    "label": "Last IP address value",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": ""
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-text" >}}
{
    "element": {
        "id": "id_role_8",
        "name": "role_8",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "text",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "",
        "emptylabel": false,
        "iderror": "id_error_role_8",
        "wrapperid": "fitem_id_role_8"
    },
    "label": "Your word for 'Authenticated user on frontpage'",
    "text": "",
    "required": false,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

{{< mustachejson template="core_form/element-textarea" >}}
{
    "element": {
        "id": "id_description",
        "name": "description",
        "label": null,
        "multiple": null,
        "checked": null,
        "error": null,
        "size": null,
        "value": null,
        "type": "textarea",
        "helpbutton": "",
        "hiddenlabel": false,
        "frozen": false,
        "hardfrozen": false,
        "extraclasses": null,
        "attributes": "wrap=\u0022virtual\u0022 rows=\u00228\u0022 cols=\u002270\u0022",
        "emptylabel": false,
        "iderror": "id_error_description",
        "wrapperid": "fitem_id_description"
    },
    "label": "Description",
    "text": "",
    "required": true,
    "advanced": false,
    "helpbutton": "",
    "error": null
}
{{< /mustachejson >}}

