const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}

const pessoaPrototype = {...falar, ...comer,...beber}
//ou
//const pessoaPrototype = Object.assign({}, falar,comer,beber)



function CriaPessoa(nome,sobrenome){


    return Object.create(pessoaPrototype, {
        nome:{value: nome},
        sobrenome: {value : sobrenome}

    });
}

const p1 = CriaPessoa("Kayky","Santos")
const p2 = CriaPessoa("Maria", "Elizabeth")

console.log(p2.falar())