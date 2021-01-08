var mytime=prompt("please enter your time");
let time;
if(mytime==0)
{
    alert(`time is 12 AM`)
}
else if(mytime>=1 && mytime<=12)
{
    alert(`time is ${mytime} AM`)
}
else if(mytime>=13 && mytime<=23)
{
    time=mytime-12;
    alert(`time is ${time} PM`)
}
else
{
alert(`wrong try again`);
}