const palavrao = [
  'porra', 'caralho'
]

function onClickButton() {
  var text = document.getElementById('textarea').value
  var count = 0
  
  if(document.getElementById('button').className != 'active') {
    var arr = text.split(' ')
    var teste = arr.map(name => {
      if(name == palavrao.find(item => item == name)) {
        count++
        return '***'
      } else {
        return name
      }
    }
    ).join(" ")

    document.getElementById('textarea').value = teste
    document.getElementById('erros').innerHTML = `
    <strong class="destaque">
    ${count + `${count > 1 ? ' palavrões': ' palavrão'}`}
    </strong> 
    ${count > 1 ? 'foram removidos': 'foi removido'}
    :)
    `
    
    document.getElementById('button').classList.add("active");
    document.getElementById('h3').classList.add("active");
    characters
    document.getElementById('characters').style.color = 'red'
    
    document.getElementById('textButton').innerHTML = `Limpar outra frase`
  } else {
    document.getElementById('textarea').value = ''
    document.getElementById('erros').innerHTML = ''
    
    document.getElementById('button').classList.remove("active");
    document.getElementById('h3').classList.remove("active");

    document.getElementById('characters').style.color = 'black'
    
    document.getElementById('characters').innerHTML = '0'
    document.getElementById('textButton').innerHTML = `Limpar frase`
  }
}

function onChangeTextArea() {
  var text = document.getElementById('textarea').value

  document.getElementById('characters').innerHTML = text.length
}