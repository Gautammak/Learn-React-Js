import { useState } from "react";

function LoginForm() {

  // form data state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // error state
  const [errors, setErrors] = useState({});

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // validation function
  const validate = () => {
    let newErrors = {};

    // email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    // password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    // if errors exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      // success
      alert("Login Successful");

      console.log("Form Data:", formData);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>

        <h2>Login Form</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        {errors.email && (
          <p style={styles.error}>{errors.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        {errors.password && (
          <p style={styles.error}>{errors.password}</p>
        )}

        <button type="submit" style={styles.button}>
          Login
        </button>

      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },

  form: {
    width: "300px",
    padding: "75px",
    border: "1px solid gray",
    borderRadius: "10px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
  },

  button: {
    width: "50%",
    padding: "10px",
    marginTop: "15px",
    cursor: "pointer",
    marginLeft:"90px",
  },

  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default LoginForm;