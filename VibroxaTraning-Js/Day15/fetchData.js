async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();

