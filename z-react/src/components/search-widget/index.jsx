import React, {useState} from 'react'
import './index.css'

const SearchWidget = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="container"> 
            <input type="text" className="search"/>
            <button className="btn-search"><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchWidget
