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
const banco = db.collection("logins");




const logar = () => {
    const email = document.querySelector("#email");
    const senha = document.querySelector("#pass");
    const req = document.querySelector(".req");
    const reqCheck = document.querySelector(".reqCheck");
    const input1 = document.querySelector("#termos");
    const input2 = document.querySelector("#not");
    const campos = document.querySelector(".campos");
    const nao_logado = document.querySelector(".nao_logado");
    const logado = document.querySelector('.logado')
    const redirect = document.querySelector('.redirect')


    function close(nome){
        const toClose = document.querySelector(`.${nome}`);
        const closer = document.querySelector(`.close_${nome}`);

        closer.addEventListener('click', ()=>{
            toClose.style.display = 'none';
        });
    };


    banco.onSnapshot((docs) => {
        docs.docChanges().forEach(changes => {
            if(changes.type = "added"){
                
                const doc = changes.doc;
                const dados = doc.data();
                if(email.value == '' ||  senha.value== '' || input1.checked != true){
                    campos.style.display = 'grid';
                    close('campos');
                }else{
                    if(email.value == dados.emailUser || email.value == dados.usuario && senha.value == dados.pwUser){
                        logado.style.display = 'grid';
                        let secs = 5
                        setInterval(()=>{
                            if(secs != 0){
                                redirect.innerHTML = `Você será redirecionado para a página inicial já logado dentro de 5 segundo: ${secs}`
                                secs--
                            }
                            else{
                                window.location.replace('../index.html')
                            }
                        }, 1000)
                        localStorage.setItem("logado", "logado");
                        localStorage.setItem("usuario", `${dados.usuario}`);
                    }else{
                        nao_logado.style.display = 'grid';
                        close('nao_logado');
                    };
                };
            };
        });
        
    });
};



