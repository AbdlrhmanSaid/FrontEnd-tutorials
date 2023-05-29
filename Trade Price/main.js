fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=f5aa14bf222240f0832d83a177be4cf0"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currncey) => {
    let amount = document.querySelector(".amount");
    let egp = document.querySelector(".egp span");
    let sar = document.querySelector(".sar span");
    egp.innerHTML = Math.round(amount.innerHTML * currncey.rates["EGP"]);
    sar.innerHTML = Math.round(amount.innerHTML * currncey.rates["SAR"]);
  });
