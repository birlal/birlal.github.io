let subTotal = 0;

function addItem() {

    let name = document.getElementById("itemName").value;
    let price = parseFloat(document.getElementById("itemPrice").value);
    let qty = parseInt(document.getElementById("itemQty").value);

    if (!name || price <= 0 || qty <= 0) {
        alert("Please enter valid details");
        return;
    }

    let total = price * qty;
    subTotal += total;

    let table = document.getElementById("billTable").getElementsByTagName("tbody")[0];
    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = price;
    row.insertCell(2).innerHTML = qty;
    row.insertCell(3).innerHTML = total;

    updateBill();

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQty").value = "";
}

function updateBill() {

    let gst = subTotal * 0.13;
    let grandTotal = subTotal + gst;

    document.getElementById("subTotal").innerText = subTotal.toFixed(2);
    document.getElementById("gst").innerText = gst.toFixed(2);
    document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
}

function clearBill() {

    subTotal = 0;
    document.querySelector("#billTable tbody").innerHTML = "";
    updateBill();
}
