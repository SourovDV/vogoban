const AiUniverse = async()=>{
    const datas = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const convert =await datas.json()
    const data =convert.data.tools
    console.log(data)
    displayArray(data)
}
const displayArray = (data) =>{


    const container = document.getElementById('card-container');
    data.forEach((data)=>{
        console.log(data)
    const div = document.createElement('div') 
    div.classList= `card w-96 bg-base-100 border shadow-xl` 
    div.innerHTML = `
    <figure><img src="${data.image}" alt="Shoes" /></figure>
    <div class="card-body">
    <p>Features</p>
    <p>1. <span>Natural language processing</span></p>
    <p>2. <span>Contextual understanding</span></p>
    <p>3. <span>Text generation</span></p>
    <hr>
      <h2 class="card-title">${data.name}</h2>
      <p>${data.published_in }</p>
      <div class="card-actions justify-end">
      <button onclick="roundedBtn('${data.id}')" class="btn rounded-3xl "><img src="./Vector (1).png" ></button>
      </div>
    </div> 
    `
    container.appendChild(div)

    })
}

const roundedBtn = async(id)=>{
  console.log('dake hoy ki na',id)
  const load = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const data =await load.json()
  console.log(data)
  details(data)
}
const details = (id)=>{
  console.log(id)
  const container = document.getElementById('show_all_details')
  const div = document.createElement('div')
  div.innerHTML = `

  <img src="${id.data.image_link[0]}" alt="">
  <h3 class="font-bold text-lg">Hellow</h3>
  <p class="py-4">Press ESC key or click the button below to close</p>
  <div class="modal-action">
      <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
      </form>
  </div>
  
  `

  container.appendChild(div)

  show_details.showModal()
}






AiUniverse()