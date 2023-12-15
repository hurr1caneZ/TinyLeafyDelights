
window.addEventListener('DOMContentLoaded', async function () {
    const productContainer = document.querySelector('.product-container')
    const preloader = document.querySelector('.preloader')
    const moreImagesButton = document.querySelector('.more-img-button')
    const errorMessage = document.querySelector(".error-message")

    console.log(await getImages(32))


    async function getImages(images_count) {
        let random = Math.random() * 10;
        preloader.style.display = 'block';
        console.log("started the request" + random)
        try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=vegetables&per_page=${images_count}&size=medium2&orientation=portrait&page=${random}`, {
                method: 'GET',
                headers: {
                    'Authorization': '1S9ufDXzal35Ul5QjpKZUeNYUJiFxzahbUPSvYDAJr9EyQJ3Y0FQlvxc'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("finished successfully the request")
            const responseData = await response.json();
            console.log(responseData)

            addImagesToContainer(responseData, images_count);
        } catch (err) {
            showErrorMessage(err);
        }


    }

    moreImagesButton.addEventListener('click', async function () {
        await getImages(8)
    })

    function addImagesToContainer(response, images_count) {
        showSuccess('Fetched successfully!')
        preloader.style.display = 'none'

        for (let i = 0; i < images_count; i++) {
            let url1 = response.photos[i].src.landscape
            let image = `<img class="product-image" src="${url1}" alt="img"><p></p>`
            let product = `<div class="product">${image}<p class="product-price">${Math.round(i * Math.random() * 100)}p/100г</p></div>`
            productContainer.innerHTML += product
        }
    }

    function showErrorMessage(err) {
        /*Toastify({
            text: "Error!",
            duration: 2000, // Set the duration for how long the toast should be visible
            gravity: "top", // You can adjust the position (top, bottom, left, right)
            backgroundColor: "red", // Customize the background color
        }).showToast();*/
        errorMessage.textContent = err;
        errorMessage.style.color = 'red'
    }
    function showSuccess(message) {
        /*Toastify({
            text: `${message}`,
            duration: 2000, // Set the duration for how long the toast should be visible
            gravity: "top", // You can adjust the position (top, bottom, left, right)
            backgroundColor: "green", // Customize the background color
        }).showToast();*/
        errorMessage.textContent = message;
        errorMessage.style.color = 'green'
    }

})

