import React from 'react';

import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {

    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value});
    }

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
                      <input type="text" onChange={this.handleChange} name="firstName" className="form-control" placeholder="Nombre" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Help text</small>
                    </div>
                    <input onClick={this.handleClick} className="btn btn-primary" type="button" value="Save" />
                </form>
            </div>
        );
    }
}

export default BadgeForm;