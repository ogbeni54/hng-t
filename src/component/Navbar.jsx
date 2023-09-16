import React from 'react'
import './Navbar.css'

const Navbar = ({fetchMovies, setSearchKey, searchKey}) => {
  return (
    <div>
      <div className="main">
        <div className="logo_t">
          <img src="./Assets/tv.png" alt="" />

          <span className="title">MovieBox</span>
        </div>
        <div className="search">
          <form className="form"  onSubmit={fetchMovies}>
            <input
              className="search"
              type="text"
              id="search"
              placeholder="What do you want to watch"
              onInput={(event) => {
                setSearchKey(event.target.value);
              }}
            />
            <button className="submit-search" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="sign">
          <p>Sign in</p>
          <img src="./Assets/Menu.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar
