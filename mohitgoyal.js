//var todos = ["mohit"];
//var want = prompt("'what you want to do?");
//while (want != "quit"){
//    if(want === "new"){
       // var newone = prompt("add a new todo.");
   //     console.log(newone + " added to list");
     //   todos.push(newone);
       
       
 //   }
   // else if(want === "list"){
       // var i =0;
     //   for(i = 0; i <= todos.length; i++){
        //    console.log( i + ":" + todos[i]);
      //  };
        
    //    {
  //  }
    //else if(want === "delete"){
     //   var del = prompt("index you want to delete?");
       // todos.splice(del,1);//for removal of item
       // console.log(del +":" + todos[del] +"has been deleted")
    //}
  //  want = prompt("'what you want to do?");
  
//};
//console.log("you quit the app")
//function printreverse(a){
  //  for(i = a.length - 1;i>=0;i--)
    //{
      //  console.log(a[i]);

    //}
//}
//printreverse(["2","3","4","5"]);

function isuniform(r){
    if(r[0] == r[1] && r[1] == r[2] && r[2] == r[3]){
        return true;
    }
    else{
        return false;
    }
}
isuniform([1,1,1,1]);
isuniform([1,1,2,1]);
isuniform(["a","a","a","a"]);
isuniform(["a","a","b","a"]);

function sumarray(b){
  
   var result = 0;
   for(i=0;i < b.length;i++){
       result = result + b[i];
   }
   return result;
}
sumarray([55,3,10,2]);

function max(r){
    if(r[0] > r[1] && r[0] > r[2] ){
        return r[0];
    }
    else if(r[1] > r[0] && r[1] > r[2]){
        return r[1];
    }
    else{
        return r[2];
    }
}
max([1,7,5]);

var moviesdb = [{
    watching : 'watched',
    name : "in burgers",
    stars : 5
},{
    watching :  "not seen",
    name : "frozen",
    stars : 4.5
},{
    watching : "seen",
    name : "fuck",
    stars : 5
},{
    watching : "not seen",
    name : "go",
    stars : 3.5
}];
for(var i =0;i < moviesdb.length; i++){
    console.log( "you have " + moviesdb[i].watching + "" + moviesdb[i].name + "--" + moviesdb[i].stars);
};
