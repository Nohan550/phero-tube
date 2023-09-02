function blog() {
  window.location.href = "blog.html";
}

const category = async () => {
  const item = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await item.json();

  const itemContainer = document.getElementById("container");

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
              <a onclick=categoryContent('${category.category_id}') class="btn ">${category.category}</a>
              `;
    itemContainer.appendChild(div);
  });
};

const categoryContent = async (categoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  data = await response.json();

  const contentContainer = document.getElementById("card-container");

  contentContainer.innerHTML = "";

  data.data.forEach((content) => {
    const div = document.createElement("div");

    

    div.innerHTML = `
    <div class="card w-80 bg-base-100 shadow-xl px-3 py-3">
    <figure><img class="w-72 h-48  " src="${content?.thumbnail}" alt="S" /></figure>
    <div class="flex gap-3 py-3 items-center " >

      <img class="w-10 h-10 rounded-full   " src="${content?.authors[0]?.profile_picture}" alt="">
      <h3 class="bg-black text-white absolute ml-48 mb-28">${content?.others?.posted_date} </h3>
      <h2 class="text-xl font-bold">
        ${content?.title}
      </h2>
    </div>

    <div class= "flex items-center gap-2">
      <h2>${content?.authors[0]?.profile_name}</h2>
      <img id="image" class="h-4 w-4 " src="./icon/icons8-verified-17.png " alt="">
    </div>
     <div >
     <h3>${content?.others?.views} views</h3>
   
     </div>
  </div>
    `;
    
    contentContainer.appendChild(div);
      
    

  }
  
  
  );
 
  
 
};

categoryContent("1000");
category();
