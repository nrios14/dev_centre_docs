---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Bulgaria

#### JavaScript Alias: maps/bulgaria


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
                "id": "SO",
                "shapeid": "myCustomShape",
                "x": "103.91",
                "y": "208.94",
                "label": "Sofia"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "37.45",
                "y": "54.91",
                "label": "Vidin"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "80.7",
                "y": "294.39",
                "label": "Blagoevgrad"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "243.17",
                "y": "316.55",
                "label": "Kurdzhali"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "209.41",
                "y": "249.03",
                "label": "Plovdiv"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "235.79",
                "y": "209.99",
                "label": "Stara Zagora"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "215.74",
                "y": "88.67",
                "label": "Pleven"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "323.35",
                "y": "49.63",
                "label": "Ruse"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "499.54",
                "y": "44.36",
                "label": "Dobrich"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "501.65",
                "y": "120.32",
                "label": "Varna"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "466.83",
                "y": "216.32",
                "label": "Burgas"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "360.28",
                "y": "173.07",
                "label": "Sliven"
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
    "map": {},
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
                "id": "SO",
                "x": "103.91",
                "y": "208.94",
                "label": "Sofia"
            },
            {
                "id": "01",
                "x": "37.45",
                "y": "54.91",
                "label": "Vidin"
            },
            {
                "id": "02",
                "x": "80.7",
                "y": "294.39",
                "label": "Blagoevgrad"
            },
            {
                "id": "03",
                "x": "243.17",
                "y": "316.55",
                "label": "Kurdzhali"
            },
            {
                "id": "04",
                "x": "209.41",
                "y": "249.03",
                "label": "Plovdiv"
            },
            {
                "id": "05",
                "x": "235.79",
                "y": "209.99",
                "label": "Stara Zagora"
            },
            {
                "id": "06",
                "x": "215.74",
                "y": "88.67",
                "label": "Pleven"
            },
            {
                "id": "08",
                "x": "323.35",
                "y": "49.63",
                "label": "Ruse"
            },
            {
                "id": "07",
                "x": "499.54",
                "y": "44.36",
                "label": "Dobrich"
            },
            {
                "id": "09",
                "x": "501.65",
                "y": "120.32",
                "label": "Varna"
            },
            {
                "id": "10",
                "x": "466.83",
                "y": "216.32",
                "label": "Burgas"
            },
            {
                "id": "11",
                "x": "360.28",
                "y": "173.07",
                "label": "Sliven"
            }
        ],
        "application": [
            {
                "id": "SO",
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
                "id": "08",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
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
