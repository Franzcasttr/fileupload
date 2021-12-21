
        const form = document.querySelector('.form')
        const formName = document.querySelector('#name')
        const formPrice = document.querySelector('#price')
        const formImage = document.querySelector('#image')
        const formContainer = document.querySelector('.container')
        const Delete_btn = document.querySelector('.btn-delete')
        let imagevalue;

formImage.addEventListener('change', async(e)=>{

    const imageFile = e.target.files[0]
    const formData = new FormData()
    formData.append('image', imageFile)//keys and value
    try {

        const {data:{image:{src}}} = await axios.post('api/v1/product/uploads', formData,{
            headers:{'Content-Type':'multipart/form-data'}

        })
        imagevalue = src
    } catch (error) {
        imagevalue = null
        
    }
})

        form.addEventListener('submit', async(e) =>{
            e.preventDefault()
            const nameValue = formName.value
            const priceValue = formPrice.value
            
            try {
                const product = ({name:nameValue, price:priceValue,image:imagevalue})
               await axios.post('api/v1/product', product)
                
                fetchproduct()
            } catch (error) {
                
            }
        })

        async function fetchproduct(){
            try {
                const {data:{get_all}} = await axios.get('api/v1/product')
                const productDOM = get_all.map((product)=>{
                    const {_id:taskID} = product
                    return `<div class="product"><img src="${product.image}" alt="${product.name}" class="img" /> <footer><p>${product.name}</p><span>&#8369;${product.price}</span></footer>
                    <button type="button" class="btn-delete" data-id="${taskID}">Delete</button></div>`

                        
                }).join('')
                formContainer.innerHTML = productDOM
            } catch (error) {
                console.log(error);
            }
        }
fetchproduct()


        formContainer.addEventListener('click', async (e) => {
            // console.log('HEllo');
       console.log(e.target.parentElement.classList.contains('btn-delete')); 
//   const el = e.target
//   if (e.target.parentElement.classList.contains('btn-delete')) {
//       console.log('Hello');
//     const id = el.parentElement.dataset.id
//     try {
//       await axios.delete(`/api/v1/product/${id}`)
//      fetchproduct()
//     } catch (error) {
//       console.log(error)
//     }
//   }
})
