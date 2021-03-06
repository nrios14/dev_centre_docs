---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Tuvalu

#### JavaScript Alias: maps/tuvalu


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-json">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "data": [
        {
            "id": "TV.FN"
        },
        {
            "id": "TV.NG"
        },
        {
            "id": "TV.NA"
        },
        {
            "id": "TV.NT"
        },
        {
            "id": "TV.NI"
        },
        {
            "id": "TV.NU"
        },
        {
            "id": "TV.NF"
        },
        {
            "id": "TV.NL"
        },
        {
            "id": "TV.VI"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "FA",
                "shapeid": "myCustomShape",
                "x": "248.08",
                "y": "210.61",
                "label": "Funafuti",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "48.38",
                "y": "26.35",
                "label": "Lolua",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "122.5",
                "y": "52.08",
                "label": "Kulia"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "59.7",
                "y": "64.44",
                "label": "Tonga"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "114.26",
                "y": "123.11",
                "label": "Tanrake"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "192.5",
                "y": "180.76",
                "label": "Savare",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "214.11",
                "y": "139.58",
                "label": "Asau"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "265.58",
                "y": "350.61",
                "label": "Fangaua"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
{
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "TV.FN"
        },
        {
            "id": "TV.NG"
        },
        {
            "id": "TV.NA"
        },
        {
            "id": "TV.NT"
        },
        {
            "id": "TV.NI"
        },
        {
            "id": "TV.NU"
        },
        {
            "id": "TV.NF"
        },
        {
            "id": "TV.NL"
        },
        {
            "id": "TV.VI"
        }
    ],
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "FA",
                "x": "248.08",
                "y": "210.61",
                "label": "Funafuti",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "48.38",
                "y": "26.35",
                "label": "Lolua",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "122.5",
                "y": "52.08",
                "label": "Kulia"
            },
            {
                "id": "03",
                "x": "59.7",
                "y": "64.44",
                "label": "Tonga"
            },
            {
                "id": "04",
                "x": "114.26",
                "y": "123.11",
                "label": "Tanrake"
            },
            {
                "id": "05",
                "x": "192.5",
                "y": "180.76",
                "label": "Savare",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "214.11",
                "y": "139.58",
                "label": "Asau"
            },
            {
                "id": "07",
                "x": "265.58",
                "y": "350.61",
                "label": "Fangaua"
            }
        ],
        "application": [
            {
                "id": "FA",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
