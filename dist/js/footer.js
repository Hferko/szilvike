const d = new Date();
let most = d.getFullYear();

let appFooter = `
<footer>
    <p>${most} &copy;</p>
    <p> Szilvy-Művek</p>
</footer>`;

document.getElementById("appFooter").innerHTML = appFooter;