let files = ["bgmi.text", " ", "text.txt", " ", "movie.txt"];

// const filesPaths = [];

// // for (let file of files){
// //     const fileName = file.trim();

// //     if(fileName){
// //         const filePath = `~/folder/learn/${fileName}`;
// //         filesPaths.push(filePath);
// //     }
// // }

// // console.log(filesPaths);

/// array reduce

// const filesPaths = files.reduce((acc, file) => {
//     const fileName = file.trim();
//     if(fileName){
//         const filePath = `/code/learn/${fileName}`;
//         acc.push(filePath);

//     }

//     return acc;
// },[])

// console.log(filesPaths);

/// method chaining

// const filesPaths = files
//   .map((file) => file.trim())
//   .filter(Boolean)
//   .map((fileName) => `/coding/learn/${fileName}`);

//   console.log(filesPaths)

/// .filter(Boolean) -----> remove all empty value, nulls, undifiend, blan space from the array
