// export default class OrdersAnalyzer {
//   constructor() {
//     this.weekdays = [
//       'SUNDAY',
//       'MONDAY',
//       'TUESDAY',
//       'WEDNESDAY',
//       'THURSDAY',
//       'FRIDAY',
//       'SATURDAY',
//     ];
//   }
//   averageOrderValue(orders, weekday) {
//     //console.log(orders)
//     //console.log(weekday)// SUNDAY MONDAY TUESDAY SATURDAY
//     function getDayOfWeek(date) {
//       const dayOfWeek = new Date(date).getDay();
//       return isNaN(dayOfWeek)
//         ? null
//         : [
//             'SUNDAY',
//             'MONDAY',
//             'TUESDAY',
//             'WEDNESDAY',
//             'THURSDAY',
//             'FRIDAY',
//             'SATURDAY',
//           ][dayOfWeek];
//     }
//     console.log('___________-------____________---------');
//     let count = 1;
//     let transActionTotal = 0;
//     let avg = 0;
//     let total = 0;
//     //first get the totals for each transaction
//     const newOrders = orders.map((order) => {
//       //console.log(order.orderLines)
//       let objPriceArr = order.orderLines.map(
//         (el) => el.unitPrice * el.quantity
//       );
//       //console.log(objPriceArr)
//       const reducer = (accumulator, currentValue) => accumulator + currentValue;
//       let rawTotal = objPriceArr.reduce(reducer);
//       transActionTotal = Math.round((rawTotal + Number.EPSILON) * 100) / 100;
//       return {
//         day: getDayOfWeek(new Date(order.creationDate)),
//         transActionTotal: transActionTotal,
//       };
//     });
//     console.log(newOrders);
//     //iterate over the new array and tally things up
//     for (let i = 1; i < newOrders.length; i++) {
//       const dayL = newOrders[i - 1].day;
//       const dayR = newOrders[i].day;
//       const dailyTotalL = newOrders[i - 1].transActionTotal;
//       const dailyTotalR = newOrders[i].transActionTotal;
//       //   console.log(dayL)
//       //   console.log(dayR)
//       if (dayL !== dayR) {
//         count = 1;
//         total = dailyTotalR;
//       } else if (dayL === dayR) {
//         count++;
//         total = dailyTotalL + dailyTotalR;
//       }
//       console.log(`d: ${dayR} c: ${count} t: ${total}`);
//     }

//     //return {};
//   }
// }

// // if (order.creationDate == orderRt.creationDate){
// //     //console.log(convertedDate)
// //     count++ //increase count
// //     let unitPriceArr = order.orderLines.map(el => el.unitPrice);
// //     const reducer = (accumulator, currentValue) => accumulator + currentValue;

// //     let rawTotal =  unitPriceArr.reduce(reducer)
// //     total =   Math.round((rawTotal + Number.EPSILON) * 100) / 100
// //     let rawAvg = (total / count)
// //     avg = Math.round((rawAvg + Number.EPSILON) * 100) / 100
// //     result.count = count
// //     // console.log(count);
// //      //console.log(`total: ${total}`)
// //     result.total = total
// //      //console.log(`avg: ${avg}`);
// //     result.avg = avg
// //     console.log(result)
// //    }
