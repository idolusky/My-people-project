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

let users = [{
    Id: 1,
    email: "gary.harper@example.com",
    name: { title: "Mr", first: "Gary", last: "Harper" }
}, {
    Id: 2,
    email: "katrin.rolland@example.com",
    name: { title: "Madame", first: "Katrin", last: "Rolland" }
}, {
    Id: 3,
    email: "clara.cortes@example.com",
    name: { title: "Mrs", first: "Clara", last: "Cortes" }
},
{
    Id: 4,
    email: "songul.platje@example.com",
    name: { title: "Mrs", first: "Songül", last: "Platje" }
},
{
    Id: 5,
    email: "julian.sanz@example.com",
    name: { title: "Mr", first: "Julian", last: "Sanz" }
},
{
    Id: 6,
    email: "minea.hamalainen@example.com",
    name: { title: "Ms", first: "Minea", last: "Hamalainen" }
},
{
    Id: 7,
    email: "tirill.eidem@example.com",
    name: { title: "Mrs", first: "Tirill", last: "Eidem" }
},
{
    Id: 8,
    email: "morris.nelson@example.com",
    name: { title: "Mr", first: "Morris", last: "Nelson" }
},
{
    Id: 9,
    email: "alan.graves@example.com",
    name: { title: "Mr", first: "Alan", last: "Graves" }
},
{
    Id: 10,
    email: "owen.ennis@example.com",
    name: { title: "Mr", first: "Owen", last: "Ennis" }
}
]

const renderPeople = function () {
    const source = $("#users-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({ users: users })
    $('#people').append(newHTML);
}
renderPeople()