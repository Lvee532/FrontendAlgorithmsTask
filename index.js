// For Questions 1 and 2, I created a function  first named "checkDataType"  that checks for the data type of the parameter. This function is called in the main functions below

function checkDataType(data) {
  //This function returns the data type of (data).

  if (typeof data == "object") {
    if (Array.isArray(data) == true) {
      //Checks that (data) of type 'object' is an array
      return "array";
    } else {
      return "object";
    }
  } else {
    if (typeof data == "string") {
      if (data != "" && !isNaN(data)) {
        //Checks that (data) of type 'string' is not empty ("")
        return "number"; //and can be evaluated as a number
      } else {
        return "string";
      }
    } else {
      return typeof data;
    }
  }
}



// Question No 1
// Function named "convertFahrToCelsius"

function convertFahrToCelius(TFah) {
  //This function checks if (TFah) is a valid number
  // - if true, performs the temperature conversion ((TFah - 32) * 5 / 9) and rounds up the answer to 4 decimal places.
  // - if false, returns a preformated string in the form, '[TFah] is not a valid number but a/an [data type].'

  if (checkDataType(TFah) == "number") {
    let TCel = ((TFah - 32) * 5) / 9;
    console.log(TCel.toFixed(4));
    return TCel.toFixed(4);
  } else {
    console.log(
      `${JSON.stringify(TFah)} is not a valid number but a/an ${checkDataType(
        TFah
      )}`
    );
    return `${JSON.stringify(
      TFah
    )} is not a valid number but a/an ${checkDataType(TFah)}`;
  }
}



//Question No 2
//Function named "checkYuGiOh"

function checkYuGiOh(n) {
  //this function checks if (n) is a valid number
  // - if true, creates an array of numbers from 1 to (n) and replaces multiples of 2,3 and 5 with "yu", "gi" and "oh" then returns the resulting array
  // - if false, returns a preformatted string in the form "invalid parameter: (n)"

  if (checkDataType(n) == "number") {
    let numArray = [];

    for (var i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        numArray.push("yu-gi-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        numArray.push("yu-gi");
      } else if (i % 2 == 0 && i % 5 == 0) {
        numArray.push("yu-oh");
      } else if (i % 3 == 0 && i % 5 == 0) {
        numArray.push("gi-oh");
      } else if (i % 2 == 0) {
        numArray.push("yu");
      } else if (i % 3 == 0) {
        numArray.push("gi");
      } else if (i % 5 == 0) {
        numArray.push("oh");
      } else {
        numArray.push(i);
      }
    }
    console.log(numArray);
    return numArray;
  } else {
    console.log(`invalid parameter: "${JSON.stringify(n)}" `);
    return `invalid parameter: "${JSON.stringify(n)}" `;
  }
}
