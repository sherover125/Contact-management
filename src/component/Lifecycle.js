import { Component } from "react";
import Clock from "./Clock";
class Lifecycle extends Component {

	constructor() {
		super();
		console.log('constructor');
		this.state = {
			date: new Date(),
			showClock: true,
			color: false,
			dis: true
		};
	}

	render() {
		console.log('render');
		const { date, color, dis } = this.state;

		const style = {
			display: 'flex',
			padding: '10px',
			justifyContent: 'space-around'
		}

		const diss = { display: dis ? null : "none" }

		return (
			< div className=" " style={style}>
				<div className="d-flex justify-content-center">
					<button className="btn btn-danger  mx-1" onClick={() => this.Shower()}>نمایش</button>
					<button className="btn btn-primary  mx-1" onClick={() => this.color()} style={diss}>تغییر رنگ</button>
				</div>
				{this.state.showClock ? <Clock date={date} color={color} /> : null}
			</div >
		)
	}
	componentDidMount() {
		console.log("componentDidMount");
		this.timer = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
		clearInterval(this.timer);
	}

	tick() {
		this.setState({ date: new Date() });
		console.log('new date')
	}

	Shower() {
		this.setState({ showClock: !this.state.showClock });
		this.setState({ dis: !this.state.dis });
	}

	color() {
		this.setState({ color: !this.state.color })
	}
}
export default Lifecycle;