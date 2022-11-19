{
  /*  */
}
let raitingValue = 0;
const raitingItems = document.querySelectorAll(".raiting-item");

document
  .querySelector(".raiting-btn")
  .addEventListener("click", handleBtnClick);

raitingItems.forEach((raitingItem) => {
  raitingItem.addEventListener("click", handleRaitingClick);
});

function handleBtnClick() {
  if (raitingValue !== 0) {
    const raitingWrap = document.getElementById("raiting-wrap");
    raitingWrap.innerHTML = `
      <div class="thanks-block">
        <p class="riating-info">You selected ${raitingValue} out of 5</p>
        <h2 class="thanks-title">Thank you!</h2>
        <p class="thanks-text">
          We appreciate you taking the time to give a rating. If&nbspyou ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    `;
  }
}

function handleRaitingClick(e) {
  raitingValue = Number(e.target.innerText);
  raitingItems.forEach((raitingItem) => {
    raitingItem.classList.remove("active");
  });
  e.target.classList.add("active");
}
