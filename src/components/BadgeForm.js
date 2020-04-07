import React from 'react';

import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
    // Importante inicializar nuestro state, si vamos a leerlo en otros lugares
    // state = {

    // };

    handleClick = (e) => {
        console.log("Button clicked");
    }

    render() {
        return(
            <div className="BadgeForm">
                <h1>New Attendants</h1>
                <form>
                    <div className="form-group">
                      <label>Firstname</label>
                      <input type="text" onChange={this.props.onChange} name="firstName" className="form-control" placeholder="Nombre" value = {this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                      <label>Lastname</label>
                      <input type="text" onChange={this.props.onChange} name="lastName" className="form-control" placeholder="Apellido" value = {this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" onChange={this.props.onChange} name="email" className="form-control" placeholder="Email" value = {this.props.formValues.email} />
                    </div>
                    <input onClick={this.handleClick} className="btn btn-primary" type="button" value="Save" />
                </form>
            </div>
        );
    }
}

export default BadgeForm;