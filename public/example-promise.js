// var getTemprature = (location, callback) => {
//
//   callback(undefined, 78);
//   callback('City is not Found');
// }
// getTemprature('Chandigarh', (err, res) => {
//   if(err){
//     console.log('error', err);
//
//   } else {
//     console.log('res', res);
//   }
// });
//
//
// function getTempPromise (location){
//     return new Promise(function(resolve, reject){
//       setTimeout(function(){
//         resolve(79);
//         reject('City not found');
//       }, 3000);
//
//
//     })
// };
//
// getTempPromise('Chandigarh').then(function(temp){
//     console.log('Promise success',  temp);
// }, function(err){
//     console.log('Promise error', err);
// })


var addPromise = (a, b) => {
  return new Promise(function(resolve, reject){
    if(typeof a !== 'number' || typeof b !== 'number'){
      reject('Cannot form addition');
    }else{
      resolve(a + b);
    }
  });

};


addPromise(12, 'heello').then(function(res){
  console.log('Result', res);
},function(err){
  console.log('Error', err);
});
