
 const usersList=document.querySelector("#usersList");
 const getusers=(page=1)=>{
 const url=new URL('https://reqres.in/api/users');
 url.searchParams.set("page",page);
 return fetch(url)
 .then((res) => res.json())
 .then((data)=>data);
};
getusers(1).then((res)=>{
    const users=res.data;
    appendUserstoUsersList(users);
});
function appendUserstoUsersList(users)
{    
        users.forEach(user =>{
        const userCard=getUserCard(user);
        usersList.appendChild(userCard);
    });   
}
function getUserCard(user)
{
    const div=document.createElement("div");
    const img=document.createElement("img");
    const p=document.createElement("p");

    div.classList.add("col-4","p-2");
    img.src=user.avatar;
    p.innerText=`${user.first_name} ${user.last_name}`;

    div.appendChild(img);
    div.appendChild(p);
    return div;
}