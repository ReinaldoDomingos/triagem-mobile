// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2tYg9xEEESsJaGFtB76J6AcfsO3Oucyo",
    authDomain: "triagem-1562269258217.firebaseapp.com",
    databaseURL: "https://triagem-1562269258217.firebaseio.com",
    projectId: "triagem-1562269258217",
    storageBucket: "",
    messagingSenderId: "280393163235",
    appId: "1:280393163235:web:ebc8a71f7b928a09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function adicionarConsulta(sexo, idade, cidade, data_inicio, data_fim, ubs) {
    db.collection("consultas").add(
            {
                cidade: sexo,
                data_fim: idade,
                data_inicio: cidade,
                idade: data_inicio,
                sexo: data_fim,
                ubs: ubs
            }
    )
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            }
            );
}
