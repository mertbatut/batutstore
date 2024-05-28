import React, { useRef, useEffect } from 'react';

const Search = ({ searchTerm, setSearchTerm, onSearch, results }) => {
    const dropdownRef = useRef(null);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value); // Perform search on every input change
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSearchTerm(''); // Clear the search term to close the dropdown
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-component relative" ref={dropdownRef}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                className="rounded-3xl w-36"
            />
            <button onClick={handleSearchClick}><span id='Btn-32'>
                <span id='IconSettings'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span></span></button>
            {searchTerm && (
                <ul className="dropdown absolute left-0 w-36 mt-1 border border-gray-300 bg-white shadow-lg rounded-md">
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <li key={index} className="dropdown-item p-2 hover:bg-gray-100 cursor-pointer">
                                {result.name} - ${result.price}
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item p-2">No search results found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Search;
