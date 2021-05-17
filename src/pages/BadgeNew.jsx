// Librarys
import React, { Component } from "react";
// Components
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";
// Images & Css
import header from "../images/platziconf-logo.svg";
import "../components/styles/BadgeNew.css";

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
  }};

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading:true, error: null })
      try {
        await api.badges.create(this.state.form);
        this.setState({ loading:false })
        this.props.history.push('/badges');
      } catch (error) {
        this.setState({ loading:false, error: error })
      }
    };

  render() {
    if (this.state.loading === true) {
      return  <PageLoading />

    }
    return (
      <>
        <div className="BadgeNew__hero">
          <img className="img-fluid BadgeNew__hero-image" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || 'First Name'} 
                lastName={this.state.form.lastName || 'Last Name'}
                email={this.state.form.email || 'Email'}
                jobTitle={this.state.form.jobTitle || 'Job Title'} 
                twitter={this.state.form.twitter || 'Twitter'}
                avatarUrl="https://scontent.fmex10-1.fna.fbcdn.net/v/t1.0-1/p200x200/116807141_1417776975087739_3939471401626540445_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_eui2=AeGwJlM9VYGSoZLMIE6ZvprGjAwNGpWbPe-MDA0alZs976oYsUmVHd1ZFI0uked6UPLtlSM5nnwEpsSKGDjSiPsG&_nc_ohc=5n9E8oar8NEAX_uxySk&_nc_ht=scontent.fmex10-1.fna&tp=6&oh=45cf7d432d6cf4a50401092c99ed5910&oe=5F81802D" 
              />
            </div>
            <div className="col-6">
            <h1>New Attendant</h1>
              <BadgeForm 
                onChange={ this.handleChange } 
                onSubmit={ this.handleSubmit }
                formValues={this.state.form} 
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew;