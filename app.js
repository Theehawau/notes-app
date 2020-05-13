// const validator = require('validator')
// console.log(validator.isEmail('toyinhawau@gmail.com'));
const yargs = require('yargs');
const notes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Adding to list',
    builder: {
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addnote(argv.title, argv.body);   
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing from list',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removenote(argv.title)        
    }
})
yargs.command({
    command: 'list',
    handler: () => {
            notes.listnote()    
    }
})
yargs.command({
    command: 'read',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readnote(argv.title)       
    }
})

yargs.parse();
