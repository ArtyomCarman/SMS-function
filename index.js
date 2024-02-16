const func = (someStr) => {
  const MAX_SMS_LENGTH = 140;
  const arr = someStr.split(" ");

  let result = [];
  let sms = "";

  for (let word of arr) {
    if (sms.length + word.length <= MAX_SMS_LENGTH) {
      sms += sms.length ? ` ${word}` : word;
    } else {
      result.push(sms ? sms : word);
      sms = word;
    }
  }
  result.push(sms);

  return result;
};
