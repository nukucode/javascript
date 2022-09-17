// check Device

const checkAppleDevice = () => {
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);
};

console.log(checkAppleDevice());

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // true for mobile device
  document.write("mobile device");
} else {
  // false for not mobile device
  document.write("not mobile device");
}

/// check if tab active

const isTabActive = () => !document.hidden;
console.log(isTabActive());

/// SECTION TEXT BY USER

const slectedText = () => {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }
  return "";
};

console.log(slectedText());

function foo() {
  const selObj = window.getSelection();
  alert(selObj);
}

foo();
