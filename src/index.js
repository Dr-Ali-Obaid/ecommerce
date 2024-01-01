import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css';
import '@fortawesome/fontawesome-free/js/all.min.js'


document.querySelectorAll('[data-bs-toggle ="tooltip"]').forEach(item => new bootstrap.Tooltip(item));
document.querySelectorAll(".add-to-cart-btn").forEach(i =>{
    i.addEventListener('click', ()=>{
        alert("تم إضافة المنتج إلى السلة")
    })
});

document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear() + "م";