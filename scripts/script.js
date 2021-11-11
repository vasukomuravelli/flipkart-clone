function search(){
    let q = document.getElementById("searchbox").value
    fetch(`https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?maxRecords=1&filterByFormula=({category})`,
    {
        method : "GET",
        headers: {'Authorization' : 'Bearer keyIkILcyVWkPItLt'},
    }).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res.records);
        // displayResults(res.records);
    })
}
let delay;
function debounce(fun,time)
{
    if(delay){
        clearTimeout();
    }
    delay = setTimeout(()=>{
        fun();
    },time);
}
function displayResults(p)
{
    output.innerHTML = null;
    output.style.display = "block";
    p.forEach(element => {
        let name = document.createElement('li');
        name.innerText = element.fields.name;
        output.append(name);
    });

}

export {search,debounce,displayResults};