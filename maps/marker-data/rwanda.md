---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Rwanda

#### JavaScript Alias: maps/rwanda


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
            "id": "RW.ES"
        },
        {
            "id": "RW.KV"
        },
        {
            "id": "RW.NO"
        },
        {
            "id": "RW.SU"
        },
        {
            "id": "RW.OU"
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
                "id": "KG",
                "shapeid": "myCustomShape",
                "x": "262.23",
                "y": "198.37",
                "label": "Kigali",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "266.34",
                "y": "116.16",
                "label": "Byumba",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "177.97",
                "y": "103.83",
                "label": "Ruhengeri",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "102.96",
                "y": "154.18",
                "label": "Gisenyi",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "120.43",
                "y": "236.39",
                "label": "Kibuye",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "26.92",
                "y": "321.67",
                "label": "Cyangugu",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "213.93",
                "y": "353.53",
                "label": "Butare",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "260.17",
                "y": "228.16",
                "label": "Gitarama",
                "labelpos": "right"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "376.29",
                "y": "262.07",
                "label": "Kibungo",
                "labelpos": "left"
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
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "RW.ES"
        },
        {
            "id": "RW.KV"
        },
        {
            "id": "RW.NO"
        },
        {
            "id": "RW.SU"
        },
        {
            "id": "RW.OU"
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
                "id": "KG",
                "x": "262.23",
                "y": "198.37",
                "label": "Kigali",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "266.34",
                "y": "116.16",
                "label": "Byumba",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "177.97",
                "y": "103.83",
                "label": "Ruhengeri",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "102.96",
                "y": "154.18",
                "label": "Gisenyi",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "120.43",
                "y": "236.39",
                "label": "Kibuye",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "26.92",
                "y": "321.67",
                "label": "Cyangugu",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "213.93",
                "y": "353.53",
                "label": "Butare",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "260.17",
                "y": "228.16",
                "label": "Gitarama",
                "labelpos": "right"
            },
            {
                "id": "08",
                "x": "376.29",
                "y": "262.07",
                "label": "Kibungo",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "KG",
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
            },
            {
                "id": "08",
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
