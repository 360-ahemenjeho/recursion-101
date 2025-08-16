const data = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function objContains(obj, targetValue) {
  if (obj === null || obj === undefined) {
    return false;
  }
  if (typeof obj !== "object") {
    return obj === targetValue;
  }
  for (let key in obj) {
    if (objContains(obj[key], targetValue)) {
      return true;
    }
  }
  return false;
}

console.log("object contains value: ", objContains(data, 36));
