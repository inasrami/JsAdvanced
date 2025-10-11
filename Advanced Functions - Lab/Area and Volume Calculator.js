function AreaAndVolumeCalculator(area, vol, jsonData) {
    const data = JSON.parse(jsonData);

    const result = [];

    for(let entry of data){
        const obj = {
            area: area.call(entry),
            volume: vol.call(entry)
        };
        result.push(obj)
    }

    return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}
{
    const data = `[ 
    {"x":"1","y":"2","z":"10"}, 
    {"x":"7","y":"7","z":"10"}, 
    {"x":"5","y":"2","z":"10"} 
    ]`
    console.log(AreaAndVolumeCalculator(area, vol, data));
}