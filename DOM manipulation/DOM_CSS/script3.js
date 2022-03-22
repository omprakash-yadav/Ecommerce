let charCount = 100;
let smsAppfun = () => {
  let textEnteredLength = document.querySelector("#text-area").value.length;
  let spanTag = document.querySelector("#chars");
  let remainingCount = charCount - textEnteredLength;
  //console.log(remainingCount)
  spanTag.textContent = remainingCount;
};

//show password
let changePassword = () => {
  let passwordBox = document.querySelector("#pass-box");
  let theAttr = passwordBox.getAttribute("type");
  if (theAttr == "password") {
    passwordBox.setAttribute("type", "text");
  } else {
    passwordBox.setAttribute("type", "password");
  }
};

// write a logic likes and deslikes

let likesCount = 0;
let desLikeCount = 0;
let totalCount = 0;
let liked = () => {
  likesCount++;
  totalCount++;
  document.querySelector(".likes").textContent = likesCount;
  document.querySelector("#total").textContent = totalCount;
};

let disliked = () => {
  desLikeCount--;
  totalCount--;
  document.querySelector(".dislikes").textContent = desLikeCount;
  document.querySelector("#total").textContent = totalCount;
};
