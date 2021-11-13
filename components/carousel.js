function seggregate(q,parent)
{
    fetch(`https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?filterByFormula=({category}='${q}')`
,{
    method:'GET',
    headers:{'Authorization':'Bearer keyIkILcyVWkPItLt'}
    
  }).then(function(res){
   return res.json(); 
  }).then(function(res){
    console.log(res);
    showcarousel(res.records,parent);
});
}

function showcarousel(p,parent)
{
    let string = "";
    parent.innerHTML=null;
    p.forEach(element => {
        let image = JSON.parse(element.fields.image)[0];
        let discount_price = Math.floor(((element.fields.retail_price-element.fields.discount_price)/element.fields.retail_price)*100);
        let rating = (Math.random()*5).toFixed(1);
        let review = Math.ceil(Math.random()*300);
        let name = "";
        if(element.fields.name.length > 40)
        {
            for(let i=0;i<40;i++)
            {
                name += element.fields.name[i];
            }
            name = name+"...";
        }
        else
        {
            name = element.fields.name;
        }
        string += `<li class="item">
        <a href = "./product.html#name=${element.fields.name}"><div class="box" >
            <div class="slide-img">
                <img src = ${image}>                
            </div>            
            <div class="detail-box">
                <div class="type">
                    <p title = '${element.fields.name}'>${name}</p>
                </div>
                <div class = "rating">
                    <div><p>${rating}</p><span class="material-icons">star_border</span></div>
                    <p>(${review})</p>
                </div>
                <div class="price">
                <p>₹${element.fields.discount_price}</p>
                <p><s>₹${element.fields.retail_price}</s></p>
                <p>₹${discount_price}% off</p>
                </div>
            </div>        
        </div></a>
    </li>`;
    });
    parent.innerHTML = string;
}

export {seggregate,showcarousel};