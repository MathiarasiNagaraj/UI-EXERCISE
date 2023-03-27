$.ajax("/assets/locations.json", {
  // if success send that to another function
  success: function (data) {
    setTable(data);
  },
});
$(function () {
  $("#tabs-1").tabs();
});
$(function () {
  $("#accordion-1").accordion({
    active: true,
  });
});

function setTable(locations) {
    let flag = {
        "United States": "assets/images/UnitedState.png",
        "India": "assets/images/India.png",
        "Canada": "assets/images/Canada.png"
  }
  let tab4 = $("#tabs-4");
    let tableStructure = $("<table></table>");
    tableStructure.addClass("table");
    tableStructure.attr("cellspacing", 0);
  for (let data of locations) {
      let row = $(`<tr>
        <td><img src=${flag[data.country]}  alt=${data.country} /></td>
        <td>${data.state}</td>
        <td>${data.city}</td>
        <td>${data.contact}</td>
        </tr>`);
        console.log(row)
   row.appendTo(tableStructure);
  }
    console.log(tableStructure)
  tab4.append(tableStructure);
}
