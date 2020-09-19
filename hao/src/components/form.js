import React from 'react';
import GeneralBtn from './button';
import InputFueld from './inputField';

class FormInput extends React.Component {

    state = {
        form: {}
    }

    handleClick = ev => {
        let key = ev.target.value;
        let val = ev.target.checked;

        this.setState({
            form: {
                ...this.state.form,
                [key]: val
            }
        });
    }

    handleChange = ev => {
        let val = ev.target.value;
        let key = ev.target.name;

        let emailVerification = /\S+@\S+.\S+/;
        let email = emailVerification.test(val);
        let basicTextVerification = /^[A-Za-z\s]+$/;
        let simpleText = basicTextVerification.test(val);

        if ((key === 'C.C.' || key === 'Telefono') && val.length < 7) {
            console.log(`Deleting: ${key}`);
            delete this.state.form[key];
        } else if (!simpleText && (key === 'Nombres' || key === 'Apellidos' || key === 'Profesion')) {
            console.log(`Deleting: ${key}`);
            delete this.state.form[key];
        } else if (key === 'Correo' && email) {
            this.setState({
                form: {
                    ...this.state.form,
                    [key]: val
                }
            });
        } else if (key === 'C.C.' && val.length >= 7) {
            this.setState({
                form: {
                    ...this.state.form,
                    [key]: val
                }
            });
        } else if ((key === 'Nombres' || key === 'Apellidos' || key === 'Profesion') && simpleText) {
            this.setState({
                form: {
                    ...this.state.form,
                    [key]: val
                }
            });
        } else if (key === 'Telefono' && val.length >= 10) {
            this.setState({
                form: {
                    ...this.state.form,
                    [key]: val
                }
            });
        }
    }

    render() {
        let inputState = this.state.form;
        return (
            <div className="formulario">
                <h2>Boletas!</h2>
                <InputFueld
                    title="Nombres"
                    type="text"
                    placeHolder="Nombre completo"
                    onChange={this.handleChange}
                    max="20"
                />
                <InputFueld
                    title="Apellidos"
                    type="text"
                    placeHolder="Apellido completo"
                    onChange={this.handleChange}
                    max="20"
                />
                <InputFueld
                    title="Correo"
                    type="email"
                    placeHolder="Correo"
                    onChange={this.handleChange}
                    max="100"
                />
                <InputFueld
                    title="C.C."
                    type="number"
                    placeHolder="Documento de identidad"
                    onChange={this.handleChange}
                    max="20"
                />
                <InputFueld
                    title="Telefono"
                    type="number"
                    placeHolder="Celular"
                    onChange={this.handleChange}
                    max="10"
                />
                <InputFueld
                    title="Profesion"
                    type="text"
                    placeHolder="Profesion"
                    onChange={this.handleChange}
                    max="20"
                />
                <InputFueld
                    title=""
                    type="checkbox"
                    value="Privacy"
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                />
                <label className="acepto">Acepto las <a rel="noopener noreferrer" href="https://policies.google.com/privacy?hl=en-CO&fg=1" target="_blank" >Politicas de privacidad</a></label>

                {/* Activate button */}
                {(Object.keys(inputState).length === 7) && (this.state.form['Privacy'])
                    ? <GeneralBtn
                        name="Enviar"
                        type="submit"
                        state={this.state}
                        inState=""
                        onClick={this.props.onClick}
                        />
                    : <GeneralBtn
                        name="Enviar"
                        type="submit"
                        state={this.state}
                        inState="disabled"
                        onClick={this.props.onClick}
                        />
                }
            </div>
        );
    }
}

export default FormInput;