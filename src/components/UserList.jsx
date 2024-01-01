import React from 'react';

const UserList = ({ userList }) => {
    return (
        <div>
            <h2>User List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.userName}</td>
                            <td>{user.age} years old</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
