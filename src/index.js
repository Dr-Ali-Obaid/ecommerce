import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css';
import '@fortawesome/fontawesome-free/js/all.min.js'


document.querySelectorAll('[data-bs-toggle ="tooltip"]').forEach(item => new bootstrap.Tooltip(item));
document.querySelectorAll(".add-to-cart-btn").forEach(i => {
    i.addEventListener('click', () => {
        alert("تم إضافة المنتج إلى السلة")
    })
});

document.querySelectorAll('.size-option [type ="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active')
    });
});

document.querySelectorAll('.color-option [type ="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active')
    });
});

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerProduct = parent.getAttribute('data-product-price');
        const totalPrice = newQuantity * pricePerProduct;
        parent.querySelector('.total-price-for-product').innerHTML = totalPrice + '$';
        totalAdjustedPrice();
    });
});
document.querySelectorAll('[data-remove-from-cart]').forEach(i =>{
    i.addEventListener('click', ()=>{
        i.closest('[data-product-info]').remove();
        totalAdjustedPrice();
    });
});

function totalAdjustedPrice(){
    let totalOfAllProducts = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnit = product.getAttribute('data-product-price');
            const quantity = product.querySelector('[data-product-quantity]').value;
            const totalPerUnit = quantity * pricePerUnit;
            totalOfAllProducts += totalPerUnit;
        });
        document.getElementById('total-price-for-all-products').innerHTML = totalOfAllProducts;
};

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear() + "م";