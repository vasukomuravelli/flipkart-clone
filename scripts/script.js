function search(){
    let q = document.getElementById("searchbox").value;
    if(q != "")
    {
        // fetch(`https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?filterByFormula=({category}='${q}')`,
        // {
        //     method : "GET",
        //     headers: {'Authorization' : 'Bearer keyIkILcyVWkPItLt'},
        // }).then((res)=>{
        //     return res.json();
        // }).then((res)=>{
        //     console.log(res.records);
        //     displayResults(res.records);
        // });
        fetch("https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?fields%5B%5D=name",
        {
            method:'GET',
            headers:{'Authorization':'Bearer keyIkILcyVWkPItLt'}    
        }).then(function(res){
        return res.json(); 
        }).then(function(res){
            var list=res["records"];
            var ar=[];
            list.forEach((item)=>{
                var temp=item.fields.name;
                if(temp != undefined)
                {
                    ar.push(temp);                        
                }
            });
            // console.log(ar);
            let matching = [];
            let myPattern = new RegExp('(\\w*'+q+'\\w*)','gi');
            ar.forEach(el=>
            {
                // console.log(el,"q-before:",q);
                if(el.match(myPattern))
                {
                    console.log(el,"q-after:",q);
                    matching.push(el);
                }
            });
            displayResults(matching);
        });
    }
    else{
        output.style.display = "none";
    }
}
var delay;
function debounce(fun,time)
{
    if(delay)
    {
        clearTimeout(delay);
    }
    delay = setTimeout(()=>{fun()},time);
}
function displayResults(p)
{
    output.innerHTML = null;
    output.style.display = "block";
    p.forEach(element => {
        let name = document.createElement('li');
        name.innerText = element;
        output.append(name);
    });

}

export {search,debounce,displayResults};