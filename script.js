const formEl = document.querySelector('.form-add');
formEl.addEventListener('submit', event =>{
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch('https://vercel-host-ten.vercel.app/products', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log)
    .catch(error => console.log(error));
});

const formPl = document.querySelector('.form-patch');
formPl.addEventListener('submit', event =>{
    event.preventDefault();
    const formData = new FormData(formPl);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch(`https://vercel-host-ten.vercel.app/products/${data.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log)
    .catch(error => console.log(error));
});

const formDl = document.querySelector('.form-patch');
formDl.addEventListener('submit', event =>{
    event.preventDefault();
    const formData = new FormData(formDl);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch(`https://vercel-host-ten.vercel.app/products/${data.id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    .then(data => console.log)
    .catch(error => console.log(error));
});
