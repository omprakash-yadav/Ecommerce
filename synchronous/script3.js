let a, b, c, d;

promptUser("Input first Number", (err, value1) => {
  if (err) {
    return handleError(err);
  }
  a = Number(value1);
  promptUser("Input second Number", (err, value2) => {
    if (err) {
      return handleError(err);
    }
    b = Number(value2);
    promptUser("Input third Number", (err, value3) => {
      if (err) {
        return handleError(err);
      }
      c = Number(value3);
      promptUser("Input fourth Number", (err, value4) => {
        if (err) {
          return handleError(err);
        }
        d = Number(value4);
        document.body.append(`The sum is:  ${a + b + c + d}`);
        console.log(`The sum of the numbers is ${a + b + c + d}`);
      });
    });
  });
});

function handleError(err) {
  document.body.append(`Error:${err.message}`);
}

function promptUser(question, callback) {
  const wrapper = document.createElement("div");
  const text = document.createElement("p");
  const input = document.createElement("input");
  const cancel = document.createElement("button");
  const confirm = document.createElement("button");

  confirm.innerHTML = "OK";
  cancel.innerHTML = "Cancel";
  text.innerHTML = question;

  wrapper.appendChild(text);
  wrapper.appendChild(input);
  wrapper.appendChild(cancel);
  wrapper.appendChild(confirm);
  document.body.appendChild(wrapper);

  confirm.addEventListener("click", () => {
    callback(undefined, input.value);
    document.body.removeChild(wrapper);
  });

  cancel.addEventListener("click", () => {
    callback(new Error("Canceled"));
    document.body.removeChild(wrapper);
  });
}
