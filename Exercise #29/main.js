// Function to fetch JSON data from a file
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("data.json")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch JSON data");
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 2000);
    });
}

// Call the function
fetchData()
    .then(data => {
        console.log("JSON Data:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Other code runs while waiting
console.log("Fetching data... Please wait.");
console.log("This code runs without waiting for the fetch!");