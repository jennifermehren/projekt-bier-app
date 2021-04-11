const Searchbar = () => {
    return ( 
        <div className="searchbar-container">
            <figure className="searchbar">
            <input
            className="input"
            type="text"
            name="searchfield"
            placeholder="search beer"
          ></input>
            </figure>

        </div>
     );
}
 
export default Searchbar;