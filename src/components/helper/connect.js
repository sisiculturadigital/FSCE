
  export const data = () => {
    fetch('https://6368c59915219b8496065c54.mockapi.io/fsce-prueba/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
  }