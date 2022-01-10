document.querySelector('.btn-open-giftlove').addEventListener('click',()=>{
    document.querySelector('.lovethuy').style.display = 'none';
    document.querySelector('.lovethuygift').style.display = 'flex';
})
document.querySelectorAll(".gift_love").forEach((x)=>{
    x.addEventListener('click',()=>{
        document.querySelector('.lovethuygift').style.display = 'none';
        document.querySelector('.gift-open').style.display = 'block';
        var data = Math.floor(Math.random() * 3).toString();
        console.log(data)
        switch(data){
            case "0":
                document.querySelector('.gift-open-title').textContent = "Chúc mừng vợ iu đã nhận được 1 triệu";
                break;
            case "1":
                document.querySelector('.gift-open-title').textContent = "Chúc mừng vợ iu đã nhận được tình cảm to lớn này của anh iuu";
                break;
            case "2":
                document.querySelector('.gift-open-title').textContent = "Chúc mừng vợ iu đã nhận được 2 triệu ";
                break;
        }
    })
})