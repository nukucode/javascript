

//* Detect User's Location Using Javascript

function detectLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    function onSuccess(cordinates) {
      console.log(cordinates);
    }

    function onError(error) {
      console.log(error);
    }
  } else {
    console.log("Your Browser Don't Support 😒");
  }
}
