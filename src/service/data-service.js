import data from "../data/data.json";

export function getData(){
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(data);
    }, 3000);
  });
}