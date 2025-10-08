function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  const textAreaRef = document.querySelector("textarea");
  const bestRestaurantRef = document.querySelector("#bestRestaurant p");
  const bestWorkersRef = document.querySelector("#workers p");

  function onClick() {
    const data = textAreaRef.value;
    const restaurantData = JSON.parse(data);

    const result = {};

    for (let el of restaurantData) {
      const [name, workersData] = el.split(" - ");
      if (!result.hasOwnProperty(name)) {
        result[name] = {
          bestSalary: 0,
          avgSalary: 0,
          workers: [],
        };
      }
      const workers = workersData.split(", ");
      const newWorkersList = createWorkerList(workers);
      result[name].workers = concatWorkersList(
        result[name].workers,
        newWorkersList
      );
      const salaryData = calculateRestaurantData(result[name].workers);
      result[name].avgSalary = salaryData.avgSalary;
      result[name].bestSalary = salaryData.bestSalary;
    }

    const bestRestaurant = findBestRestaurant(result);
    bestRestaurantRef.textContent = `Name: ${
      bestRestaurant[0]
    } Average Salary: ${bestRestaurant[1].avgSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
    let buff = "";

    bestRestaurant[1].workers
      .sort((a, b) => b.salary - a.salary)
      .forEach((worker) => {
        buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
      });

    bestWorkersRef.textContent = buff.trim();
  }

  function findBestRestaurant(restaurantData) {
    return Object.entries(restaurantData).sort(
      (a, b) => b[1].avgSalary - a[1].avgSalary
    )[0];
  }

  function calculateRestaurantData(workerList) {
    const result = {
      avgSalary: 0,
      bestSalary: 0,
    };

    let sum = 0;

    for (let worker of workerList) {
      let salary = worker.salary;
      sum += salary;

      if (result.bestSalary < salary) {
        result.bestSalary = salary;
      }
    }
    result.avgSalary = sum / workerList.length;

    return result;
  }

  function concatWorkersList(oldList, newList) {
    return oldList.concat(newList);
  }

  function createWorkerList(data) {
    const result = [];

    for (let el of data) {
      let [name, salary] = el.split(" ");
      salary = Number(salary);
      result.push({
        name,
        salary,
      });
    }
    return result;
  }
}