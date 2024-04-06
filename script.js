"use strict";
console.log("Zadatak 4");

const studenti = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 3,
      maternji_jezik: 1,
      engleski_jezik: 1,
      biologija: 1,
      likovna_kultura: 1,
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 2,
      biologija: 5,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 1,
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    pol: "muški",
    ocjene: {
      matematika: 2,
      maternji_jezik: 4,
      engleski_jezik: 1,
      biologija: 3,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    pol: "ženski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    pol: "muški",
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    pol: "ženski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    pol: "muški",
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
  },
];
// var prosjek;
// studenti[1].prosjek = 1;
// console.log(studenti[1]);

// var izracunajProsjek = (ocjene) => {
//   var prosjek = ocjene.sum / ocjene.lenght;
//   return prosjek;
// };
// console.log(izracunajProsjek(studenti[1].ocjene));
// var anaOcjene = studenti[1].ocjene;
// console.log(anaOcjene);
// let sum = 0;
// let deviden = 0;
// for (var i in anaOcjene) {
//   console.log(anaOcjene[i]);
//   sum += anaOcjene[i];
//   deviden += 1;
// }
// var prosjek = sum / deviden;
// studenti[1].prosjek = prosjek;
// console.log(sum, deviden, prosjek);
// console.log(studenti[1]);
// studenti[1].prosjek;
// for (let i = 0; i < studenti.length; i++) {
//   var sumaOcjena = studenti[i].ocjene;
//   let sum = 0;
//   let deviden = 0;
//   for (var y in sumaOcjena) {
//     // console.log(sumaOcjena[y]);
//     sum += sumaOcjena[y];
//     deviden += 1;
//   }
//   var prosjek = sum / deviden;
//   studenti[i].prosjek = prosjek;
//   //   console.log(sum, deviden, prosjek);
//   console.log(studenti[i]);
//   console.log(studenti[i].prosjek);
// }

//------------------Napriviti da radi nezavisno od broja predmeta, trenutno racuna broj predmeta??---------------------
// const izracunajProsjek = (student) => {
//   let sum = 0;
//   let deviden = 0;
//   for (var i in student.ocjene) {
//     sum += student.ocjene[i];
//     deviden++;
//   }
//   var prosjek = sum / deviden;
//   student.prosjek = prosjek;
//   console.log(student.prosjek, sum, deviden);
//   for (var y in student) {
//     console.log(student[y].ime + " ima prosjek " + student[y].prosjek);
//   }
//   console.log(student.prosjek);
// };
const izracunajProsjek = (student) => {
  let sum = 0;
  let count = 0;
  for (let i in student.ocjene) {
    sum += student.ocjene[i];
    count++;
  }
  const prosjek = sum / count;
  student.prosjek = prosjek;
  console.log(student.prosjek);
  return student;
};
for (let i = 0; i < studenti.length; i++) {
  izracunajProsjek(studenti[i]);
}

//---------------------------------------------------------------------------------------------------------------------------
for (let i = 0; i < studenti.length; i++) {
  var sumaOcjena = studenti[i].ocjene;
  let sum = 0;
  let deviden = 0;
  for (var y in sumaOcjena) {
    sum += sumaOcjena[y];
    deviden += 1;
  }
  var prosjek = sum / deviden;
  var uspjeh = "Odlican";
  if (prosjek <= 4.5 && prosjek >= 3.5) {
    uspjeh = "Vrlodobar";
  } else if (prosjek <= 3.5 && prosjek >= 2.5) {
    uspjeh = "Dobar";
  } else if (prosjek <= 2.5 && prosjek >= 1.5) {
    uspjeh = "Dovoljan";
  } else if (prosjek <= 1.5) {
    uspjeh = "Nedovoljan";
  }
  studenti[i].uspjeh = uspjeh;
  studenti[i].prosjek = prosjek;
  console.log(
    `${studenti[i].ime} ${studenti[i].prezime} je ${studenti[i].uspjeh} sa prosjekom ${studenti[i].prosjek}`
  );
}

//---------------------------------------------------------------------------------------------------------------------------
const statistikaUspjeha = (student) => {
  var uspjesi = {
    odlican: 0,
    vrlodobar: 0,
    dobar: 0,
    dovoljan: 0,
    nedovoljan: 0,
  };
  for (var i in student) {
    if (student[i].uspjeh == "Odlican") {
      uspjesi.odlican++;
    } else if (student[i].uspjeh == "Vrlodobar") {
      uspjesi.vrlodobar++;
    } else if (student[i].uspjeh == "Dobar") {
      uspjesi.dobar++;
    } else if (student[i].uspjeh == "Dovoljan") {
      uspjesi.dovoljan++;
    } else if (student[i].uspjeh == "Nedovoljan") {
      uspjesi.nedovoljan++;
    }
  }
  return uspjesi;
};
console.log(statistikaUspjeha(studenti));

//---------------------------------------------------------------------------------------------------------------------------
// for (var i = 0; i < studenti.length - 1; i++) {
//   //   var prezimena = studenti[i].prezime.localeCompare(studenti[i + 1].prezime);
//   //   studenti.sort((studenti[i],studenti[i+1])=>studenti[i].prezime.localeCompare(studenti[i + 1].prezime));
//   studenti.sort((a, b) => a.prezime.localeCompare(b.prezime));
//   console.log(studenti[i]);
// }

const sortirajUcenike = (student) => {
  student.sort((a, b) => a.prezime.localeCompare(b.prezime));
  for (var i = 0; i < student.length; i++) {
    console.log(`${student[i].ime} ${student[i].prezime}`);
  }
};
sortirajUcenike(studenti);
