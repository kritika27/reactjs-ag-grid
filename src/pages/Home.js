import React, { useState,useContext } from 'react'
import { GridContext } from '../context';

export const Home = () => {
    const {page} =useContext(GridContext);
    const [list, setList] = useState([]);

    
    return (
        <div className='App' test-id="home">
        <h1>Grid Form</h1>
            <form >
                <label>Pagination Page Size:</label>
                <select value={page} >
                    <option value="10">10</option>
                    <option value="100">100</option>
                </select>
            </form>

        </div>
    )
}
