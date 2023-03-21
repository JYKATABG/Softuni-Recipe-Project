export function Register() {
  return (
    <section>
      <div className="center">
        <h1>Register</h1>
        <form method="post">
          <div className="txt_field">
            <input type="email" name="email" required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="password" name="confirmPassword" required />
            <span></span>
            <label>Repeat Password</label>
          </div>
          <input type="submit" value="Register" />
          <div className="signup_link">
            Already a member? <a href="#">Log in</a>
          </div>
        </form>
      </div>
    </section>
  );
}
