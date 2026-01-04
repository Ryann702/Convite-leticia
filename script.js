// Troque aqui para criar novos convites
const EVENTO_ID = "festa-leticia";

// Cole suas chaves do Firebase abaixo
const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.getElementById('rsvp-form');
const messageDiv = document.getElementById('message');
const countDiv = document.getElementById('confirmed-count');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('guest-name').value.trim();
  const presenca = document.getElementById('attendance').value;
  if (!nome) {
    messageDiv.textContent = 'Digite seu nome.';
    return;
  }
  try {
    // Verifica se já existe confirmação para este nome
    const query = await db.collection('eventos').doc(EVENTO_ID)
      .collection('convidados').where('nome', '==', nome).get();
    if (!query.empty) {
      messageDiv.textContent = 'Você já confirmou presença!';
      return;
    }
    await db.collection('eventos').doc(EVENTO_ID)
      .collection('convidados').add({ nome, presenca });
    messageDiv.textContent = 'Confirmação enviada com sucesso!';
    form.reset();
  } catch (err) {
    messageDiv.textContent = 'Erro ao enviar confirmação.';
  }
});

function atualizarContador() {
  db.collection('eventos').doc(EVENTO_ID)
    .collection('convidados')
    .where('presenca', '==', 'sim')
    .onSnapshot(snapshot => {
      countDiv.textContent = `Confirmados: ${snapshot.size}`;
    });
}
atualizarContador();
