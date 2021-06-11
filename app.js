// Bài tập 5 (10/06/2021)
// Refactor đoạn code sau bằng cách sử dụng async await để tránh hiện tượng callback hell

// function foo2(callback) {
//   firstAsyncCall(function (err, resultA) {
//     if (err) {
//       callback(err);
//       return;
//     }
//     thirdAsyncCallUsing(resultB, function (err, resultC) {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, doSomethingWith(resultC));
//       }
//     });
//   });
// }

const firstAsyncCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Async"), 1000);
  });
};

const thirdAsyncCallUsing = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Await"), 1000);
  });
};

const joinStr = (str1, str2) => {
  return str1 + str2;
};

const callback = (str) => {
  console.log(`welcome to ${str}`);
};

const foo3 = async (callback) => {
  const first = await firstAsyncCall();
  const third = await thirdAsyncCallUsing(first);
  return callback(joinStr(first, third));
};

foo3(callback);
