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

db.collection("logins").doc("1").get().then((docu) => {
    if(docu.exists){
        console.log("existe")
        
        const dados = docu.data()
        const nome = dados.emailUser
        console.log(nome)



    }else{
        console.log("Não existe!")
    }
})