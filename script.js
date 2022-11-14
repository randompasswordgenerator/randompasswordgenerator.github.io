LOWER_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
UPPER_ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NUMBERS = '0123456789'
SYMBOLS = '*!%^$&#@'

window.onload = async function(){
  $$('.middle-row input, .bottom-row input').forEach(x => {
    x.onclick = (event) => {
      $('#password').innerHTML = genpass();
      $('.copy').innerHTML = 'copy';
    }
  });

  let pass = genpass();
  $('#password').innerHTML = pass;
}

function genpass(){
  let chars = '';
  if(upper()) chars += UPPER_ALPHA;
  if(lower()) chars += LOWER_ALPHA;
  if(numbers()) chars += NUMBERS;
  if(symbols()) chars += SYMBOLS;
  return choices(chars, length());
}

function upper(){
  return $('#uppercase').checked;
}

function lower(){
  return $('#lowercase').checked;
}

function numbers(){
  return $('#numbers').checked;
}

function symbols(){
  return $('#symbols').checked;
}

function length(){
  return $('#length').value;
}

function copy(){
  let pass = $('#password').textContent;
  navigator.clipboard.writeText(pass);
  $('.copy').innerHTML = 'copied!';
}

function onSliderChanged() {
  let length = $('#length').value;
  $('.bottom-row label').innerHTML = 'length: ' + length;
}
