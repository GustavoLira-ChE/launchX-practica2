function priceSetting(){
    let secondaryflavor = document.getElementById("secondaryFlavourValue").value
    let numberOfPeople = document.getElementById("numberPeople").value
    let coverTypeArray = ["chocoGanage", "butterCover", "fondant", "creamCheese"]
    let decoTypeArray = ["sprinkles", "chocolateChips", "cranberry", "fondantFlowers"]
    let coverTypeString
    let decoTypeString
    for(let i = 0; i < coverTypeArray.length; i++){
        if(document.getElementById(coverTypeArray[i]).checked){
            coverTypeString = document.getElementById(coverTypeArray[i]).value
        }
        if(document.getElementById(decoTypeArray[i]).checked){
            decoTypeString = document.getElementById(decoTypeArray[i]).value
        }
    }
    let coverType = 0
    let decoType = 0
    let flavor = secondaryflavor
    let secondFlavorExtraPrice = 0
    number = parseInt(numberOfPeople)
    document.getElementById("pricechoco").textContent = `Pastel para ${number} personas`
    document.getElementById("pricevai").textContent = `Pastel para ${number} personas`
    document.getElementById("pricecar").textContent = `Pastel para ${number} personas`
    document.getElementById("pricem3").textContent = `Pastel para ${number} personas`
    /* Cover cake */
    if(coverTypeString === "ganageChocolate"){
        coverType =  0.08
    } else if(coverTypeString === "buttermilkdeco"){
        coverType = 0.05
    } else if(coverTypeString === "fondant"){
        coverType = 0.12
    } else if (coverTypeString === "creamCheese"){
        coverType = 0.16
    }
    /* Decoration cake */
    if(decoTypeString === "sprinkles"){
        decoType =  0.08
    } else if(decoTypeString === "chocolateChips"){
        decoType = 0.07
    } else if(decoTypeString === "cranberry"){
        decoType = 0.25
    } else if (decoTypeString === "fondantFlowers"){
        decoType = 0.20
    }
    /* Secondary Flavor */
    if(flavor === "Vainilla"){
        secondFlavorExtraPrice =  0.15
    } else if(flavor === "Chocolate"){
        secondFlavorExtraPrice = 0.20
    } else if(flavor === "Zanahoria"){
        secondFlavorExtraPrice = 0.25
    } else if (flavor === "3 leches"){
        secondFlavorExtraPrice = 0.35
    }
    let priceChoPerPerson = 0
    let priceVaiPerPerson = 0
    let priceCarPerPerson = 0
    let price3MilkPerPerson = 0
    if(number <= 50){
        priceChoPerPerson = combineCake(number, 25,"Chocolate", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        priceVaiPerPerson = combineCake(number, 20,"Vainilla", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        priceCarPerPerson = combineCake(number, 28,"Zanahoria", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        price3MilkPerPerson = combineCake(number, 30,"3 leches", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
    } else if(number > 50 || number <= 100){
        priceChoPerPerson = combineCake(number, 20,"Chocolate", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        priceVaiPerPerson = combineCake(number, 15,"Vainilla", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        priceCarPerPerson = combineCake(number, 23,"Zanahoria", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        price3MilkPerPerson = combineCake(number, 25,"3 leches", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
    } else if(number > 100){
        priceChoPerPerson = combineCake(number, 17,"Chocolate", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        priceVaiPerPerson = combineCake(number, 12,"Vainilla", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        priceCarPerPerson = combineCake(number, 20,"Zanahoria", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
        price3MilkPerPerson = combineCake(number, 22,"3 leches", flavor, secondFlavorExtraPrice, coverType, coverTypeString, decoType, decoTypeString)
    }

    document.getElementsByClassName("priceCake")[1].innerHTML = `
    <div id="chocoBaseString">El precio base del pastel:</div>
    <div id="chocoBasePrice"> ${priceChoPerPerson[0].toFixed(2)}</div>
    <div id="chocoSecondString">El precio por un segundo sabor del pastel ${priceChoPerPerson[3]}:</div>
    <div id="chocoSecondPrice"> ${priceChoPerPerson[2].toFixed(2)}</div>
    <div id="chocoCoverString">El precio por la cobertura  de ${priceChoPerPerson[5]}: </div>
    <div id="chocoCoverPrice"> ${priceChoPerPerson[4].toFixed(2)}</div>
    <div id="chocoDecoString">El precio por la cobertura  de ${priceChoPerPerson[7]}: </div>
    <div id="chocoDecoPrice"> ${priceChoPerPerson[6].toFixed(2)}</div>
    `
    document.getElementsByClassName("priceCake")[0].innerHTML = `
    <div id="vaiBaseString">El precio base del pastel:</div>
    <div id="vaiBasePrice"> ${priceVaiPerPerson[0].toFixed(2)}</div>
    <div id="vaiSecondString">El precio por un segundo sabor del pastel ${priceVaiPerPerson[3]}:</div>
    <div id="vaiSecondPrice"> ${priceVaiPerPerson[2].toFixed(2)}</div>
    <div id="vaiCoverString">El precio por la cobertura  de ${priceVaiPerPerson[5]}: </div>
    <div id="vaiCoverPrice"> ${priceVaiPerPerson[4].toFixed(2)}</div>
    <div id="vaiDecoString">El precio por la cobertura  de ${priceVaiPerPerson[7]}: </div>
    <div id="vaiDecoPrice"> ${priceVaiPerPerson[6].toFixed(2)}</div>
    `
    document.getElementsByClassName("priceCake")[2].innerHTML = `
    <div id="carBaseString">El precio base del pastel:</div>
    <div id="carBasePrice"> ${priceCarPerPerson[0].toFixed(2)}</div>
    <div id="carSecondString">El precio por un segundo sabor del pastel ${priceCarPerPerson[3]}:</div>
    <div id="carSecondPrice"> ${priceCarPerPerson[2].toFixed(2)}</div>
    <div id="carCoverString">El precio por la cobertura  de ${priceCarPerPerson[5]}: </div>
    <div id="carCoverPrice"> ${priceCarPerPerson[4].toFixed(2)}</div>
    <div id="carDecoString">El precio por la cobertura  de ${priceCarPerPerson[7]}: </div>
    <div id="carDecoPrice"> ${priceCarPerPerson[6].toFixed(2)}</div>
    `
    document.getElementsByClassName("priceCake")[3].innerHTML = `
    <div id="m3BaseString">El precio base del pastel:</div>
    <div id="m3BasePrice"> ${price3MilkPerPerson[0].toFixed(2)}</div>
    <div id="m3SecondString">El precio por un segundo sabor del pastel ${price3MilkPerPerson[3]}:</div>
    <div id="m3SecondPrice"> ${price3MilkPerPerson[2].toFixed(2)}</div>
    <div id="m3CoverString">El precio por la cobertura  de ${price3MilkPerPerson[5]}: </div>
    <div id="m3CoverPrice"> ${price3MilkPerPerson[4].toFixed(2)}</div>
    <div id="m3DecoString">El precio por la cobertura  de ${price3MilkPerPerson[7]}: </div>
    <div id="m3DecoPrice"> ${price3MilkPerPerson[6].toFixed(2)}</div>
    `
    
    
}
function handleClick(prefix){
    let cakeTitle = document.getElementById(prefix + "title").innerHTML
    let numberOfPeople = document.getElementById("price" + prefix).innerHTML
    let baseString = document.getElementById(prefix + "BaseString").innerHTML
    let basePrice = document.getElementById(prefix + "BasePrice").innerHTML
    let secondString = document.getElementById(prefix + "SecondString").innerHTML
    let secondPrice = document.getElementById(prefix + "SecondPrice").innerHTML
    let coverString = document.getElementById(prefix + "CoverString").innerHTML
    let coverPrice = document.getElementById(prefix + "CoverPrice").innerHTML
    let decoString = document.getElementById(prefix + "DecoString").innerHTML
    let decoPrice = document.getElementById(prefix + "DecoPrice").innerHTML
    let intBasePrice = parseFloat(basePrice)
    let intSecondPrice = parseFloat(secondPrice)
    let intCoverPrice = parseFloat(coverPrice)
    let intDecoPrice = parseFloat(decoPrice)
    let totalPrice = intBasePrice + intSecondPrice + intCoverPrice + intDecoPrice
    document.getElementById("cakeData").innerHTML = `
    <h3>Resumen de pedido:</h3>
    <div>
        <div>${cakeTitle}</div>
        <div>${numberOfPeople}</div>
        <div>${baseString}</div>
        <div><strong>$${basePrice}</strong></div>
        <div>${secondString}</div>
        <div><strong>$${secondPrice}</strong></div>
        <div>${coverString}</div>
        <div><strong>$${coverPrice}</strong></div>
        <div>${decoString}</div>
        <div><strong>$${decoPrice}</strong></div><br>
        <div>Total: <strong>$${totalPrice.toFixed(2)}</strong></div>
    </div>
    `
    document.getElementById("submitOrder").disabled = false
}

function combineCake(numberPeople, mainFlavorPrice, mainFlavor, secondFlavor, extraPercentage, coverType, coverTypeString, decoType, decoTypeString){
    let basePrice
    let secondFlavorExtraPrice
    let coverTypeExtraPrice
    let decoTypeExtraPrice 
    basePrice= mainFlavorPrice * numberPeople
    if(mainFlavor !== secondFlavor){
        secondFlavorExtraPrice = basePrice * extraPercentage
    } else{
        secondFlavorExtraPrice = 0
    }
    coverTypeExtraPrice = basePrice * coverType
    decoTypeExtraPrice = basePrice * decoType
    return [basePrice, mainFlavor, secondFlavorExtraPrice, secondFlavor, coverTypeExtraPrice, coverTypeString,  decoTypeExtraPrice, decoTypeString]
}