class TAT extends React.Component{
	mixins = [resizeMixin]
   constructor(props) {
		super(props);
	}

   propTypes(){
        
    }
 
    getDefaultProps(){
        return {
            
        };
    }

    getInitialState(){
        return {
            width:this.props.width
        };
    }

    render(){
        return (
          <h1>TAT</h1>  
        );
    }
}
window.TAT=TAT;


var LineChart=React.createClass({

    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        chartId:React.PropTypes.string
    },

    mixins:[resizeMixin],

    getDefaultProps: function() {
        return {
            width: 800,
            height: 300,
            chartId: 'v1_chart'
        };
    },
    getInitialState:function(){
        return {
            tooltip:{ display:false,data:{key:'',value:''}},
            width:0
        };
    },
    render:function(){
        var data=[
            {day:'02-11-2016',count:180},
            {day:'02-12-2016',count:250},
            {day:'02-13-2016',count:150},
            {day:'02-14-2016',count:496},
            {day:'02-15-2016',count:140},
            {day:'02-16-2016',count:380},
            {day:'02-17-2016',count:100},
            {day:'02-18-2016',count:150}
        ];

        var margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);

        var parseDate = d3.time.format("%m-%d-%Y").parse;

        data.forEach(function (d) {
            d.date = parseDate(d.day);
        });

        var x = d3.time.scale()
            .domain(d3.extent(data, function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);

        var y = d3.scale.linear()
            .domain([0,d3.max(data,function(d){
                return d.count+100;
            })])
            .range([h, 0]);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(5);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .tickValues(data.map(function(d,i){
                if(i>0)
                    return d.date;
            }).splice(1))
            .ticks(4);

        var xGrid = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .ticks(5)
            .tickSize(-h, 0, 0)
            .tickFormat("");


        var yGrid = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(5)
            .tickSize(-w, 0, 0)
            .tickFormat("");


        var interpolations = [
            "linear",
            "step-before",
            "step-after",
            "basis",
            "basis-closed",
            "cardinal",
            "cardinal-closed"];

        var line = d3.svg.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.count);
            }).interpolate(interpolations[5]);


        var transform='translate(' + margin.left + ',' + margin.top + ')';

        return (
            <div>
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>

                    <g transform={transform}>

                        <path className="line shadow" d={line(data)} strokeLinecap="round"/>

                        
                    </g>

                </svg>


            </div>
        );
    },
    showToolTip:function(e){
        e.target.setAttribute('fill', '#FFFFFF');

        this.setState({tooltip:{
            display:true,
            data: {
                key:e.target.getAttribute('data-key'),
                value:e.target.getAttribute('data-value')
                },
            pos:{
                x:e.target.getAttribute('cx'),
                y:e.target.getAttribute('cy')
            }

            }
        });
    },
    hideToolTip:function(e){
        e.target.setAttribute('fill', '#7dc7f4');
        this.setState({tooltip:{ display:false,data:{key:'',value:''}}});
    }


});

window.LineChart=LineChart;