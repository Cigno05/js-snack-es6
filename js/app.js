console.log('JS funziona');

console.log('QUI INIZIA LO SNACK 1');

const vipTable = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// console.log(vipTable)
let guestName;
let guestSeat;


const vipSchedule = vipTable.map((guestName, i) => {
    // console.log(guestName)
    const guestSeat = i + 1;
    // console.log(guestSeat);

    /*
    return {
        nomeTavolo:'Tavolo VIP',
        nomeOspite: guestName,
        posto: guestSeat
    };
    */
   return vipTableSeats('Tavolo VIP', guestName, guestSeat);
   
})
console.log(vipSchedule)




function vipTableSeats(table, guest, position) {
    const guestSchedule = {
        nomeTavolo: table,
        nomeOspite: guest,
        posto: position
    }

    return guestSchedule
}



console.log('QUI FINISCE LO SNACK 1');
console.log('QUI INIZIA LO SNACK 2');




































































































