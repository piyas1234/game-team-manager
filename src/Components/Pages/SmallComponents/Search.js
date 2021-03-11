import React from 'react';

const Search = () => {
    return (
        <div>
            <div className="d-flex col-md-8 offset-md-2 mt-3">
                <input placeholder="#search your Favourite Team" className="form-control "  ></input>
                <button className="btn btn-sm btn-success ml-2" type="submit">Search</button>
            </div>
        </div>
    );
};

export default Search;