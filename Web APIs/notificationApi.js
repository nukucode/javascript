function checkPermission() {
  return Notification.requestPermission().then(
    (status) => status === "granted"
  );
}

function sendNotification() {
  checkPermission().then((isAllowed) => {
    if (!isAllowed) {
      return console.log("thankyou");
    }

    new Notification("My Title", {
      body: "Hi, how are you today?",
      image: "./img/img1.jpg",
    });
  });


}
