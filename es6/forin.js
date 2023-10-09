var names=['Abhishek','Karan','Divya','Priya','Puneet']

/*
for(var i=0;i<names.length;i++){
    console.log(i,names[i])
}
*/
//returns the indexes of an array
for(var i in names){
    console.log(i,names[i])//0-4
}