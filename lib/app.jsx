class LineChart extends React.Component{
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
            <div>hello</div>
        );
    }
}
export default LineChart


class Visitors extends React.Component{
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
        	<div>
	            <h1>hello world</h1>
	            <h3>Visitors to your site</h3>
                <div className="bottom-right-svg">
                	WTF
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Visitors />, document.getElementById("top-line-chart"))
