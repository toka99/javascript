var fname=document.getElementById("firstname");
var sname=document.getElementById("secondname");

function EnableDisable(fname) {
    //Reference the Button.
    var btn=document.getElementById("btn");
    //Verify the TextBox value.
    if (fname.value.length>=3 && sname.value.length>=3 ) {
        //Enable the TextBox when TextBox has value.
        btn.disabled = false;
        //alert(`welcome ${fname} ${sname}`);
    } else {
        //Disable the TextBox when TextBox is empty.
        btn.disabled = true;
    }
};

btn.onclick = function () {
    let x=fname.value;
    let y=sname.value;
    alert(`welcome ${x} ${y}`);
     };