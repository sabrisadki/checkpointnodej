const prompt = require("prompt-sync")({sigint:true})
// // require it's the same thig as import fi react , 
let command =' ';
let notes=[];

// // ici on va faire des unctions ui vont faire les modif 3al otes 

while (command !== "exit") {

    console.log('"1-list all note')
    console.log('"2-write a note')
    console.log('"3-remove anote ')
    console.log('"4-read a note ')
command = prompt('type in the number of the option you want to run ');

if (command == '1') {
    // we will define it later 
   notes.forEach(element => {console.log('title',element.title);console.log('\n')});

} else if (command == '2'){
    // it will make like a copi then add the note bihc nkhaliw el notes ndhifa
let title = prompt('type o, the title of the new note');
let description = prompt('type the description of the note ');
let newNote={
    title,description
};

notes=[...notes,newNote];

}else if (command == '3'){
    // it will make like a copi then add the note bihc nkhaliw el notes ndhifa
let title = prompt('type in the title of the note to delete ');
notes= notes.filter(e=> e.title !== title);

}else if (command == '4'){
    // it will make like a copi then add the note bihc nkhaliw el notes ndhifa
let title = prompt('type in the title of the note to read ');
notes = notes.find(e=> e.title === title);
console.log('title', notes.title);
console.log('description',notes.description);}

}