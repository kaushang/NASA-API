let inputVal;
document.querySelector("#btn").addEventListener("click", () => {
    inputVal = document.querySelector("#input").value;
    console.log(inputVal);
    api();
    document.querySelector(".gettingImage").style.display = "block";

});
let tc;
let baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=HX0NmFLZh2cggLuXLXJAIIWEBs2GbbucRovUNVgU";
const api = () => {
    console.log("Getting data...")
    fetch(baseURL).then((resolve) => {
        let data = resolve.json()
        .then(data => {
            console.log(data);
            tc = data.photos[inputVal-1].img_src
        })
        .then(() => {
            console.log(tc);
            let toChange = document.querySelector("img");
            toChange.setAttribute('src', tc);
            document.querySelector('img').style.display = "block";
            document.querySelector(".gettingImage").style.display = "none";

        });
    });
}
