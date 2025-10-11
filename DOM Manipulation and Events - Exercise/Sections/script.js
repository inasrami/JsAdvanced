function create(words) {
   const content = document.getElementById('content')
   
   for(let i = 0; i < words.length; i++) {
      const word = words[i];

      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);
      content.appendChild(div);

      div.addEventListener('click', onClick);
   }

   function onClick(event) {
      const div = event.currentTarget;
      const p = div.children[0];

      p.style.display = 'block'
   }
}