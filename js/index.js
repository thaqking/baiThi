let btnPrev=document.querySelector(".prev");
let bntNext=document.querySelector(".next");
let content =document.querySelector(".slide-content");
let products = document.querySelectorAll(".product");
let contents =[
    "Lấy cảm hứng từ Nike Air Max 90, Nike Air Max Excee là sự tôn vinh nét cổ điển qua một lăng kính mới. Các đường kéo dài và tỷ lệ méo mó ở phần trên mang đến vẻ ngoài của thập niên 90 mà bạn yêu thích trong một không gian mới, hiện đại.",
    "Phối màu trắng, xanh đại học và đen. Những chiếc Air Jordan 1 này có phần trên bằng da màu Trắng với lớp phủ da lộn University Blue và Màu đen bao phủ các Swooshes, cổ áo ở mắt cá chân và dây buộc. Đế giữa màu trắng trên đế ngoài bằng cao su màu xanh lam hoàn thiện thiết kế của đôi AJ1 High này",
    "Lấy cảm hứng từ Nike Air Max 90, Nike Air Max Excee là sự tôn vinh nét cổ điển qua một lăng kính mới. Các đường kéo dài và tỷ lệ méo mó ở phần trên mang đến vẻ ngoài của thập niên 90 mà bạn yêu thích trong một không gian mới, hiện đại. ",
]

let index=0;
let next=()=>{
    index++;
    index = index>contents.length-1 ?  0 : index;     
    content.innerHTML= contents[index]
}

let index_2 =0;
let prev=()=>{
    index_2--;
    index_2 = index_2 < 0 ?  contents.length-1  : index_2 ;   
    content.innerHTML= contents[index_2]  
}
bntNext.onclick = ()=>{
    next();
};
btnPrev.onclick = ()=>{
    prev();
};

let links=[
   "https://www.nike.com/vn/t/air-max-excee-shoe-lPbXqt/CD4165-117",
   "https://mysneakerocean.com/air-jordan-1-university-blue-555088-134-fecha-de-lanzamiento/",
   "https://www.nike.com/vn/t/air-max-excee-shoe-lPbXqt/CD4165-001"
]
products.forEach(product=>{
    let index = product.getAttribute("data-index");
    product.onclick=()=>{
        location.href=links[index-1]
    }
    
})