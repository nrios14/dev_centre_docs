---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Jamaica

#### JavaScript Alias: maps/jamaica


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
                "id": "KI",
                "shapeid": "myCustomShape",
                "x": "292.68",
                "y": "109.66",
                "label": "Kingston",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "93.58",
                "y": "17.03",
                "label": "Montego Bay",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "184.08",
                "y": "22.35",
                "label": "Discovery Bay",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "231.99",
                "y": "30.87",
                "label": "Ocho Rios"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "353.36",
                "y": "74.52",
                "label": "Port Antonio"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "358.69",
                "y": "124.56",
                "label": "Morant Bay",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "387.43",
                "y": "124.56",
                "label": "Rocky Point",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "279.9",
                "y": "113.92",
                "label": "Portmore",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "259.67",
                "y": "95.82",
                "label": "Spanish Town",
                "labelpos": "right"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "240.51",
                "y": "123.5",
                "label": "Port Esquivel",
                "labelpos": "left"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape",
                "x": "210.7",
                "y": "109.66",
                "label": "May Pen",
                "labelpos": "left"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape",
                "x": "153.2",
                "y": "128.82",
                "label": "Alligator Pond",
                "labelpos": "left"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape",
                "x": "161.72",
                "y": "86.23",
                "label": "Mandeville"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape",
                "x": "17.99",
                "y": "54.29",
                "label": "Negrill"
            },
            {
                "id": "16",
                "shapeid": "newCustomShape",
                "x": "104.23",
                "y": "97.95",
                "label": "Black River"
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
                "id": "KI",
                "x": "292.68",
                "y": "109.66",
                "label": "Kingston",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "93.58",
                "y": "17.03",
                "label": "Montego Bay",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "184.08",
                "y": "22.35",
                "label": "Discovery Bay",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "231.99",
                "y": "30.87",
                "label": "Ocho Rios"
            },
            {
                "id": "04",
                "x": "353.36",
                "y": "74.52",
                "label": "Port Antonio"
            },
            {
                "id": "05",
                "x": "358.69",
                "y": "124.56",
                "label": "Morant Bay",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "387.43",
                "y": "124.56",
                "label": "Rocky Point",
                "labelpos": "bottom"
            },
            {
                "id": "08",
                "x": "279.9",
                "y": "113.92",
                "label": "Portmore",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "259.67",
                "y": "95.82",
                "label": "Spanish Town",
                "labelpos": "right"
            },
            {
                "id": "11",
                "x": "240.51",
                "y": "123.5",
                "label": "Port Esquivel",
                "labelpos": "left"
            },
            {
                "id": "12",
                "x": "210.7",
                "y": "109.66",
                "label": "May Pen",
                "labelpos": "left"
            },
            {
                "id": "13",
                "x": "153.2",
                "y": "128.82",
                "label": "Alligator Pond",
                "labelpos": "left"
            },
            {
                "id": "14",
                "x": "161.72",
                "y": "86.23",
                "label": "Mandeville"
            },
            {
                "id": "15",
                "x": "17.99",
                "y": "54.29",
                "label": "Negrill"
            },
            {
                "id": "16",
                "x": "104.23",
                "y": "97.95",
                "label": "Black River"
            }
        ],
        "application": [
            {
                "id": "KI",
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
                "id": "10",
                "shapeid": "newCustomShape"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "12",
                "shapeid": "newCustomShape"
            },
            {
                "id": "13",
                "shapeid": "newCustomShape"
            },
            {
                "id": "14",
                "shapeid": "newCustomShape"
            },
            {
                "id": "15",
                "shapeid": "newCustomShape"
            },
            {
                "id": "16",
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
