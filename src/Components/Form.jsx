const Form = (props) => {
    const { inputs, setInputs, errors, setErrors } = props;
  
    const onChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
      validate(name, value);
    };
  
    const validate = (name, value) => {
      let error = "";
      switch (name) {
        case "firstName":
        case "lastName":
          error = value.length < 2 ? "El campo debe tener al menos 2 caracteres" : "";
          break;
        case "email":
          error = value.length < 5 ? "El campo debe tener al menos 5 caracteres" : "";
          break;
        case "password":
          error = value.length < 8 ? "La contraseña debe tener al menos 8 caracteres" : "";
          break;
        case "confirmPassword":
          error = value !== inputs.password ? "Las contraseñas deben coincidir" : "";
          break;
        default:
          break;
      }
      setErrors({
        ...errors,
        [name]: error
      });
    };
  
    return (
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={onChange} type="text" name="firstName" />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={onChange} type="text" name="lastName" />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input onChange={onChange} type="text" name="email" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={onChange} type="password" name="password" />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input onChange={onChange} type="password" name="confirmPassword" />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
      </form>
    );
  };
  
  export default Form;