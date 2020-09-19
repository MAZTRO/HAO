import React from 'react';
import './style/input.css';

class GeneralBtn extends React.Component {

    state = {}

    handleSubmit = ev => {
        console.log(this.props.onClick);

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