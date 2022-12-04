const loadUserData = () => {
    const url = 'https://randomuser.me/api/?results=500';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUserData(data.results))
}
const displayUserData = (userAllData) => {
    const userContainer = document.getElementById('user-container');
    userAllData.forEach(userData => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('col');
        userDiv.innerHTML = `
            <div class="card">
                <img src="${userData.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${userData.name.title}: ${userData.name.first} ${userData.name.last}</h4>
                    <h5 class="card-text">Country: ${userData.location.country}</h5>
                    <p class="card-text">City: ${userData.location.city}</p>
                    <p class="card-text">Postcode: ${userData.location.postcode}</p>
                    <p class="card-text">State: ${userData.location.state}</p>
                    <p class="card-text">Latitude: ${userData.location.coordinates.latitude}</p>
                    <p class="card-text">Longitude: ${userData.location.coordinates.longitude}</p>
                    <p class="card-text">Street: ${userData.location.street.name}, ${userData.location.street.number}</p>
                    <p class="card-text">Timezone: ${userData.location.timezone.description}, ${userData.location.timezone.offset}</p>
                </div>
            </div>
        `
        userContainer.appendChild(userDiv);
        console.log(userData);
    })
}
loadUserData();