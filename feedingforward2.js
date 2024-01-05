document.getElementById('feedingForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const foodQuantity = document.getElementById('foodQuantity').value;
  const address = document.getElementById('address').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  const dataContainer = document.getElementById('dataContainer');

  // Create a new data box
  const dataBox = document.createElement('div');
  dataBox.className = 'data-box';

  // Display the entered data in the data box
  dataBox.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                      <p><strong>No. of plates:</strong> ${foodQuantity}</p>
                      <p><strong>Address:</strong> ${address}</p>
                      <p><strong>Phone Number:</strong> ${phoneNumber}</p>`;

  // Append the data box to the data container
  dataContainer.appendChild(dataBox);

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('foodQuantity').value = '';
  document.getElementById('address').value = '';
  document.getElementById('phoneNumber').value = '';
});