import React from "react";
import styles from "./TestComponent.module.scss";

class TestComponent extends React.Component {
  #nameRegExp = /^([А-Яа-яё]{2,24}|[A-Za-z]{2,24})$/;
  #emailRegExp = /.+@.+\..+/;

  state = {
    firstName: "",
    lastName: "",
    email: "",
    isFirstNameValid: false,
    isLastNameValid: false,
    isEmailValid: false,
  };

  handleFirstNameOnChange(e) {
    const isValid = this.#nameRegExp.test(e.target.value);
    this.setState({ firstName: e.target.value, isFirstNameValid: isValid });
  }

  handleLastNameOnChange(e) {
    const isValid = this.#nameRegExp.test(e.target.value);
    this.setState({ lastName: e.target.value, isLastNameValid: isValid });
  }

  handleEmailOnChange(e) {
    const isValid = this.#emailRegExp.test(e.target.value);
    this.setState({ email: e.target.value, isEmailValid: isValid });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isFirstNameValid && this.state.isLastNameValid && this.state.isEmailValid) {
      console.log("submit success");
    }
  }
  render() {
    return (
      <div className={styles.testComponent}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className={styles.formLine}>
            <label htmlFor="firstName" className={styles.labelTxt}>
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={`${styles.inputTxt} ${!this.state.isFirstNameValid && !!this.state.firstName ? styles.inputTxtError : ""}`}
              value={this.state.firstName}
              onChange={(e) => this.handleFirstNameOnChange(e)}
            />
          </div>
          <div className={styles.formLine}>
            <label htmlFor="lastName" className={styles.labelTxt}>
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={`${styles.inputTxt} ${!this.state.isLastNameValid && !!this.state.lastName ? styles.inputTxtError : ""}`}
              value={this.state.lastName}
              onChange={(e) => this.handleLastNameOnChange(e)}
            />
          </div>
          <div className={styles.formLine}>
            <label htmlFor="email" className={styles.labelTxt}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={`${styles.inputTxt} ${!this.state.isEmailValid && !!this.state.email ? styles.inputTxtError : ""}`}
              value={this.state.email}
              onChange={(e) => this.handleEmailOnChange(e)}
            />
          </div>
          <div className={styles.formLine}>
            <input type="submit" className={styles.submitButton} value="Send" />
          </div>
        </form>
        <p className={styles.legend}>* All fields are required</p>
      </div>
    );
  }
}

export default TestComponent;
