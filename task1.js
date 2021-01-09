let user1 = {
    name: "toka",
    age: 21,
    ID: 234
    };
    
//console.log(user);
let user2 = {
    class : "A"
};
//***************************************************************************************** 
Object.assign(user2,user1);
//console.log(user2);
//***************************************************************************************** 
for (const [key, value] of Object.entries(user2)) {
    //console.log(`${key}: ${value}`);
  }
//***************************************************************************************** 
  //console.log(Object.values(user2));
//***************************************************************************************** 
  const descriptor1 = Object.getOwnPropertyDescriptor(user2, 'ID');
  //console.log(descriptor1.configurable);
  //console.log(descriptor1.value);
//***************************************************************************************** 
  //console.log(Object.isExtensible(user2));
  Object.preventExtensions(user2);
  //console.log(Object.isExtensible(user2));
//***************************************************************************************** 
  //console.log(Object.keys(user2));
//***************************************************************************************** 
 // console.log(Object.isFrozen(user2));
  Object.freeze(user2);
  //console.log(Object.isFrozen(user2));
//***************************************************************************************** 
  //console.log(Object.getOwnPropertyNames(user2));
//***************************************************************************************** 
  let user3 =
  {}
  user3.property1=60;
  //console.log(user3.hasOwnProperty('property1'));
  //console.log(user3.hasOwnProperty('toString'));
 //***************************************************************************************** 
  let user4 =
  {}
  Object.preventExtensions(user4);
  try {
    Object.defineProperty(user4, 'property1', {
      value: 42
    });
  } catch (e) {
    console.log(e);
  }
