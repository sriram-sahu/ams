// this component is about displaying input fields of student to send email in desktop view
// import react and index.css file to render EachCandidateInputField component
import React, { useState, useEffect } from "react";
import "./index.css";
const EachCandidateInputField = ({ onInputChange, isValidField }) => {
  // inputValues usestate to store name,email,phone and endDate of test of students
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    endDate: "",
  });
  const [validEmail, setValidEmail] = useState(true);
  const [numberError, setNumberError] = useState(false);
  const [nameError, setNameError] = useState(true);

  const validatePhoneNumber = (phoneNumber) => {
    let isValid = false;
    if (phoneNumber.trim(" ").indexOf("+") === -1) {
      const regex =
        /^0[-\s.][6789]{1}[0-9]{9}$|(^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[6-9]{1}[0-9]{3}[-\s\.]?[0-9]{3,6}$)|(^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[6-9]{1}[0-9]{2}[-\s\.]?[0-9]{4,7}$)/im;
      if (phoneNumber.trim(" ")[0] === "0") {
        let index = phoneNumber.trim(" ").indexOf(" ");
        if (index !== -1) {
          phoneNumber = phoneNumber.trim(" ").slice(index + 1);
          let length = phoneNumber.length;
          if (length < 10 || length > 10) {
            isValid = true;
            setNumberError(true);
          } else {
            const regex = /[6789]{1}[0-9]{3}[.\s-]?[0-9]{6}/g;
            if (regex.test(phoneNumber)) {
              isValid = false;
              setNumberError(false);
            } else {
              isValid = true;
              setNumberError(true);
            }
          }
        } else {
          let index = phoneNumber.trim(" ").indexOf("-");
          if (index !== -1) {
            phoneNumber = phoneNumber.trim(" ").slice(index + 1);
            let length = phoneNumber.length;
            if (length < 10 || length > 10) {
              isValid = true;
              setNumberError(true);
            } else {
              const regex = /[6789]{1}[0-9]{3}[.\s-]?[0-9]{6}/g;
              if (regex.test(phoneNumber)) {
                isValid = false;
                setNumberError(false);
              } else {
                isValid = true;
                setNumberError(true);
              }
            }
          } else {
            phoneNumber = phoneNumber.trim(" ").slice(1);
            let length = phoneNumber.length;
            if (length > 10 || length < 10) {
              isValid = true;
              setNumberError(true);
            } else {
              const regex = /[6789]{1}[0-9]{3}[.\s-]?[0-9]{6}/g;
              if (regex.test(phoneNumber)) {
                isValid = false;
                setNumberError(false);
              } else {
                isValid = true;
                setNumberError(true);
              }
            }
          }
        }
      } else {
        if (
          phoneNumber.trim(" ").length < 10 ||
          phoneNumber.trim(" ").length > 10
        ) {
          isValid = true;
          setNumberError(true);
        } else {
          const regex = /[6-9]{1}[0-9]{9}/im;
          if (regex.test(phoneNumber.trim(" "))) {
            isValid = false;
            setNumberError(false);
          } else {
            isValid = true;
            setNumberError(true);
          }
        }
      }
    } else {
      let index = phoneNumber.trim(" ").indexOf(" ");
      if (index !== -1) {
        phoneNumber = phoneNumber.trim(" ").slice(index + 1);
        let length = phoneNumber.length;
        if (length < 10 || length > 10) {
          isValid = true;
          setNumberError(true);
        } else {
          // const regex = /(^[\+]?[(]?[0-9]{1}[)]?[-\s]?[6789]{1}[0-9]{3}[-\s\.]?[0-9]{3,6}$)|(^[\+]?[(]?[0-9]{2}[)]?[-\s]?[6789]{1}[0-9]{3}[-\s\.]?[0-9]{3,6}$)|(^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[6789]{1}[0-9]{3}[-\s\.]?[0-9]{3,6}$)/im;
          const regex = /[6789]{1}[0-9]{3}[.\s-]?[0-9]{6}/g;
          if (regex.test(phoneNumber.trim(" "))) {
            isValid = false;
            setNumberError(false);
          } else {
            isValid = true;
            setNumberError(true);
          }
        }
      } else {
        let index = phoneNumber.trim(" ").indexOf("-");
        phoneNumber = phoneNumber.trim(" ").slice(index + 1);
        let length = phoneNumber.length;
        if (length < 10 || length > 10) {
          isValid = true;
          setNumberError(true);
        } else {
          const regex = /([6789]{1}[0-9]{3}[-\s.]?[0-9]{6})/g;
          if (regex.test(phoneNumber)) {
            isValid = false;
            setNumberError(false);
          } else {
            isValid = true;
            setNumberError(true);
          }
        }
      }
    }
    isValidField(!isValid && nameError && validEmail);
  };
  // below function add's the value with respective field of the candidate
  //it puts previous values the same and add's only active field value
  const handleInputChange = (field, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: value,
    }));
    // checking email field validation
    if (field === "email") {
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/g;
      // const isValid = emailRegex.test(value.trim(" "));
      let isValid = true;
      if (/^[^\s@]+@[a-z]+(.com|.in)$/gi.test(value)) {
        isValid = true;
        setValidEmail(isValid);
      } else {
        isValid = false;
        setValidEmail(isValid);
      }
      setValidEmail(isValid);
      isValidField(isValid && !numberError && nameError);
    }
    if (field === "phone") {
      validatePhoneNumber(value);
      // isValidField(numberError);
    }
    if (field === "name") {
      const nameRegex = /^[0-9]/g;
      const isValid = nameRegex.test(value.trim(" "));
      setNameError(!isValid);
      isValidField(!isValid && !numberError && validEmail);
    }
  };

  useEffect(() => {
    onInputChange(inputValues); // Notify the parent component about the input values
  }, [inputValues]); //  dependency array to run the function when the inputValues changes
  //console.log(inputValues);

  return (
    <div className='bg-each-candidate-field'>
      <div className='each-candidate-subContainer2'>
        <input
          id='outlined-basic-1'
          placeholder='Name'
          variant='outlined'
          className={`custom-input-field ${nameError ? "" : "invalid"}`}
          value={inputValues.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
        />
        <input
          id='outlined-basic-2'
          placeholder='Email'
          variant='outlined'
          className={`custom-input-field ${validEmail ? "" : "invalid"}`}
          value={inputValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
        <input
          id='outlined-basic-3'
          placeholder='Phone'
          variant='outlined'
          className={`custom-input-field ${!numberError ? "" : "invalid"}`}
          value={inputValues.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          required
        />
        <input
          id='outlined-basic-4'
          placeholder='Date'
          type='date'
          variant='outlined'
          className='custom-input-field'
          value={inputValues.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          required
        />
      </div>
      <hr className='horizontal-line' />
    </div>
  );
};
export default EachCandidateInputField;
