import React from 'react';
import './style/input.css';

class GeneralBtn extends React.Component {

    state = {}

    handleSubmit = ev => {
        ev.preventDefault();

        console.log(this.props.state);
        this.setState(this.props.state.form);
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className={"btn" + this.props.name}
                    type={this.props.type}
                    value={this.props.name}
                    disabled={this.props.inState}
                />
            </form>
        )
    }
}

export default GeneralBtn;