const primerPromesa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('La primer promesa se cumplio');
    } else {
      reject('La primer promesa no se cumplio');
    }
  });
};

primerPromesa()
  .then(response => console.log(response))
  .catch(err => console.error(err));
//Al crear el objeto new error, el error adquiere mas informacion
//que puede ser util para poder debugear las promesas
const segundaPromesa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('La segunda promesa se cumplio');
      }, 300);
    } else {
      const error = new Error('La segunda promesa no se cumplio')
      reject(error);
    }
  });
};

segundaPromesa()
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error(error));

Promise.all([primerPromesa(), segundaPromesa()])
  .then(response => {
    console.log('Arreglo de las respuestas', response)
  })
  .catch(error => {
    console.log(error)
  });