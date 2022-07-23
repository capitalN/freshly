arr=[
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",
        name:"Marinara",
        desc:"599",
        code:"Signiture Collection"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"629",
        code:"Protienes"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad6d3127037b5fcc80be_production-meal-image-3ec5fbfe-a717-4ef5-9d85-e071b2fab603.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"799",
        code:"Freshly Fit"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e-p-800.jpeg",
        name:"Creamy Marinara",
        desc:"399",
        code:"Signiture Collection"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad2925d9627236351220_production-meal-image-857e178e-6526-43e2-a8f3-7b8eb178c3c1-p-800.jpeg",
        name:"Green Curry",
        desc:"599",
        code:"Purely Plant"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"500",
        code:"Signiture Collection"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad18c6660c69c5c75460_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0-p-800.jpeg",
        name:"Curry Bowl",
        desc:"699",
        code:"Purely Plant"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bfaee61ff381ae00518_production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"499",
        code:"Freshly Fit"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"699",
        code:"Protienes"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad2200f65104303c8992_production-meal-image-48af6169-a821-442b-ae63-e7ec7983864a-p-800.jpeg",
        name:"Thai Curry Bowl",
        desc:"599",
        code:"Purely Plant"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",
        name:"Lentil Pasta",
        desc:"899",
        code:"Signiture Collection"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad1646bc1dd6ec928799_production-meal-image-e706d1dc-6ac2-4a50-8676-b028865f0111.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"599",
        code:"Protienes"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809eae991696388751312b_production-meal-image-61221a9e-23cf-4042-a8ff-c15cc1493807-p-800.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"699",
        code:"Purely Plant"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad1017778013d8a88f43_production-meal-image-8c822399-bb64-4643-9c22-9beba7f589dd.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"399",
        code:"Freshly Fit"
    },    
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"399",
        code:"Freshly Fit"
    },
    {
        image:"https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg",
        name:"Creamy Marinara Lentil Pasta",
        desc:"290",
        code:"Protienes"
    },
]

displayFun(arr)
function displayFun(arr){
    document.querySelector("#grid").innerHTML=null;
    arr.forEach(function(el,i){
        bigDiv=document.createElement("div");
        div1=document.createElement("div");
        div2=document.createElement("div");
        div3=document.createElement("div");
        img=document.createElement("img")
        img.src=el.image;
        b=document.createElement("b");
        b.innerText=el.name;
        p1=document.createElement("button");
        p1.setAttribute("id","cart")
        p1.innerText="add to cart";
        p1.addEventListener("click",function(){
            cartFun(el);
        })
        p2=document.createElement("p");
        p2.innerText=el.code;
        btn=document.createElement("button");
        btn.innerText=el.desc;
        div1.append(img);
        div2.append(b,p2,p1);
        div3.append(btn)
        bigDiv.append(div1);
        bigDiv.append(div2)
        bigDiv.append(div3)
        document.querySelector("#grid").append(bigDiv)
    })
}

/* filter ************/
select=document.querySelector("select");
select.addEventListener("change", function(){
    if(select.value==""){
        displayFun(arr);
    }
    else{
        filter=arr.filter(function(elem,ind){
            return elem.code==select.value;
        })
        displayFun(filter)
    }
});

/* user name *********/
user=localStorage.getItem("user");
if(user!=null){
    document.querySelector("#login").innerHTML=user;
    document.querySelector("#login").style.backgroundColor="orangered";
}

/* add to cart *******/
cartArr=JSON.parse(localStorage.getItem("cartLs"))||[];
function cartFun(el){
    cartArr.push(el);
    localStorage.setItem("cartLs",JSON.stringify(cartArr));
    alert("added to cart")
}