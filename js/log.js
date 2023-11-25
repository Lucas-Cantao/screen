function verifLogado(){
    if(localStorage.getItem('logado') == 'logado'){
        window.location.assign('../index.html')
    }else{
        // 
    }
}