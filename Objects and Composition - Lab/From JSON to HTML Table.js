function fromJSONToHTMLTable(input) {
    let arr = JSON.parse(input); 

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    let keys = Object.keys(arr[0]);
    let result = "<table>\n";

    result += "  <tr>";
    for (let key of keys) {
        result += `<th>${escapeHtml(key)}</th>`;
    }
    result += "</tr>\n";

    for (let obj of arr) {
        result += "  <tr>";
        for (let key of keys) {
            result += `<td>${escapeHtml(obj[key])}</td>`;
        }
        result += "</tr>\n";
    }

    result += "</table>";
    return result;
}

console.log(fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'));
