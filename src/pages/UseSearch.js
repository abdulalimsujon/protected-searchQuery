import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const UseSearch = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState('');


    const hundleForm = (e) => {
        e.preventDefault();

        setSearchParams({ name: name });


    }
    return (
        <div>

            <form onSubmit={hundleForm}>
                <label>Enter your Id</label>

                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button type='submit' >Submit</button>

            </form>
            <h1>The params is {name}</h1>


        </div>
    );
};

export default UseSearch;