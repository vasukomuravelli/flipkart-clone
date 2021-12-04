
let cat = localStorage.getItem("cat_name");
console.log(cat)
    switch(cat){
        case "1":
            mens_shoes();
            break;
        
        case "2":
            women_shoes();
            break;

        case "3":
            travel();
            break;

        case "4":
            homeapp();
            break;

        case "5":
            watches();
            break;
    }

    // set

var prod_list = document.getElementById("products");
 
    function products(records){
        var prod_list = document.getElementById("products");
        // console.log(records)
        records.forEach(({id,fields}) => {
            let prod_div = document.createElement("div") 
            prod_div.className = "card p-2";
            prod_div.onclick = function(){
                window.location.href = `/product.html#name=${fields.name}`;
                console.log(id)
            }
            prod_div.style.width = "16rem"

            let img_div = document.createElement("div")
            img_div.className = "prod_img_div"

            let img = document.createElement("img")
            img.className = "card-img-top prod_img ";
            let p_img = toarray(fields.image);
            img.src = p_img[0];

            img_div.append(img)

            let card_body_div = document.createElement("div")

            let name = document.createElement("h4");
            name.innerText = fields.name;
            name.className = "card-title";

            let assure_icon = document.createElement("img");
            assure_icon.className = "assure_icon"
            assure_icon.src = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"

            let price = document.createElement("p")
            price.innerText = "₹"+fields.discount_price;
            price.style.fontWeight = "bold";
            price.className = "card-text fw-bold mb-0";

            let mrp = document.createElement("del");
            mrp.innerText = "₹"+fields.retail_price;
            mrp.style.fontWeight = "bold";
            mrp.className = "card-text muted mt-0";

            card_body_div.append(name, assure_icon, price, mrp)

            prod_div.append(img_div, card_body_div);

            prod_list.append(prod_div)

        });

        
    }

    function toarray(imgstr){
        var imgarray=repl(imgstr).split(",");

        function repl(str){
            var tem="";
            for(var i=0;i<str.length;i++)
            if(str[i]!=="["&&str[i]!="]"&&str[i]!='"')
                tem=tem+str[i];

            return tem;
        }

        return imgarray;
    }

    var [cm, cw, ct, ch, cw] = [0,0,0,0,0];

    function mens_shoes(){
        document.getElementById("products").innerHTML = null;
        var All_Products = JSON.parse(localStorage.getItem("all_products"));
        var newlist = [];

        All_Products.forEach((prod)=>{
            if(prod.fields.category === "mensshoes"){
                newlist.push(prod);
            }
        })

        let c_mens = document.getElementById("mens").checked;
        let c_womens = document.getElementById("womens").checked;
        let c_travels = document.getElementById("travels").checked;
        let c_homeapp = document.getElementById("homeapp").checked;
        let c_watches = document.getElementById("watches").checked;

        if(c_mens == true &&  cm === 0){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "mensshoes"){
                    newlist.push(prod);
                }
            })  
            cm = 1;
        }

        if(c_womens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "womensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_travels == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "travel"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_homeapp == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_watches == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }
        localStorage.setItem("newlist",JSON.stringify(newlist))
        products(newlist)
    }

    function women_shoes(){
        document.getElementById("products").innerHTML = null;
        var All_Products = JSON.parse(localStorage.getItem("all_products"));
        var newlist = [];

        All_Products.forEach((prod)=>{
            if(prod.fields.category === "womensshoes"){
                newlist.push(prod);
            }
        })

        let c_mens = document.getElementById("mens").checked;
        let c_womens = document.getElementById("womens").checked;
        let c_travels = document.getElementById("travels").checked;
        let c_homeapp = document.getElementById("homeapp").checked;
        let c_watches = document.getElementById("watches").checked;

        if(c_mens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "mensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_womens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "womensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_travels == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "travel"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_homeapp == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_watches == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }
        localStorage.setItem("newlist",JSON.stringify(newlist))
        products(newlist)
    }
    
    function travel(){
        document.getElementById("products").innerHTML = null;

        var All_Products = JSON.parse(localStorage.getItem("all_products"));
        var newlist = [];

        All_Products.forEach((prod)=>{
            if(prod.fields.category === "travel"){
                newlist.push(prod);
            }
        })

        let c_mens = document.getElementById("mens").checked;
        let c_womens = document.getElementById("womens").checked;
        let c_travels = document.getElementById("travels").checked;
        let c_homeapp = document.getElementById("homeapp").checked;
        let c_watches = document.getElementById("watches").checked;

        if(c_mens == true && ct === 0){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "mensshoes"){
                    newlist.push(prod);
                }
            }) 
            ct = 1; 
        }

        if(c_womens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "womensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_travels == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "travel"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_homeapp == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_watches == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }

        localStorage.setItem("newlist",JSON.stringify(newlist))
        products(newlist)
    }
    
    function watches(){
        document.getElementById("products").innerHTML = null;
        var All_Products = JSON.parse(localStorage.getItem("all_products"));
        var newlist = [];

        All_Products.forEach((prod)=>{
            if(prod.fields.category === "watches"){
                newlist.push(prod);
            }
        })

        let c_mens = document.getElementById("mens").checked;
        let c_womens = document.getElementById("womens").checked;
        let c_travels = document.getElementById("travels").checked;
        let c_homeapp = document.getElementById("homeapp").checked;
        let c_watches = document.getElementById("watches").checked;

        if(c_mens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "mensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_womens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "womensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_travels == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "travel"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_homeapp == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_watches == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }
        localStorage.setItem("newlist",JSON.stringify(newlist))
        products(newlist)
        
    }

    function homeapp(){
        
        document.getElementById("products").innerHTML = null;
        var All_Products = JSON.parse(localStorage.getItem("all_products"));
        var newlist = [];

        All_Products.forEach((prod)=>{
            if(prod.fields.category === "homeappliances"){
                newlist.push(prod);
            }
        })

        let c_mens = document.getElementById("mens").checked;
        let c_womens = document.getElementById("womens").checked;
        let c_travels = document.getElementById("travels").checked;
        let c_homeapp = document.getElementById("homeapp").checked;
        let c_watches = document.getElementById("watches").checked;

        if(c_mens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "mensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_womens == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "womensshoes"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_travels == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "travel"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_homeapp == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }

        if(c_watches == true){
            All_Products.forEach((prod)=>{
                if(prod.fields.category === "watches"){
                    newlist.push(prod);
                }
            })  
        }
        
        localStorage.setItem("newlist",JSON.stringify(newlist))
        products(newlist)
        
    }
    
    function s99_499(){
        console.log("99-499")
        let list = [];
        fetch("https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?maxRecords=16",{
        method:'GET',
        headers:{
            'Authorization':'Bearer keyIkILcyVWkPItLt'
        }
    
        })
        .then(function(res){
            return res.json(); 
        })
        .then(function(res){
            // var records = res;
            // console.log(res.records)
            sortByDiscount(res.records)
            products(list)
            console.log(list)
            function sortByDiscount(fields){
                document.getElementById("products").innerHTML = null;

                fields.forEach((prod) => {
                    let discount = prod.fields.retail_price - prod.fields.discount_price;
                    if(discount > 99 && discount < 499){
                        list.push(prod)
                    }
                });
            }
        });
    }

    function s500_999(){
        let list = [];
        fetch("https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?maxRecords=16",{
        method:'GET',
        headers:{
            'Authorization':'Bearer keyIkILcyVWkPItLt'
        }
    
        })
        .then(function(res){
            return res.json(); 
        })
        .then(function(res){
            // var records = res;
            // console.log(res.records)
            sortByDiscount(res.records)
            products(list)
            console.log(list)
            function sortByDiscount(fields){
                document.getElementById("products").innerHTML = null;

                fields.forEach((prod) => {
                    let discount = prod.fields.retail_price - prod.fields.discount_price;
                    if(discount > 500 && discount < 999){
                        list.push(prod)
                    }
                });
            }
        });
    }

    function s1000_2499(){
        let list = [];
        fetch("https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?maxRecords=16",{
        method:'GET',
        headers:{
            'Authorization':'Bearer keyIkILcyVWkPItLt'
        }
    
        })
        .then(function(res){
            return res.json(); 
        })
        .then(function(res){
            // var records = res;
            // console.log(res.records)
            sortByDiscount(res.records)
            products(list)
            console.log(list)
            function sortByDiscount(fields){
                document.getElementById("products").innerHTML = null;

                fields.forEach((prod) => {
                    let discount = prod.fields.retail_price - prod.fields.discount_price;
                    if(discount > 1000 && discount < 2499){
                        list.push(prod)
                    }
                });
            }
        });
    }

    function s2500_4999(){
        let list = [];
        fetch("https://api.airtable.com/v0/appfnClvZG34RFIeI/Table%201?maxRecords=16",{
        method:'GET',
        headers:{
            'Authorization':'Bearer keyIkILcyVWkPItLt'
        }
    
        })
        .then(function(res){
            return res.json(); 
        })
        .then(function(res){
            // var records = res;
            // console.log(res.records)
            sortByDiscount(res.records)
            products(list)
            console.log(list)
            function sortByDiscount(fields){
                document.getElementById("products").innerHTML = null;

                fields.forEach((prod) => {
                    let discount = prod.fields.retail_price - prod.fields.discount_price;
                    if(discount > 2500 && discount < 4999){
                        list.push(prod)
                    }
                });
            }
        });
    }

    function LtoH(){
        // let sortlist = [];
        let newlist1 = JSON.parse(localStorage.getItem("newlist"));
        
        document.getElementById("products").innerHTML = null;

        let arr = newlist1.sort(function(a,b){
           return a.fields.discount_price - b.fields.discount_price;
        });

        products(arr)

        
    }

    function HtoL(){
        let newlist1 = JSON.parse(localStorage.getItem("newlist"));

        document.getElementById("products").innerHTML = null;

        let arr = newlist1.sort(function(a,b){
           return b.fields.discount_price - a.fields.discount_price;
        });

        products(arr)

        
    }

    function Clear_filters(){
        location.reload()
    }

    

    // export default mens_shoes 