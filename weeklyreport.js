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
}

// ... (keep the rest of the code unchanged)
