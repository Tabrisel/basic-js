function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  console.log(s1, s2);
  
  let count = 0;
  for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s1.length; j++) {
      if (s1[i] === s2[j-1]) {
        s2 = s2.replace(s2[j], "");
        count = count + 1;
        console.log(s2, count, s1[i], s2[j])
      }
    }
  }
}

getCommonCharacterCount("aabcc", "adcaa");