let name1="ahmed";
let phrase="hello";
function printMessage(name)
    {
     this.fun2=function()
     {
         let name1="amr";
         console.log(`${phrase} from second function ${name}`);
     }
     }
    let user=new printMessage("aly");
    user.fun2();
    let user2=new printMessage(name1);
    user2.fun2();
    
     
     