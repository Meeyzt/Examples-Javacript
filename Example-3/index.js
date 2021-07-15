let data = [];

const fetchData = () => {
  //fetching data from data.json
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      //reading data from json
      data = responseData;

      //show listing options after fetching data
      let filterButton = document.querySelector("#filterButton");
      let dataTable = document.querySelector("#dataTable");
      filterButton.setAttribute("style", "");
      dataTable.setAttribute("style", "");

      //data int HTMl func
      listData(responseData);
    })
    .catch((err) => {
      //Error management
      console.log(err);
    });
};
//Listing
const listData = (data) => {
  let list = document.querySelector(".dataList");
  list.innerHTML = data
    .map((element) => {
      return `
        <tr>
            <th scope="row">${element.name}</th>
            <td>${element.age}</td>
            <td>${element.city}</td>
            <td>${element.isActive}</td>
        </tr>`;
    })
    .join("");
};

//data filter func
const filterData = () => {
  var letter = document.getElementById("txtLetter").value;
  var cbIsActive = document.getElementById("cbIsActive").checked;
  var cbAdult = document.getElementById("cbAdult").checked;
  var filteredData = data;

  if (cbAdult && cbIsActive && letter) {
    filteredData = data.filter(
      (item) =>
        item.age >= 18 &&
        item.isActive === true &&
        item.name.charAt(0).toUpperCase() === letter.toUpperCase()
    );
  } else if (cbAdult && cbIsActive) {
    filteredData = data.filter(
      (item) => item.age >= 18 && item.isActive === true
    );
  } else if (cbAdult && letter) {
    filteredData = data.filter(
      (item) =>
        item.age >= 18 &&
        item.name.charAt(0).toUpperCase() === letter.toUpperCase()
    );
  } else if (cbIsActive && letter) {
    filteredData = data.filter(
      (item) =>
        item.isActive === true &&
        item.name.charAt(0).toUpperCase() === letter.toUpperCase()
    );
  } else if (cbIsActive) {
    filteredData = data.filter((item) => item.isActive === true);
  } else if (cbAdult) {
    filteredData = data.filter((item) => item.age >= 18);
  } else if (letter) {
    filteredData = data.filter(
      (item) => item.name.charAt(0).toUpperCase() === letter.toUpperCase()
    );
  }
  listData(filteredData);
};
