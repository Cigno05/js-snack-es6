console.log('JS funziona');

console.log('QUI INIZIA LO SNACK 1');

const vipTable = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
console.log(vipTable)
let guestName;
let guestSeat;


const vipSchedule = vipTable.map((guestName, i) => {
    // console.log(guestName)
    const guestSeat = i + 1;
    // console.log(guestSeat);

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
//------------------------------------------------------
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
const studentsIdOver120OfOver70 = [];

for (let i = 0; i < newClassroom.length; i++) {

    if (newClassroom[i].grades >= 70) {
        studentsvotesOver70.push(newClassroom[i])
    }
}

for (let i = 0; i < studentsvotesOver70.length; i++) {
    
    if (studentsvotesOver70[i].id >= 120) {
        studentsIdOver120OfOver70.push(studentsvotesOver70[i])
    }
    
}
       
console.log('Studenti con grades over 70', studentsvotesOver70);

console.log('Studenti con id over 120 tra gli studenti con grades over 70', studentsIdOver120OfOver70);


// funzioni

function studentSchedule(id, name, sumVotes) {


    const studentPlate = {
        id: id,
        nome: name.toUpperCase(),
        grades: sumVotes,
    }
    return studentPlate
}

console.log('QUI FINISCE LO SNACK 2');
//------------------------------------------------------
console.log('QUI INIZIA LO SNACK 3');

const bikesArray = [];

const bikeAtala = bikeScheduleElement('Atala', 1100);
const bikeBianchi = bikeScheduleElement('Bianchi', 950);
const bikeColnago = bikeScheduleElement('Colnago', 960)
const bikeLombardo = bikeScheduleElement('Lombardo', 1050)
const bikePinarello = bikeScheduleElement('Pinarello', 1200);

bikesArray.push(bikeAtala, bikeBianchi, bikeColnago, bikeLombardo, bikePinarello);
console.log(bikesArray)

let bikeMinWeight = bikesArray[0]; // il primo paragone è con la prima bici
// let indexMinWeight;

for (let i = 1; i < bikesArray.length; i++) { // il ciclo parte da 1 e no da 0 perchè la prima è il termine di paragone iniziale
    bikeElement = bikesArray[i];
    
    if (bikeElement.weight < bikeMinWeight.weight) {
        bikeMinWeight = bikeElement;
    }

    
}

console.log(bikeMinWeight);

const {name, weight} = bikeMinWeight //destructuring object


console.log(`La bicicletta con il minor peso é marcata ${name} e ha un peso di ${weight}g`);


// Funzioni
function bikeScheduleElement(name, weight) {

    return {
        name: name,
        weight : weight,
    }
}

console.log('QUI FINISCE LO SNACK 3');
//------------------------------------------------------
console.log('QUI INIZIA LO SNACK 4');

const teamsLeague = [];


const lazio = TeamScheduleElement('Lazio', 0,0);
const inter = TeamScheduleElement('Inter', 0, 0);
const juve = TeamScheduleElement('Juventus', 0, 0);
const milan = TeamScheduleElement('Milan', 0, 0);
const bologna = TeamScheduleElement('Bologna', 0, 0);

teamsLeague.push(lazio, inter, juve, milan, bologna);
console.log(teamsLeague)


teamsLeague.forEach((team) => {
    team.fouls = random(50);
    team.points = random(100)
})

const nameFoulsString = teamsLeague.map((team) => {
	const { name, fouls } = team
	return `La squadra ${name} ha subito ${fouls} falli`
})

// const nameFoulsString = teamsLeague.map(({name, fouls}) => {
//     return `La squadra ${name} ha subito ${fouls} falli`
// })

console.log(nameFoulsString);






























// Funzioni
function TeamScheduleElement(name, points, fouls) {

    return {
        name: name,
        points: points,
        fouls: fouls,
    }
}

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}




































































