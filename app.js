const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});
const fileUpload = document.querySelector("#file-upload");
fileUpload.addEventListener("change", (submit) => {
	const { files } = submit.target;
    const getSizeImage = files[0].size;
	
	if(size > 1024 * 1024) alert("Chỉ cho phép tải tệp tin nhỏ hơn 1MB");
	else alert("Đăng tải tệp thành công");
	
	console.log("files", files)
})
const reader = new FileReader()
fileUpload.addEventListener("change", (submit) => {
	const files = submit.target.files;
	
	reader.readAsDataURL(files[0])
	
	reader.addEventListener("load", (submit) => {
			const url = submit.target.results
			
			document.querySelector("pdf").src = URL.createObjectURL();
	})
})