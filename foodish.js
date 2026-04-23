async function getimg(){
    const data= await fetch("https://foodish-api.com/api/");
    const finaldata= await data.json();
    const result=finaldata.image;
    document.getElementById("img").innerHTML=`<img src="${result}" alt="image of food items" width="250"/>`;
}
//  https://foodish-api.com/api/
// https://forms.gle/K888R9nV8bm6PLfZ9