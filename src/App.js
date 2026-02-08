import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUser] = useState([]);
  const tete = ["nom", "email", "phone"];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(JSON.stringify(users[0]));

  return (
    <div className="App">
      <header>
        <table>
          <thead>
            <tr>
              {tete.map((tet) => (
                <th scope="row">{tet}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
