const user =
[
    {
        "_id": "6271fd40fe5c58d4cbd3a72f",
        "index": 0,
        "guid": "60f843d2-1b6b-4536-b421-e5df1c4ab735",
        "isActive": true,
        "balance": "$2,534.11",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "brown",
        "name": "Miranda Nguyen",
        "gender": "male",
        "company": "ZENTIA",
        "email": "mirandanguyen@zentia.com",
        "phone": "+1 (833) 466-3207",
        "address": "198 Dank Court, Hartsville/Hartley, Indiana, 8416",
        "about": "Consectetur proident anim do commodo ipsum. Elit consectetur irure dolore voluptate. Enim aute voluptate et qui do. Eu pariatur laboris labore esse enim reprehenderit mollit ullamco fugiat. Laborum sunt veniam consectetur laboris cupidatat. Lorem tempor occaecat labore ut et eiusmod amet.\r\n",
        "registered": "2021-06-16T11:50:54 -09:00"
    },
    {
        "_id": "6271fd40e30856d15651c60c",
        "index": 1,
        "guid": "ee647592-0647-4ad5-96b1-eb6c06a32dbd",
        "isActive": true,
        "balance": "$2,636.22",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "blue",
        "name": "Florence Flynn",
        "gender": "female",
        "company": "ELENTRIX",
        "email": "florenceflynn@elentrix.com",
        "phone": "+1 (901) 525-3731",
        "address": "246 Billings Place, Brandermill, Guam, 5037",
        "about": "Sint non dolore cupidatat voluptate laboris adipisicing eu quis. Laboris nostrud qui dolor cillum dolor nulla sint culpa est reprehenderit sint ipsum nisi excepteur. Qui cupidatat sint do aliquip ut. Officia est aliquip fugiat ex enim do sunt consequat.\r\n",
        "registered": "2014-12-10T08:44:47 -09:00"
    },
    {
        "_id": "6271fd404394e16d79143873",
        "index": 2,
        "guid": "3d3890ff-8241-4a2b-a361-789e0298817a",
        "isActive": false,
        "balance": "$1,047.32",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Debbie Pratt",
        "gender": "female",
        "company": "OPTIQUE",
        "email": "debbiepratt@optique.com",
        "phone": "+1 (831) 537-3188",
        "address": "737 Quentin Street, Calpine, Louisiana, 9102",
        "about": "Officia nisi labore mollit cupidatat exercitation commodo duis adipisicing officia amet laborum. Nulla qui commodo aliqua reprehenderit dolore cupidatat esse ea pariatur sint ad dolore. Exercitation duis veniam velit occaecat est irure quis labore occaecat.\r\n",
        "registered": "2016-09-19T10:00:38 -09:00"
    }
]

// 1. user??? id??? name, age??? ?????? ????????? array??? ??????????????????.
let newArr = user.map((i)=>{
    return {id:i._id, name:i.name, age:i.age}
});

?????????
newArr
(3) [{???}, {???}, {???}]
0: {id: '6271fd40fe5c58d4cbd3a72f', name: 'Miranda Nguyen', age: 27}
1: {id: '6271fd40e30856d15651c60c', name: 'Florence Flynn', age: 35}
2: {id: '6271fd404394e16d79143873', name: 'Debbie Pratt', age: 25}
length: 3
[[Prototype]]: Array(0)

//
//2. user??? age??? 27 ????????? ????????? ???????????? id??? ??????????????????.
let over27 = user.filter(i=>i.age>=27);
//undefined
let ids = over27.map(i=>i._id);
//undefined

//?????????
ids
(2)??['6271fd40fe5c58d4cbd3a72f', '6271fd40e30856d15651c60c']

//
//3. id??? 6271fd40e30856d15651c60c ??? ????????? name??? ??????????????????.
let filterId = user.filter(i=>i._id=='6271fd40e30856d15651c60c');
//undefined

let username = filterId.map(i=>i.name);
//undefined

//?????????
username
['Florence Flynn']

//
//4. (??? ????????????) user??? ?????? ????????? ???????????????.
const arrAge = user.map((i)=>{
    return i.age
});
//undefined

arrAge
(3) [27, 35,25]

const result = arrAge.reduce(function add(sum, cur){
    return sum + cur;
},0);
//undefined

const averAge = result/arrAge.length;
//undefined

//?????????
averAge
29

//
//5. (??? ????????????) user??? ????????? ???????????????.