let age;
let i;
for(i=0;i<100;i++)
{
age=prompt("please enter your age");
if(age<=0 && age!=null)
{
    age=prompt("You write a wrong number please re-write your age")
}

if(age>0)
{
    if(age>=1 && age<=10)
    {
        alert(`welcome child`);
    }
    else if(age>=11 && age<=18)
    {
        alert(`welcome teenager`);
    }
    else if(age>=19 && age<=50)
    {
        alert(`welcome grown up`);
    }
    else if(age>=51)
    {
        alert(`welcome old`);
    }
 
}
else if(age==null)
{
    break;
}

}