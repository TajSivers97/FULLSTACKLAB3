const moment = require('moment');

const getCurrentDate = () => {
    let wrapped = moment().format('LLLL'); 
    console.log(wrapped);
}

getCurrentDate();