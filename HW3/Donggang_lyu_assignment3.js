function makeTh() {
    let list = document.getElementById('thList');
    let array = ['Student Name', 'Age', 'Phone', 'Address'];
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('th');
        item.appendChild(document.createTextNode(array[i]));

        list.appendChild(item);
    }
    return list;
};
makeTh();

function makeTd() {
    let tableContent= [ 
        { 'Student Name': 'John', Age: 19,Phone: '455 - 983 - 0903', Address: '123 Ave, San Francisco, CA, 94011'},
        {  'Student Name': 'Alex',  Age: 21,  Phone: '455 - 983 - 0912',  Address: '456 Rd, San Francisco, CA, 94012',  },
        { 'Student Name': 'Josh',  Age: 22,  Phone: '455 - 345 - 0912', Address: '789 Dr, Newark, CA, 94016', },
        {  'Student Name': 'Matt', Age: 23,  Phone: '321 - 345 - 0912',  Address: '223 Dr, Sunnyvale, CA, 94016' },
]
let listZ = document.getElementById('table');
for (let i = 0; i< tableContent.length; i++) {
    let list = document.createElement('tr');
    let tdL1 = document.createElement('td');
    let tdL2 = document.createElement('td');
    let tdL3 = document.createElement('td');
    let tdL4 = document.createElement('td');
    //maps 
    tdL1.textContent = tableContent[i]["Student Name"];
    tdL2.textContent = tableContent[i].Age;
    tdL3.textContent = tableContent[i].Phone;
    tdL4.textContent = tableContent[i].Address;
    list.appendChild(tdL1);
    list.appendChild(tdL2);
    list.appendChild(tdL3);
    list.appendChild(tdL4);
    listZ.appendChild(list);
}
return listZ;
};

makeTd();


function makeUl() {
    let list = document.getElementById('foo');
    let array = ['HTML', 'JavaScript', 'CSS', 'React', 'Reduce', 'Java'];
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
};
let array = ['HTML', 'JavaScript', 'CSS', 'React', 'Java'];
let list = document.getElementById('foo');
array.forEach(function (ele)  {
  let item = document.createElement('li');
  item.appendChild(document.createTextNode(ele));
  list.appendChild(item);
});
//foreach and maps


function makeOl () {
    let list = document.getElementById('sortedList');
    let array = ['HTML', 'JavaScript', 'CSS', 'React', 'Reduce', 'Java'];
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
};
makeOl();

function makeSelect() {
    let selectList = document.getElementById('select1');
    const dropDownList = [
        { value: 'newark', content: 'Newark' },
        { value: 'santaClara', content: 'Santa Clara' },
        { value: 'unionCity', content: 'Union City' },
        { value: 'albany', content: 'Albany' },
        { value: 'dalyCity', content: 'Daly City' },
        { value: 'sanJose', content: 'San Jose' },
    ];
    for (let i = 0; i< dropDownList.length; i++) {
        let item = document.createElement('option');
        item.value = dropDownList[i].value;
        item.appendChild(document.createTextNode(dropDownList[i].content));
        selectList.appendChild(item);
    }
    return selectList;

};
makeSelect();
 
