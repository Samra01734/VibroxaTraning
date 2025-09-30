// import React from 'react';

// const UsersList = () => {
//   const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Ayesha" },
//     { id: 3, name: "Bilal" },
//   ];

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsersList;

// import React from 'react';

// const FruitsList = () => {
//   const fruits = ["Apple", "Banana", "Orange", "Mango"];

//   return (
//     <div>
//       <h2>Fruits List</h2>
//       <ul>
//         {fruits.map((fruit, index) => (
//           // "key" unique honi chahiye
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FruitsList;


import React, { useState } from "react";

const FruitsAndNumbers = () => {
  // Fruits state
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango"
  ]);

  // Numbers array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  // Delete fruit function
  const deleteFruit = (fruitToDelete) => {
    setFruits(fruits.filter((fruit) => fruit !== fruitToDelete));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Paragraph */}
      <p>
        This is a simple example showing how to render lists with keys, delete
        items, and highlight even numbers in React.
      </p>

      {/* Fruits List */}
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {fruit}{" "}
            <button
              onClick={() => deleteFruit(fruit)}
              style={{
                marginLeft: "10px",
                padding: "4px 8px",
                border: "1px solid red",
                background: "white",
                color: "red",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Numbers List */}
      <h2>Numbers List</h2>
      <ul>
        {numbers.map((num) => (
          <li
            key={num}
            style={{
              fontWeight: num % 2 === 0 ? "bold" : "normal",
              color: num % 2 === 0 ? "blue" : "black"
            }}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsAndNumbers;
