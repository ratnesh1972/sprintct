import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <div className="content-links">
            {/* Links */}
            <Link to="/add" className="link">Add New Record</Link>
            {/* Form */}
            <Link to="/view" className="link">View Record</Link>
        </div>
    )
}

export default Links
