async function getPredict() {
    text = document.querySelector("#formGroupExampleInput").value
    const reseponse = await fetch(`https://transitaccidentpredictor-jinc6jghnq-uc.a.run.app/predict/${text}`)
    temp = await reseponse.text()
    document.querySelector("#predict").innerHTML = temp
    setTimeout(() => {
        document.querySelector("#predict").innerHTML = ""
    }, 2000)
}