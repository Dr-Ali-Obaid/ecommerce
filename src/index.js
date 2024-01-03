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
    })
});

document.querySelectorAll('.color-option [type ="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active')
    })
});

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear() + "م";