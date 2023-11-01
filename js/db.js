const firebaseConfig = {
    apiKey: "AIzaSyBh6_p4JlLS_bA6vFlf-j23-4kDLtgJQ5Q",
    authDomain: "screen-2baec.firebaseapp.com",
    projectId: "screen-2baec",
    storageBucket: "screen-2baec.appspot.com",
    messagingSenderId: "229889958709",
    appId: "1:229889958709:web:a3243ad70615a4b6a7627c",
    measurementId: "G-DDV4M3QBY2"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
const banco = db.collection("logins")

const logar = () => {
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#pass").value
    banco.onSnapshot((docs) => {
        docs.docChanges().forEach(changes => {
            if(changes.type = "added"){
                
            const doc = changes.doc
            const dados = doc.data()

            if(email == dados.emailUser && senha == dados.pwUser){
                console.log('logado')
                localStorage.setItem("logado", "logado")
                localStorage.setItem("usuario", `${dados.usuario}`)
            }else{
                console.log("Não logado")
            }
        }
    });

})}