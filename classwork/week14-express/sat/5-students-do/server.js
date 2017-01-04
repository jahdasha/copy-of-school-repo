var orm = require('./config/orm.js');

/* The following commands will run every time once the Node server is started.*/

// #1
//console log all the party_name's
//select(whatToSelect, tableInput); these are the arguments of the function in the orm file
//1st line to run in this file
//orm.select('party_name', 'parties');

// #2
//console log all the client_name's
//select(whatToSelect, tableInput);
//2nd line to run in this file
//orm.select('client_name', 'clients');

// #3
//console log all the parties that have a party-type of grown-up
//selectWhere(tableInput, colToSearch, valOfCol)
//3rd  line to run in this file
//orm.selectWhere('parties', 'party_type', 'grown-up');

// #4
//console log the client who has the most parties
//leftJoin(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol)
//4th  line to run in this file
orm.leftJoin('*', 'clients', 'parties', 'id', 'client_id');
