function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);

   const searchRef = document.getElementById("searchField");
   const tableRowRef = document.querySelectorAll("tbody tr");

   function onClick() {
      const searchText = searchRef.value;
      if (!searchText) {
         return;
      }

      searchRef.value = "";

      for (let i = 0; i < tableRowRef.length; i++) {
         const tableDataRef = tableRowRef[i].querySelectorAll("td");
         for (let col = 0; col < tableDataRef.length; col++) {
            const tableData = tableDataRef[col].textContent;
            if (tableData.includes(searchText)) {
               tableRowRef[i].classList.add("select");
               break;
            } else {
               tableRowRef[i].classList.remove("select");
            }
         }
      }
   }
}
