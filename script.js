let textArea = document.querySelector('#txtarea');
let output = document.querySelector('.txt-output');

function listeningClickButtons() {
  var buttonCrip = document.getElementById('btnCrip');
  buttonCrip.addEventListener('click', handdleButtonCrip);

  var buttonDescrip = document.getElementById('btnDescrip');
  buttonDescrip.addEventListener('click', handdleButtonDescrip);

  var buttonCopiar = document.getElementById('btn-copiar');
  buttonCopiar.addEventListener('click', handdleButtonCopiar);
}

function handdleButtonCrip() {
  let textoCriptografado = textArea.value;
  let resultado = textoCriptografado
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
  output.innerHTML = '';

  output.innerHTML += ` ${resultado} `;
  document.querySelector('#txtarea').value = '';
}

function handdleButtonDescrip() {
  let textoCriptografado = textArea.value;
  let resultado = textoCriptografado
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
  output.innerHTML = '';

  output.innerHTML += ` ${resultado} `;
  document.querySelector('#txtarea').value = '';
}

function handdleButtonCopiar() {
  var textocopiado = output.innerHTML;
  navigator.clipboard.writeText(textocopiado).then(function () {
    alert('O seu texto foi copiado com sucesso!');
    document.getElementById('txtoutpu').style.color = 'red';
  });
}

listeningClickButtons();
