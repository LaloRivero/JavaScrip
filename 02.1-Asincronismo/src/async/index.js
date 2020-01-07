const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async after 2 seconds'), 2000)
      : reject(new Error('Test Error'))
  });
}

const doSomeThing = async () => {
  const Something = await doSomethingAsync();
  console.log(Something);
}
doSomeThing();
const doAnotherThing = async ()=>{
  try{
    const Something2 = await doSomethingAsync();
    console.log('Second call ' + Something2);
  }catch(error){
    console.error(error);
  }
}
doAnotherThing();