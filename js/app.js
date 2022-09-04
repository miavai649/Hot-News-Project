const loadCategories = async () =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
  }
  catch(error){
    console.log(error);
  }
};

const displayCategories = async (categories) =>{
  categories.forEach((category) => {
    const {category_id, category_name} = category;

    const categoryContainer = document.getElementById('category-container')
    const li = document.createElement('li');
    li.classList.add('text-md', 'lg:text-xl', 'font-semibold');
    li.innerHTML=`
    <a onclick="loadCategories(${category_id})">${category_name}</a>
    `;

    categoryContainer.appendChild(li);
  });
};





