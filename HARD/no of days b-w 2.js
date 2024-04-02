getDays(new Date("June 14, 2019"), new Date("June 20, 2019"));
getDays(new Date("December 29, 2018"), new Date("January 1, 2019"));
getDays(new Date("July 20, 2019"), new Date("July 30, 2019"));

function getDays(date1, date2) {
  console.log((date2 - date1) / (24 * 60 * 60 * 1000));
  return (date2 - date1) / (24 * 60 * 60 * 1000);
}
