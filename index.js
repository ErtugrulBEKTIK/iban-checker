"use strict";

function validateIbanWithoutChecksum(string){
  return /^([A-Z]{2}[ \-]?[0-9]{2})(?=(?:[ \-]?[A-Z0-9]){9,30}$)((?:[ \-]?[A-Z0-9]{3,5}){2,7})([ \-]?[A-Z0-9]{1,3})?$/.test(string);
}

function validateIbanWithChecksum(string) {
  const ibanStripped = string.replace(/[^A-Z0-9]+/gi,'') //keep numbers and letters only
    .toUpperCase(); //calculation expects upper-case
  const m = ibanStripped.match(/^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/);
  if(!m) return false;

  const numbericed = (m[3] + m[1] + m[2]).replace(/[A-Z]/g,function(ch){
    //replace upper-case characters by numbers 10 to 35
    return (ch.charCodeAt(0)-55);
  });
  //The resulting number would be to long for javascript to handle without loosing precision.
  //So the trick is to chop the string up in smaller parts.
  const mod97 = numbericed.match(/\d{1,7}/g)
    .reduce(function(total, curr){ return Number(total + curr)%97},'');

  return (mod97 === 1);
}

module.exports = function isIBAN(string, checksumEnabled = true) {
  if (!(typeof string === 'string' || string instanceof String)){
    throw new Error(
      'You should provide a string in the first parameter!'
    );
  }

  if(checksumEnabled) return validateIbanWithChecksum(string);
  return validateIbanWithoutChecksum(string)
};
