export function Login() {
  return (
    <section>
      <div className="center">
        <h1>Login</h1>
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
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </section>
  );
}
