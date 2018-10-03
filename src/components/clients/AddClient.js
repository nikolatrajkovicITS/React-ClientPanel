import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddClient extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form>
              <div className="card-header">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  minLength="2"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClient;
