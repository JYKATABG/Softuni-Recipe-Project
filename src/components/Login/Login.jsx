import { useForm } from "react-hook-form";
import { useAuthContext } from "../../contexts/UserContext.js";
import { Link } from "react-router-dom";

export function Login() {
  const { onLoginSubmit } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onLoginSubmit(data);
  };

  return (
    <section>
      <div className="center">
        <h1>Login</h1>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="txt_field">
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />
            {/* Email password */}

            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">Email is not valid</p>
            )}

            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 25,
              })}
            />
            {/* Validate password */}

            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="errorMsg">Password must be min 6 characters</p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <p className="errorMsg">Password must be max 25 characters</p>
            )}

            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <Link to={"/register"}>Signup</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
