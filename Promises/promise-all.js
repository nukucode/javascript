//: Promise.all In Javascript

/* Promise.all is actually a promise that takes an array of promises as an input (an iterable). Then it gets resolved when all the promises get resolved or any one of them gets rejected */

/* Promise.all([Promise1, Promise2, Promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */

//# let's see an example

const timeout = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`complete in ${time}`);
    }, time);
  });
};

// resolving a normal promise.
timeout(1000).then((result) => console.log(result)); // complete in 1000

// Promise.all
Promise.all([timeout(1000), timeout(2000)]).then((result) =>
  console.log(result)
); // [ 'complete in 1000', 'complete in 2000' ]

//# let's see another example

const timeout2 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Complete in ${time}`);
    }, time);
  });
};

const durations = [1000, 2000, 3000];

const promises = [];

durations.map((duration) => {
  promises.push(timeout(duration));
});

console.log(promises);

Promise.all(promises).then((result) => console.log(result));

//# When promise reject

const timeout3 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 3000) {
        reject(`Rejcted in ${time}`);
      } else {
        resolve(`Complete in ${time}`);
      }
    }, time);
  });
};

const durations2 = [1000, 2000, 3000, 4000];

const promises2 = [];

durations2.map((duration) => {
  promises2.push(timeout3(duration));
});

// we are passsing an array of pending promises to promise.all

Promise.all(promises2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//# how to handle failed promises

const durations3 = [1000, 2000, 3000];

const promises3 = durations3.map((duration) => {
  return timeout3(duration).catch((e) => e);
});

Promise.all(promises3)
  .then((response) => console.log(response))
  .catch((error) => console.log(`error in executing ${error}`));

//# Use cases of Promise.all

/* Assume that you have to perform a huge number of Async operations like sending bulk marketing emials to thousands of users. */

// Async function to send mail to a list of users

// Async function to send mail to a list of users.
const sendMailForUsers = async (users) => {
  const usersLength = users.length;

  for (let i = 0; i < usersLength; i += 100) {
    const requests = users.slice(i, i + 100).map((user) => {
      // The batch size is 100. We are processing in a set of 100 users.
      return triggerMailForUser(user) // Async function to send the mail.
        .catch((e) => console.log(`Error in sending email for ${user} - ${e}`)); // Catch the error if something goes wrong. So that it won't block the loop.
    });

    // requests will have 100 or less pending promises.
    // Promise.all will wait till all the promises got resolves and then take the next 100.
    await Promise.all(requests).catch((e) =>
      console.log(`Error in sending email for the batch ${i} - ${e}`)
    ); // Catch the error.
  }
};

// sendMailForUsers(userLists);

/* Let's consider another scenario: You have to build an Api that gets information from multiple third-party APIs and aggregates all the responses from the APIs. */

// Promise.all is the perfect way of doing that. Let's see how.

// Function to fetch Github info of a user.

// Function to fetch Github info of a user.
const fetchGithubInfo = async (url) => {
  console.log(`Fetching ${url}`);
  const githubInfo = await fetch(url).then((res) => res.json()); // API call to get user info from Github.
  return githubInfo;
};

// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) => {
  const requests = names.map((name) => {
    const url = `https://api.github.com/users/${name}`;
    return fetchGithubInfo(url) // Async function that fetches the user info.
      .then((a) => {
        return a; // Returns the user info.
      });
  });
  return Promise.all(requests); // Waiting for all the requests to get resolved.
};

fetchUserInfo(["sindresorhus", "yyx990803", "gaearon"]).then((a) =>
  console.log(JSON.stringify(a))
);
