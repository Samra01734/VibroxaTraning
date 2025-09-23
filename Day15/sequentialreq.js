async function fetchUserPosts() {
  try {
    // Step 1: Fetch users
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await userRes.json();

    const firstUserId = users[0].id;

    // Step 2: Fetch posts of first user
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`);
    const posts = await postRes.json();

    console.log(`Posts by ${users[0].name}:`);
    posts.forEach(post => console.log(post.title));
  } catch (error) {
    console.error("Error fetching user posts:", error);
  }
}

fetchUserPosts();
