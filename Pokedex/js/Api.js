
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("pikachu-sad.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            let tipo = data.types[0].type.name;
            let move = data.moves;
            let ID = data.id;
            let stat = data.stats;
            let weight = data.weight;
            let height = data.height;
            let exp = data.base_experience
            let statNum = data.stats
            mov(move);
            pokeImage(pokeImg);
            pokeMon(pokeName);
            tiposs(tipo);
            statsNam(stat);
            statsNum(statNum);
            Id(ID);
            Weight(weight);
            Height(height);
            baseExp(exp)
        }
    });
}

const capitalize = (s) => {return typeof s !== 'string' ? '' : s.charAt(0).toUpperCase() + s.slice(1)}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeMon = (url) => {
    const pokeNamee = document.getElementById("pokeNamee");
    pokeNamee.innerHTML="";
    let name = document.createElement('p');
    name.innerHTML = capitalize(url);
    pokeNamee.appendChild(name)
}

const tiposs = (url) => {
    const tipos = document.getElementById("tipos");
    tipos.innerHTML="";
    let type = document.createElement('p');
    type.innerHTML = capitalize(url);
    tipos.appendChild(type)
}

const mov = (moves) => {
    const movHtml = document.getElementById("Move")
    moves.map((move) => {
     let movesQuantity = document.createElement('p');
     movesQuantity.innerHTML = capitalize(move.move.name);
     movHtml.appendChild(movesQuantity)
    })
}

const statsNam = (stat) => {
    const statNaHtml = document.getElementById("statNa");
    statNaHtml.innerHTML="";
    stat.map((stat) => {
     let statQuantity = document.createElement('p');
     statQuantity.innerHTML = capitalize(stat.stat.name);
     statNaHtml.appendChild(statQuantity)
    })
}

const Id = (url) => {
    const Id = document.getElementById("ID");
    Id.innerHTML="";
    let id = document.createElement('p');
    id.innerHTML = url;
    Id.appendChild(id);
}
const Weight = (url) => {
    const Peso = document.getElementById("W");
    Peso.innerHTML="";
    let weight = document.createElement('p');
    weight.innerHTML = url;
    console.log(weight)
    Peso.appendChild(weight);
}
const Height = (url) => {
    const Alt = document.getElementById("H");
    Alt.innerHTML="";
    let height = document.createElement('p');
    height.innerHTML = url;
    Alt.appendChild(height);
}
const baseExp = (url) => {
    const Exp = document.getElementById("E");
    Exp.innerHTML="";
    let exp = document.createElement('p');
    exp.innerHTML = url;
    Exp.appendChild(exp);
}

const statsNum = (statNu) => {
    const statNuHtml = document.getElementById("statNu")
    statNu.map((statNum) => {
     console.log(statNum.stats)
     let statNuQuantity = document.createElement('p');
     statNuQuantity.innerHTML = statNum.base_stat;
     statNuHtml.appendChild(statNuQuantity)
    })
}  


