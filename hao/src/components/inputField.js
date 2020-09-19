import React from 'react';

class InputFueld extends React.Component {
    constructor () {
        super()
        this.state = {}
    }

    render() {
        const { onChange, onClick } = this.props
        return (
            <form className={"form" + this.props.title}>
                <label>{this.props.title}</label>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeHolder}
                    className={"inData in" + this.props.title}
                    name={this.props.title}
                    onChange={onChange}
                    onClick={onClick}
                    value={this.props.value}
                    maxLength={this.props.max}
                />
            </form>
        )
    }
}

export default InputFueld;