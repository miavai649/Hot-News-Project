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

    const categoryContainer = document.getElementById('category-container');
    const li = document.createElement('li');
    li.classList.add('font-semibold', 'text-md', 'lg:text-xl');
    li.innerHTML=`
    <a onclick="loadCard(${category_id})">${category_name}</a>
    `;

    categoryContainer.appendChild(li);
  });
};

const loadCard = async (id) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayCard(data.data);
  }
  catch(error){
    console.log(error);
  }
};


const displayCard = async (cards) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.textContent = '';

  // item found counting
  const itemFound = document.getElementById('item-found');
  itemFound.classList.remove('hidden');
  
  const itemFoundCount = document.getElementById('item-found-count');
  itemFoundCount.innerText = cards.length;

  const spinnerSection = document.getElementById('spinner-section');
  spinnerSection.classList.remove('hidden');
  const sortView = cards.sort((a, b) =>{
    if (a.total_view < b.total_view){
      return 1;
    }
    else{
      return -1;
    }
  });
  
}



