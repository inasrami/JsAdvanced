function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  
  if (namingConvention !== 'Camel Case' && namingConvention !== 'Pascal Case') {
    result.textContent = 'Error!';
    return;
  }
  
  const words = text.toLowerCase().split(' ');
  
  let output = '';
  
  if (namingConvention === 'Camel Case') {
    output = words[0];
    for (let i = 1; i < words.length; i++) {
      output += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  } else if (namingConvention === 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      output += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  
  result.textContent = output;
}