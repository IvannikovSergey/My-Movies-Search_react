function Header() {
  return (
    <nav className='teal lighten-1'>
      <div className="nav-wrapper ">
        <a href="!#" className="brand-logo"><i className='material-icons'>local_movie</i>
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
