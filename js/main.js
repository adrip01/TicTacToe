sessionStorage.clear();

input1.addEventListener("input", () => updateValue(p1Name, input1));
input2.addEventListener("input", () => updateValue(p2Name, input2));

updateValue = (key, input) => {
  sessionStorage.removeItem(key);
  sessionStorage.setItem(key, input.value);
};

document.getElementById("startButton").addEventListener("click", () => {
  window.location.assign("playground.html");
});
