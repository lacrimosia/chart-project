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

var c = [];

  var colors = [
   "red", "blue", "green"
  ];

function colorss(i){
  if(i%2){
    return "blue"
  }else{
    return 'red';
  }
}

for(var i=0; i<100; i++){
  $("body").append("<button>Hello</button>");
  $("button").css({
      'background-color': colorss(i)
  });
}
// colors[Math.floor(Math.random() * Math.floor(3))]





