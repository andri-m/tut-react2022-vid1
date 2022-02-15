import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      {/* <nav className={style.nav}> */}
      <nav className="nav">
        <img src="./logo192.png" alt="gg" className="nav--logo"></img>
        <h3 className="nav--logo_text">React Facts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>

      </nav>
    </div>
  );
}

export default Navbar;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );