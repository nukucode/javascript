//: Asynchronous array loops in Javascript

const asyncUppercase = (item) =>
  new Promise((resolve) =>
    setInterval(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItem = async () => {
  const itmes = ["a", "b", "c", "d"];
  for (item of itmes) {
    const uppercaseItem = await asyncUppercase(item);
    console.log(uppercaseItem);
  }

  console.log("Items Processed");
};

uppercaseItem();

//# promise.all()
/* provide another option for asynchronous loops over arrays. The main difference is previous one is that promise.all executes all asynchronous operations in parallel */

const asyncUppercase2 = (item) =>
  new Promise((resolve) =>
    setInterval(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItem2 = () => {
  const items = ["ab", "db", "cb"];
  return Promise.all(
    items.map(async (item) => {
      const upperItem = await asyncUppercase2(item);
      console.log(upperItem);
    })
  ).then(() => {
    console.log("Items Processed");
  });
};

uppercaseItem2();

//# Arrays Methods

const asyncUppercase3 = (item) =>
  new Promise((resolve) =>
    setInterval(
      () => resolve(item.toUpperCase()),
      Math.floor(Math.random() * 1000)
    )
  );

const uppercaseItem3 = async () => {
  const items = ["aa", "bb", "cc", "dd"];
  await items.forEach(async (item) => {
    const upperItem = await asyncUppercase3(item);
    console.log(upperItem);
  });

  console.log("Items Processed");
};

uppercaseItem3();
