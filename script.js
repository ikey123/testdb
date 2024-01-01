document.getElementById('createTable').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/create-table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const result = await response.json();
      alert('Table created successfully!');
    } else {
      alert('Error creating table: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error creating table: Network error.');
  }
});
