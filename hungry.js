const search_form = document.getElementById("search-form");
const search_input = document.getElementById("search-input");
const food_menu = document.getElementById("food-menu");

search_form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(search_input.value);
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_input.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.meals) {
        const fooddata = [...data.meals];
        for (let i = 0; i < fooddata.length; i++) {
          const element = fooddata[i];
          console.log(element);
          food_menu.innerHTML = `
            <section class="container  " id="abc">
            <div  class="row row-cols-md-3 g-4  mt-5 ">
                <div class="col">
                    <div>
                        <img src="${element.strMealThumb}"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.strMeal}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            `;
        }
      } else {
        food_menu.innerHTML = "No Food Found";
      }
    });
});

const abc = document.getElementById("abc");
console.log(abc);
food_menu.addEventListener("click", function () {
  const recipeArea = document.getElementById("recipe-area");
  recipeArea.style.display = "block";
});
