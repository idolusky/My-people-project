// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });
$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
        //  for (i = 0; i < 10; i++) {
        // const users = [{
        //     id: data.results[i].login.salt
        //     , email: data.results[i].email
        //     , name: { first: data.results[i].name.first, last: data.results[i].name.last }
        // }]

        const users = data.results.map(u => {
            return {
                id: u.login.salt,
                email: u.email,
                name: {
                    first: u.name.first,
                    last: u.name.last
                }
            }
        })

        console.log(data);
        renderPeople(users);
        // }
    }
});


const renderPeople = function (users) {
    const source = $("#users-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({ users })
    $('#people').append(newHTML);
}
