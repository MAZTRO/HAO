import React from 'react';
import Swal from 'sweetalert2';

class GeneralBtn extends React.Component {
    constructor () {
        super()
        this.state = {}
    }

    handleSubmit = async ev => {
        ev.preventDefault();
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

        Swal.fire({
            title: `Datos enviados ${data['Nombres']}!`,
            text: 'Revisa el correo, ahí esta la boleta.',
            icon: 'success',
            confirmButtonText: 'Listo!',
            confirmButtonColor: '#1C8391',
        }).then((result) => {
            if (result.value) {
                /* window.location.href='http://localhost:3000'; */
                window.location.href='https://hao-ten.vercel.app/';
            }
        })
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