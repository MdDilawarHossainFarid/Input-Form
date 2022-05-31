import React from "react";
export default class Inputs extends React.Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    gender: "",
    agree: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckBox = (event) => {
    this.setState({ agree: event.target.checked });
  };

  render() {
    const { name, country, bio, birthDay, agree } = this.state;
    return (
      <>
        <div>
          <input
            type="text"
            className="form-control my-2"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleChange}
          ></input>
          <select
            name="country"
            className="form-control my-2"
            value={country}
            onChange={this.handleChange}
          >
            <option>Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
          </select>
          <textarea
            name="bio"
            className="form-control my-2"
            placeholder="Tell Me About Yourself"
            value={bio}
            onChange={this.handleChange}
          ></textarea>
          <input
            type="date"
            className="form-control my-2"
            name="birthDay"
            value={birthDay}
            onChange={this.handleChange}
          ></input>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              className="form-check-input my-2"
              onChange={this.handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              className="form-check-input  my-2"
              onChange={this.handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="Other"
              className="form-check-input my-2"
              onChange={this.handleChange}
            />
            Other
          </div>
          <div>
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              className="form-check-input  "
              onChange={this.handleCheckBox}
            />
            I agree to all the terms and conditions
          </div>
          <button onClick={() => console.log(this.state)}>Show Data</button>
        </div>
      </>
    );
  }
}
