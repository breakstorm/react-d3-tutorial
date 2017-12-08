var Visitors = React.createClass({
    render:function(){
        return (
            <div>
                <h3>Visitors to your site</h3>
                <div className="bottom-right-svg">
                    <LineChart/>
                    <TAT />
                </div>
            </div>
        )
    }
});


ReactDOM.render(<Visitors/>,document.getElementById("top-line-chart"));






