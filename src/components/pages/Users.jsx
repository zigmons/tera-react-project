/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";

import AppLoading from "../organisms/AppLoading";

import UsersListWrapper from "../molecules/UsersListWrapper";

import Default from "../templates/Default";

export default function Users(props) {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>
      </div>
      <UsersListWrapper users={users} />
    </Default>
  );
}
