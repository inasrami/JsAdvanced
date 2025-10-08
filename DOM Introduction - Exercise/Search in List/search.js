function search() {
   const searchText = document.getElementById('searchText').value;
   const towns = document.querySelectorAll('#towns li');
   const result = document.getElementById('result');
   
   towns.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   });
   
   if (!searchText) {
      result.textContent = '';
      return;
   }
   
   let matches = 0;
   
   towns.forEach(town => {
      if (town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   });
   
   result.textContent = `${matches} matches found`;
}