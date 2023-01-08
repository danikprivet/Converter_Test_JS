const inputNode = document.querySelector(".js-input");
const SelectCurrencyNode = document.querySelector(".js-currency-selector");
const outputNode = document.querySelector(".js-output");

function GetInput(){
  return{
    rub: Number(inputNode.value),
    currency: SelectCurrencyNode.value
  } 
}

function render(result){
  outputNode.innerHTML = result;
}
inputNode.addEventListener("input", function(){
  const result = convert(GetInput());

  render(result)
});

SelectCurrencyNode.addEventListener("change", function(){
  const result = convert(GetInput());

  render(result)
})