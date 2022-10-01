//* Generate OTP

function generateOTP() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let OTP = ""; // Declare a variable for store OTP
  for (let i = 0; i < 6; i++) {
    OTP += numbers[Math.floor(Math.random() * 10)];
  }

  return OTP;
}


console.log(generateOTP())