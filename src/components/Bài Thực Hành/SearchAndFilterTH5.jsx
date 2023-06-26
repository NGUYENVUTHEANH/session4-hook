import React, { useState } from 'react'

function SearchAndFilterTH5() {
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([
        { name: 'Key Bin', age: 20 },
        { name: 'Tôi Vô Hình', age: 23 },
        { name: 'Thế Anh', age: 24 },
        { name: 'Clone', age: 21 },
    ]);
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    const filteradData = data.filter(
        (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
    return (
        <div>
            <input type="text" value={filter} onChange={handleFilterChange} />
            <ul>
                {filteradData.map((item, index) => (
                    <li key={index}><a href="">{item.name} ; {item.age}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchAndFilterTH5