import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0 && lastName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);

      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      let listOfErrors = [];
      console.log(errors);
      console.log(Array.isArray(errors));
      !firstName.length &&
        Array.isArray(errors) &&
        listOfErrors.push("First name is required!");
      !lastName.length &&
        Array.isArray(errors) &&
        listOfErrors.push("Last name is required!");
      console.log(errors.length);
      setErrors(listOfErrors);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
      {errors.map((error, index) => (
        <p key={index} style={{ color: "red" }}>
          {error}
        </p>
      ))}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
