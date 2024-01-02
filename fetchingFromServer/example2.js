// Specify the API endpoint for user data
const apiUrl = 'https://dummyjson.com/products/1';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    console.log('response.ok', response.ok)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });