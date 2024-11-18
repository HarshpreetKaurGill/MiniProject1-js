const getFetchBtn = document.getElementById("fetchButton");
const getAsyncBtn = document.getElementById("asyncButton");

// Function to get data using fetch
function getDataFetch() {
    alert("fetch data!");
    const apiURL = 'http://localhost:3000/cars';

    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            // Find the car with ID 2 (Lamborghini)
            const car = data.find(car => car.id === 2); 
            
            if (car) {
                const carContent = `
                    <h3>${car.name}</h3>
                    <p><strong>Model:</strong> ${car.model}</p>
                    <p><strong>Price:</strong> ${car.price}</p>
                    <img src="images/car1.jpg" alt="${car.name}" style="max-width: 300px; border: 1px solid #ddd; border-radius: 8px;" />
                `;
                document.getElementById("responseData").innerHTML = carContent;
            } else {
                document.getElementById("responseData").textContent = 'Car with ID 2 not found.';
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            document.getElementById("responseData").textContent = 'Failed to load data.';
        });
}

// Function to get data using async/await
async function getDataAsync() {
    const apiURL = 'http://localhost:3000/cars';

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        
        console.log(data); // Handle the data (you can replace this with logic to display it on the page)
        
        let ulContent = "<ul>";
        
        // Loop through the data and display each car in the list
        data.forEach(car => {
            ulContent += `
                <li>
                    <h3>${car.name}</h3>
                    <p><strong>Model:</strong> ${car.model}</p>
                    <p><strong>Price:</strong> ${car.price}</p>
                </li>
            `;
        });

        // Close the <ul> tag
        ulContent += "</ul>";
        
        // Display the content inside the #responseData div
        document.getElementById("responseData").innerHTML = ulContent;

    }
     catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById("responseData").textContent = 'Failed to load data.';
    }
}

// Event listeners for buttons
getFetchBtn.addEventListener('click', getDataFetch);
getAsyncBtn.addEventListener('click', getDataAsync);
