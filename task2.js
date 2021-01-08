let i,j,count=0;
var mystring=prompt("please enter your string");
const chars = ["a", "e", "o","u","i"];

for(i=0;i<mystring.length;i++)
{
for(j=0;j<chars.length;j++)
{
    if(mystring[i]==chars[j])
    {
        count++
    }
}
}

alert(count);
