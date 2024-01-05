// ... (keep the rest of the code unchanged)

async function submitReport(event) {
  event.preventDefault();

  var userId = document.getElementById("userId").value;
  var reportData = document.getElementById("reportData").value;

  var payload = {
    userId: userId,
    reportData: reportData,
  };

  try {
    var response = await fetch("http://localhost:5000/api/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Report submitted successfully!");
    } else {
      alert("Failed to submit the report.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit the report.");
  }
  // ... (keep the rest of the code unchanged)

async function submitReport(event) {
  event.preventDefault();

  var userId = document.getElementById("userId").value;
  var reportData = document.getElementById("reportData").value;

  // Making a POST request using the Fetch API
  const responsePost = await fetch("http://localhost:5000/api/data/" + userId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dishList: reportData }),
  });

  if (!responsePost.ok) {
    console.error("Error submitting data:", responsePost.statusText);
    alert("Failed to submit the report.");
    return;
  }

  // Making a GET request using the Fetch API
  const responseGet = await fetch("http://localhost:5000/api/data/" + userId, {
    method: "GET",
  });

  if (responseGet.ok) {
    const userData = await responseGet.json();
    alert(`Data submitted successfully! User ID: ${userData.userId}, Report Data: ${userData.dishList}`);
  } else {
    alert("Error fetching data. Please try again.");
  }
}

// ... (keep the rest of the code unchanged)

}

// ... (keep the rest of the code unchanged)
