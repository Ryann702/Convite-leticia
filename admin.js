// Troque aqui para criar novos convites
const EVENTO_ID = "festa-leticia";

// Cole suas chaves do Firebase abaixo
const firebaseConfig = {
  apiKey: "AIzaSyD5LMXAiGrl2tFewsGJQpYI55aNoV0fnYI",
  authDomain: "leticia-marques.firebaseapp.com",
  projectId: "leticia-marques",
  storageBucket: "leticia-marques.appspot.com",
  messagingSenderId: "134824251762",
  appId: "1:134824251762:web:ea01398e9bea79a354cdeb",
  measurementId: "G-FJ24J079W5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const tableBody = document.querySelector('#guests-table tbody');
const countDiv = document.getElementById('confirmed-count');

function atualizarPainel() {
  db.collection('eventos').doc(EVENTO_ID)
    .collection('convidados')
    .onSnapshot(snapshot => {
      let confirmados = 0;
      tableBody.innerHTML = '';
      snapshot.forEach(doc => {
        const { nome, presenca } = doc.data();
        if (presenca === 'sim') confirmados++;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${nome}</td><td>${presenca === 'sim' ? 'Sim' : 'Não'}</td>`;
        tableBody.appendChild(row);
      });
      countDiv.textContent = `Confirmados: ${confirmados}`;
    });
}
atualizarPainel();
