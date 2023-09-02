function blog() {
  window.location.href = "blog.html";
}

const category = async () => {
  const item = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await item.json();
  

  const itemContainer = document.getElementById('container');

  data.data.forEach(category => {
              const div = document.createElement('div');
              div.innerHTML=`
              <a onclick=categoryContent('${category.category_id}') class="btn ">${category.category}</a>
              `;
          itemContainer.appendChild(div);

  });

};

const categoryContent = async categoryId => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
  data = await response.json();
  console.log(data)
}


category();
