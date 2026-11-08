

document.getElementById('cbStyleId').addEventListener('change', changeStyle)
document.getElementById('rbOpen').addEventListener('change', changeStatus)
document.getElementById('rbClosed').addEventListener('change', changeStatus)



// Use the table id to locate the element then remove its class so no styling on it
// Or add the class so css can style it
function changeStyle() {
  const cbStyleElem = document.getElementById("cbStyleId")
  if (cbStyleElem.checked) {
    document.getElementById('priceTableId').setAttribute("class", "priceTable")
  } else {
    document.getElementById('priceTableId').removeAttribute("class", "priceTable")
  }
}

function changeStatus() {
  const checkedRadio = document.querySelector('input[name="rbShopStatus"]:checked') // query all the rbShopStatus and return the checked one
  if (checkedRadio.id === "rbOpen") {
    document.getElementById('title').textContent = "Store is open"
  } else {
    document.getElementById('title').textContent = "Store is closed"
  }
}
