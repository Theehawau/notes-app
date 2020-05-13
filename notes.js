const fs = require('fs');
const chalk = require('chalk');
const addnote = function (title, body){
    const notes = readNotes();
    const duplicatenotes = notes.filter((note) =>note.title === title);
    const duplicatenote = notes.find((note) =>note.title === title);
    if (!duplicatenote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('Note saved sucessful'));    
    }else{
        console.log(chalk.bgRed('Title exists'));   
    }
}
const removenote = function (title){
    const notes = readNotes();
    const note = notes.filter(
        function(n){
            return n.title != title
        }
    )
    saveNotes(note)
    if (note.length < notes.length) {
        console.log(chalk.bgGreen(`Note ${title} removed successfully`));
    }else{
        console.log(chalk.bgRed('note not found'));       
    }
}
const listnote = () => {
    const notes = readNotes()
    console.log(chalk.bgMagentaBright('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
}
const readnote = (title) =>{
    const notes = readNotes()
    const Note = notes.find((note) => note.title === title);
    if (Note) {
        console.log(chalk.bgGreen(Note.title));
        console.log(Note.body);    
    }else{
        console.log(chalk.bgRedBright('Note doesnt exist'));   
    }
}
const saveNotes = function(notes){       
        fs.writeFileSync('notes.json', JSON.stringify(notes))   
}
const readNotes = function () {
    try {
        const noteJSON = fs.readFileSync('notes.json').toString();
        return JSON.parse(noteJSON)
    } catch (error) {
        return []
    }
}
module.exports = {
    addnote: addnote,
    removenote: removenote,
    listnote: listnote,
    readnote: readnote
}