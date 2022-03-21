const getDate = () => {
  const today = new Date();
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const nameMonth = month[(today.getMonth()+1)]
  const date = nameMonth+ ' ' +today.getDate()+', '+today.getFullYear()

  const time = today.getHours() + ":" + today.getMinutes();

  const dateTime = date+' '+time;
  return dateTime
}

export default getDate;
