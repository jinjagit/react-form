let now = new Date();

now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

let dateStr = now.toISOString().slice(0,10)

console.log(dateStr);