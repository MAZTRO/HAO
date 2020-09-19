import React from 'react';

class GeneralBtn extends React.Component {
    constructor () {
        super()
        this.state = {}
    }

    handleSubmit = async ev => {
        let data = this.props.state.form;

        try {
            let conf = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content.Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            console.log('----> Sending DATA to API...');

            let res = await fetch('http://localhost:5000/api/tickets', conf);
            let json = await res.json();

            /* Response of the API */
            console.log(json);
        } catch (error) {
            console.log('---------------');
            console.log(error);
            console.log('---------------');
        }
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