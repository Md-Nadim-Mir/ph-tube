
let sort_data = [];





let dataLoad = async () => {



    let url = 'https://openapi.programming-hero.com/api/videos/categories';

    let res = await fetch(url);
    let data = await res.json();
    //  console.log(data.data);

    let categories_name = data.data;

    // categories name container initialize

    let categories_name_container = document.getElementById('categories_name_container');

    categories_name.forEach((name) => {


        let div = document.createElement('div');

        div.innerHTML = `
        
        <button onclick="categories_data_load('${name.category_id}')"
        class="btn btn-ghoast text-black font-bold text-base focus:bg-[red]">${name.category}
        </button>
        
        `

        categories_name_container.appendChild(div);


    })






}


categories_data_load = async (id) => {

    // console.log(id)


    let url = `https://openapi.programming-hero.com/api/videos/category/${id}`;

    let res = await fetch(url);
    let data = await res.json();

    // console.log(data.data);

    let categories_data = data.data;

    sort_data = data.data;

    // dataFetch(sort_data);

    // console.log(sort_data);


    //  categories_data_container

    let categories_data_container = document.getElementById('categories_data_container');

    categories_data_container.innerHTML = '';

    // empty categories

    let empty_category = document.getElementById('empty_category');
    empty_category.innerHTML = '';




    if (categories_data.length > 0) {

        categories_data.forEach((details) => {

            // hours or minutes calculate

            let sec = `${details.others.posted_date}`

            // console.log(sec);

            let a;

            if (sec > 60 && sec < 86400) {

                let hour = Math.floor(sec / 3600);
                let minutes = Math.floor(sec / 60) % 60;

                a = hour + ' hours ' + minutes + ' minutes ago'

            }


            else if (sec > 86400) {

                let year = Math.floor(sec / 31104000);

                a = year + ' years ago';

            }

            else {
                a = 'just now'
            }


            // console.log(a);



            // let verified string access
            let verified = `${details.authors[0].verified}`;

            // verified icon
            let icon = `<img src="./images/fi_10629607.svg" alt="">`


            let div = document.createElement('div');

            div.innerHTML = `
             
             <div class="card w-full  shadow-sm">
                    
             <figure><img style="height:300px;" class="w-full rounded-sm" src="${details.thumbnail}" alt="Shoes" /></figure>

             <span class=" text-xs text-white font-semibold text-end ml-24 mr-3 py-2 px-3 bg-[#312e2e] -mt-8 mb-5 rounded-2xl ">${a}</span>

    
    
             <div class="card-body">
    
    
                 <div class="flex gap-4">
    
                        <img style="height:40px;" class="rounded-full w-[15%]" src="${details.authors[0].profile_picture}" alt="">
    
                        
    
                        <div>
    
                         <h1 class="text-base font-extrabold text-black">${details.title}</h1>
    
                          <div class="flex gap-2 pt-1 pb-1">

                                 <h1 class="text-sm font-bold">${details.authors[0].profile_name}</h1>


                                 <p>${verified ? icon : ''}</p>  
    
                             
                                         
                           
                                 
                          </div>   
    
    
                          <h1 class="text-xs font-bold"><span>${details.others.views}</span> views</h1>
    
    
                        </div>
                 </div>
               
             </div>
    
         </div>
    
             
             `

            categories_data_container.appendChild(div);


        })



    }

    else {



        let div = document.createElement('div');

        div.innerHTML = `
        
      

        <div class="flex items-center justify-center">

        <img class="pt-10 text-center" src="./images/Icon.png" alt="">

       </div>

       <h1 class="mt-10 text-center text-black font-extrabold text-2xl">Oops!! Sorry, There is no  <br> content here</h1>

      

        
        `
        empty_category.appendChild(div);


    }




}


categories_data_load(1000);


// sort card according to view 




// sort by view

let sort_by_view = document.getElementById('sort_by_view');

sort_by_view.addEventListener('click', function (event) {


    

     sort_data.forEach(item=>{
        console.log(item)
     })





})







dataLoad();


// block page

let blog = document.getElementById('blog');

blog.addEventListener('click', function () {


    window.location.href = 'block.html'

})