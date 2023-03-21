export function Header() {
  return (
    <header>
      <div className="container">
        <h1>HANSA</h1>
        <div className="navbar">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/catalog">CATALOG</a>
            </li>
            <li>
              <a href="/create-recipe">CREATE RECIPE</a>
            </li>
            <li>
              <a href="/login">LOG IN</a>
            </li>
            <li>
              <a className="reservation" href="/register">
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
