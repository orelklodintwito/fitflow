// src/components/Header.jsx
function Header({ page, setPage }) {
  return (
    <header className="header">
      <div className="logo">FitFlow</div>

      <nav className="nav">
        <button
          className={page === "home" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={page === "challenge" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("challenge")}
        >
          Create Challenge
        </button>

        <button
          className={page === "food" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("food")}
        >
          Food Search
        </button>

        {/* ⭐ הכפתור החדש: Update Data ⭐ */}
        <button
          className={page === "update" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("update")}
        >
          Update Data
        </button>
      </nav>
    </header>
  );
}

export default Header;
