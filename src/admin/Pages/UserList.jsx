import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const UserList = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <div className="table-responsive connect  minheight">
        <h2 className="playfair">Users List</h2>
      <Table striped bordered hover size="sm" className="align-middle">
        <thead>
          <tr className="playfair">
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody className="spacemono">
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id || index}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;