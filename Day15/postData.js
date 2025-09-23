async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My New Post",
        body: "This is the body of the post",
        userId: 1
      })
    });

    const result = await response.json();
    console.log("Server Response:", result);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

postData();
