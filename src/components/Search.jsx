import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState({ type: event.target.dataset.type }, () =>
      this.props.searchMovies(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
              onKeyUp={this.handleKey}
            />
            <button
              className="btn waves-effect waves-light btn-pos"
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              <i className="material-icons left ">search</i>Search
            </button>
            <p>
              <label>
                <input
                  className="with-gap"
                  name="all"
                  type="radio"
                  data-type="all"
                  checked={this.state.type === "all"}
                  onChange={this.handleFilter}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="all"
                  type="radio"
                  data-type="movie"
                  checked={this.state.type === "movie"}
                  onChange={this.handleFilter}
                />
                <span>Movie</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="all"
                  type="radio"
                  data-type="series"
                  checked={this.state.type === "series"}
                  onChange={this.handleFilter}
                />
                <span>Serial</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
