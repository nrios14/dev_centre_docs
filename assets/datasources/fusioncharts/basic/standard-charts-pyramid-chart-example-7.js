{
    type: 'pyramid',
    renderAt: 'chart-container',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "The Global Wealth Pyramid",
            "captionPadding": "25",
            "captionOnTop": "0",
            "alignCaptionWithCanvas": "1",
            "subcaption": "Credit Suisse 2013",
            "subCaptionFontSize": "12",
            "borderAlpha": "20",
            "is2D": "1",
            "bgColor": "#ffffff",
            "showValues": "1",
            "numberPrefix": "$",
            "numberSuffix": "M",
            "plotTooltext": "$label of world population is worth USD $value tn ",
            "showPercentValues": "1",
            "chartLeftMargin": "40",
            //Slicing out the pyramid slices
            "isSliced": "1"
        },
        "data": [{
            "label": "Top 32 mn (0.7%)",
            "value": "98.7"
        }, {
            "label": "Next 361 mn (7.7%)",
            "value": "101.8"
        }, {
            "label": "Next 1.1 bn (22.9%)",
            "value": "33"
        }, {
            "label": "Last 3.2 bn (68.7%)",
            "value": "7.3"
        }]
    }
}
