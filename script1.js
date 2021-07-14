// const div = document.querySelector('.card')

// fetch('https://randomuser.me/api/?results=30')
// .then((resp) => resp.json())
// .then(function (data) {
//     let users = data.results;
//     console.log(users);
//     return users.map((user) => {
//         let firstName = user.name.first;
//         let lastName = user.name.last;
//         let userName = user.login.username;
//         let email = user.email;
//         let city = user.location.city;
//         let nationality = user.location.country;
//         let image = document.getElementsByClassName('card-img');

//         Image.src = user.picture.large;
//         document.getElementsByClassName('#card-name').innerHTML = `${firstName} ${lastName}`;
//     });
// })
// .catch(function (error) {
//     console.log(error);
// });


const section = document.querySelector('#profiles');
console.log(section);

fetch('https://randomuser.me/api/?results=30')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;
    console.log(users);
    return users.map((user) => {

        const img = document.createElement('img');
        let c = `<section class="card" style="width: 18rem;">
        <img src="${user.picture.large}" class="card-img" alt="">
        <div class="card-body">
          <h5 class="card-name">${user.name.first} ${user.name.last}</h5>
          <p class="card-username">${user.login.username}</p>
          <p class="card-email">Email: ${user.email}</p>
          <p class="card-city">City: ${user.location.city}</p>
          <p class="card-nationality">Nationality: ${user.location.country}</p>
        </div>
    </section>`

     section.innerHTML = c;

    });
})
.catch(function (error) {
    console.log(error);
});