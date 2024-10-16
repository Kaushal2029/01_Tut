import React, { useState } from "react";
import "../Auth/Register.css";
import { Navigate, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    nName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    mobile: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if each field is filled
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "*";
      }
    });

    // Additional validations
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      navigate("/home", { state: { formData } });
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      fname: "",
      lname: "",
      nName: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      mobile: "",
      address: "",
    });
    setErrors({});
  };

  return (
    <div className="container">
      <h1>
        <u>Registration Form</u>
      </h1>
      <form id="register-form" onSubmit={handleSubmit} onReset={handleReset}>
        <table className="Register-form" align="center">
          <tbody>
            <tr>
              <th>
                <label>First Name</label>
              </th>
              <td>
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && <span>{errors.fname}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Last Name</label>
              </th>
              <td>
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
                {errors.lname && <span>{errors.lname}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Nickname</label>
              </th>
              <td>
                <input
                  type="text"
                  name="nName"
                  value={formData.nName}
                  onChange={handleChange}
                />
                {errors.nName && <span>{errors.nName}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Email</label>
              </th>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Password</label>
              </th>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Date of Birth</label>
              </th>
              <td>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dob && <span>{errors.dob}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Gender</label>
              </th>
              <td>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span>{errors.gender}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile</label>
              </th>
              <td>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <span>{errors.mobile}</span>}
              </td>
            </tr>
            <tr>
              <th>
                <label>Address</label>
              </th>
              <td>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <span>{errors.address}</span>}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Register</button>
                <button type="reset">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default RegistrationForm;
