import React from 'react';

const Table = ({ data }) => {
    console.log(data);
    return (
        <div className="content-form">
            <h2>Profile Data</h2>
            <div className="table-overflow">
                <table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Education</th>
                            <th>Current Studing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length ? data.map((record, index) => (
                            <tr key={record.index + 1}>
                                <td>{record.name}</td>
                                <td>{record.email}</td>
                                <td>{record.eduselect}</td>
                                <td>{record.studying ? 'Yes' : 'No'}</td>
                            </tr>
                        )) : <tr><td>No Data Found</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
