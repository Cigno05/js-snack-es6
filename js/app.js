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

const newClassroom = [];

const student213 = studentSchedule(213, 'Marco della Rovere', 78);
const student110 = studentSchedule(110, 'Paola cortellessa', 96);
const student250 = studentSchedule(250, 'Andrea Mentagna', 48);
const student145 = studentSchedule(145, 'Gaia Borromini', 68);
const student196 = studentSchedule(193, 'Luigi Grimaldello', 68);
const student102 = studentSchedule(102, 'Piero della Francescca', 50);
const student120 = studentSchedule(120, 'Francescadella Polenta', 84);

newClassroom.push(student213, student110, student250, student145, student196, student102, student120)
console.log(newClassroom)

const studentsvotesOver70 = [];

for (let i = 0; i < newClassroom.length; i++) {
    
    if (newClassroom[i].grades >= 70) {
        studentsvotesOver70.push(newClassroom[i])
    }
}
console.log('Studenti con grades over 70', studentsvotesOver70);
const studentsIdOver120OfOver70 = [];

for (let i = 0; i < studentsvotesOver70.length; i++) {
    
    if (studentsvotesOver70[i].id >= 120) {
        studentsIdOver120OfOver70.push(studentsvotesOver70[i])
    }
}
console.log('Studenti con id over 120 tra gli studenti con grades over 70', studentsIdOver120OfOver70);










function studentSchedule(id, name, sumVotes) {
    const studentPlate = {
        id: id,
        nome: name.toUpperCase(),
        grades: sumVotes,
    }
    return studentPlate
}

































































































