var lista_campo = document.getElementById('lista')
var array;
var endpoint = '';

async function listar(){

    const body = {
        "action": "LIST"
    }
    const datajson = JSON.stringify(body);
    const req = await fetch(endpoint,{
        method: "POST",
        headers: {
            accept: 'application/json',
          },
        body: datajson
    })

    //console.log(req)

    const res = await req.json();
    //console.log(res.Items[0])
    let con = 0;
    res.Items.forEach(item => {
        con+=1
    }); 
    //console.log(con)
    lista_campo.innerHTML = ''
    for (let i = 0; i<con; i++){
        lista_campo.innerHTML += "Nome: " + res.Items[i].nome + "<br/>E-mail: " + res.Items[i].email + "<br/>Telefone: " + res.Items[i].telefone +  "<br/>ID: " + res.Items[i].id;
        lista_campo.innerHTML += "<br>----------------------------<br>"
    }

}

async function getid(){
    let id = document.getElementById('id')
    
    const body = {
        "action": "GET",
        "id": id.value
    }
    console.log(body)


    const datajson = JSON.stringify(body);
    const req = await fetch(endpoint,{
        method: "POST",
        headers: {
            accept: 'application/json',
          },
        body: datajson
    })

    const res = await req.json();
    console.log(res.Item)
    lista_campo.innerHTML = ''
    lista_campo.innerHTML += "Nome: " + res.Item.nome + "<br/>E-mail: " + res.Item.email + "<br/>Telefone: " + res.Item.telefone +  "<br/>ID: " + res.Item.id;
}
async function set(){
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')

    const body = {
        "action": "CREATE",
        "nome": nome.value,
        "email": email.value,
        "telefone": telefone.value
    }
    console.log(body)

    const datajson = JSON.stringify(body);
    const req = await fetch(endpoint,{
        method: "POST",
        headers: {
            accept: 'application/json',
          },
        body: datajson
    })

    listar()

}

async function update(){
    let id = document.getElementById('id')
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')

    const body = {
        "action": "UPDATE",
        "id" : id.value,
        "nome": nome.value,
        "email": email.value,
        "telefone": telefone.value
    }
    console.log(body)

    const datajson = JSON.stringify(body);
    const req = await fetch(endpoint,{
        method: "POST",
        headers: {
            accept: 'application/json',
          },
        body: datajson
    })

    listar()
}
