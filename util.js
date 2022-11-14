function $(s){
  return document.querySelector(s);
}

function $$(s){
  return [...document.querySelectorAll(s)];
}

function strength(N, L){
  let entropy = Math.log2(N ** L);
  let rating = 'horrible';
  if(entropy > 25) rating = 'weak';
  if(entropy > 50) rating = 'ok';
  if(entropy > 75) rating = 'strong';
  return [entropy, rating];
}

function choices(chars, num){
  let result = '';
  while(result.length < num){
    result += choice(chars);
  }
  return result;
}

function choice(chars){
  return chars[random(0, chars.length)];
}

function random(min, max) {
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    let num = buffer[0] / (0xffffffff + 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(num * (max - min)) + min;
}
