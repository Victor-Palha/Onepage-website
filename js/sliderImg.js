var index2 = 1

function bullet2(n){
    sliderImg(n)
}

function next(n){
    index2 = index2 + n
    sliderImg(index2)
}
function previous(n){
    index2 = index2 - n
    sliderImg(index2)
}
function sliderImg(i){
    var bullets = document.getElementsByClassName('bullet-single2')
    var imgs = document.getElementsByClassName('imgs')
    if(i > (imgs.length)){
        index2 = 1
        i = index2
    }
    if(i == 0){
        index2 = (imgs.length)
        i = index2
    }
    if(i == 1){
        bullets[0].style.backgroundColor = '#7D82B8'
        bullets[1].style.backgroundColor = '#EDF2FB'
        bullets[2].style.backgroundColor = '#EDF2FB'
        bullets[3].style.backgroundColor = '#EDF2FB'

        imgs[0].style.display = 'block'
        imgs[1].style.display = 'none'   
        imgs[2].style.display = 'none'
        imgs[3].style.display = 'none'

    }if(i == 2){
        bullets[0].style.backgroundColor = '#EDF2FB'
        bullets[1].style.backgroundColor = '#7D82B8'
        bullets[2].style.backgroundColor = '#EDF2FB'
        bullets[3].style.backgroundColor = '#EDF2FB'

        imgs[0].style.display = 'none'
        imgs[1].style.display = 'block'
        imgs[2].style.display = 'none'
        imgs[3].style.display = 'none'
    }if(i == 3){
        bullets[0].style.backgroundColor = '#EDF2FB'
        bullets[1].style.backgroundColor = '#EDF2FB'
        bullets[2].style.backgroundColor = '#7D82B8'
        bullets[3].style.backgroundColor = '#EDF2FB'

        imgs[0].style.display = 'none'
        imgs[1].style.display = 'none'
        imgs[2].style.display = 'block'
        imgs[3].style.display = 'none'
    }
    if(i == 4){
        bullets[0].style.backgroundColor = '#EDF2FB'
        bullets[1].style.backgroundColor = '#EDF2FB'
        bullets[2].style.backgroundColor = '#EDF2FB'
        bullets[3].style.backgroundColor = '#7D82B8'

        imgs[0].style.display = 'none'
        imgs[1].style.display = 'none'
        imgs[2].style.display = 'none'
        imgs[3].style.display = 'block'
    }
    index2 = i
    console.log(`Contador principal: ${i}`)
}

setInterval(() => {
        cTime = index2
        cTime = cTime + 1

        sliderImg(cTime)
        if(cTime > 4){
            cTime = 1
            console.log(`Ctime: ${cTime}`)
            console.log(`index: ${index}`)
        }
    }, 3000);