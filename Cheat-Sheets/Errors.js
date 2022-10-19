//# ERRORS

try {
  // block of code to try
  undefinedFunction();
} catch (error) {
  // block to handle error
  console.log(error);
}

// OR

try {
    // try to run this code
  } catch (error) {
    // code to handle exceptions
  } finally {
    // Always run this code block regardless of error or not
    //* this block is optional
  }