const chartTitle = "Interactive Chart";
var chart = AmCharts.makeChart("chartdiv",{
  "type": "serial",
  "categoryField": "category",
  "categoryAxis": {
    "gridPosition": "start"
  },
  "graphs": [
    {
      "title": "name",
      "valueField": "column-1"
    }
  ],
  "valueAxes": [
    {
      "title": "Axis title"
    }
  ],
  "legend": {
    "useGraphSettings": true
  },
  "titles": [
    {
      "size": 24,
      "text": chartTitle
    }
  ],
  "dataProvider": [
    {
      "category": "category 1",
      "column-1": 8
    },
    {
      "category": "category 2",
      "column-1": 10
    },
  ]
});

if(chart.titles[0].text != null){
  chart.titles[0].text = "Bazinga!!";
}