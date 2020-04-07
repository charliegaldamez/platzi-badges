import React from 'react';
import Navbar from "../components/Navbar"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

import header from "../images/badge-header.svg"
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component{
    state = {
        form: {
            firstName: "Deafult",
            lastName: "Name",
            email: "",
        }
    }

    handleChange = (e) => {
        // (CLASE) Una forma para arreglar que se inicialice de nuevo el state
        // const nextForm = this.state.form;
        // nextForm[e.target.name] =  e.target.value;

        // this.setState({
        //     form: nextForm
        // });

        // (CLASE) Otra forma de arreglarlo
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstname={this.state.form.firstName} lastname={this.state.form.lastName} />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;