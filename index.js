const APIKEY='ba6b94af0f424f30a83271fbdec67af3'

const recipeDiv=document.querySelectorAll('.recipe-div1')

async function fetchData(){
  const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${APIKEY}`)

  const data=await response.json()
  return data.recipes
}

fetchData()
.then((data)=>{
  const recipees=data
  console.log(recipees)

  recipees.map((recipe)=>{
    console.log(recipe.image)

    let section=document.createElement('section')
    let img=document.createElement('img')
    img.src=recipe.image
    // img.style.width=('70%')
    section.append(img)
    section.classList.add('recipe-div2')

    let para=document.createElement('p')
    para.textContent=recipe.title
    para.classList.add('para1')
    section.append(para)

    let ing=document.createElement('p')
    ing.textContent=recipe.instructions
    ing.classList.add('ing1')
    section.append(ing)

    let link=document.createElement('a')
    link.href=recipe.sourceUrl
    link.target='blank'
    let btn=document.createElement('button')
    btn.textContent='View Profile'
    link.append(btn)
    section.append(link)

    let article=document.createElement('article')
    article.append(para, ing, link)
    section.append(article)

    let div=document.createElement('div')
    div.classList.add('big-con1')

    div.append(section)

    document.body.append(div)

  })  
})
.catch((error)=>{
  console.log(error)
})