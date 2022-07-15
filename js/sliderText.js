var index = 1
var bullets = document.getElementsByClassName('bullet-single')
var bulletsMobile = document.getElementsByClassName('bullet-single-mobile')
var depoimentos = document.getElementsByClassName('boxs-depoimentos')

function bullet(n){
    slider(n)
}
function bulletMob(n){
    slider(n)
}

function proximo(n){
    index = index + n
    slider(index)
}
function anterior(n){
    index = index - n
    slider(index)
}
function slider(i){
    if(i > (depoimentos.length/2)){
        index = 1
        i = index
    }
    if(i == 0){
        index = (depoimentos.length/2)
        i = index
    }
    if(i == 1){
        bullets[0].style.backgroundColor = '#7D82B8'
        bullets[1].style.backgroundColor = '#EDF2FB'
        bullets[2].style.backgroundColor = '#EDF2FB'

        bulletsMobile[0].style.backgroundColor = 'rgb(125, 130, 184)'
        bulletsMobile[1].style.backgroundColor = 'rgb(237, 242, 251)'
        bulletsMobile[2].style.backgroundColor = 'rgb(237, 242, 251)'


        depoimentos[0].style.display = 'block'
        depoimentos[1].style.display = 'block'   
        depoimentos[2].style.display = 'none'
        depoimentos[3].style.display = 'none'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'none'
    }if(i == 2){
        bullets[0].style.backgroundColor = '#EDF2FB'
        bullets[1].style.backgroundColor = '#7D82B8'
        bullets[2].style.backgroundColor = '#EDF2FB'

        bulletsMobile[0].style.backgroundColor = 'rgb(237, 242, 251)'
        bulletsMobile[1].style.backgroundColor = 'rgb(125, 130, 184)'
        bulletsMobile[2].style.backgroundColor = 'rgb(237, 242, 251)'

        depoimentos[0].style.display = 'none'
        depoimentos[1].style.display = 'none'
        depoimentos[2].style.display = 'block'
        depoimentos[3].style.display = 'block'
        depoimentos[4].style.display = 'none'
        depoimentos[5].style.display = 'none'
    }if(i == 3){
        bullets[0].style.backgroundColor = '#EDF2FB'
        bullets[1].style.backgroundColor = '#EDF2FB'
        bullets[2].style.backgroundColor = '#7D82B8'

        bulletsMobile[0].style.backgroundColor = 'rgb(237, 242, 251)'
        bulletsMobile[1].style.backgroundColor = 'rgb(237, 242, 251)'
        bulletsMobile[2].style.backgroundColor = 'rgb(125, 130, 184)'

        depoimentos[0].style.display = 'none'
        depoimentos[1].style.display = 'none'
        depoimentos[2].style.display = 'none'
        depoimentos[3].style.display = 'none'
        depoimentos[4].style.display = 'block'
        depoimentos[5].style.display = 'block'
    }
    index = i
    console.log(`Contador principal: ${i}`)
}
/*
setInterval(() => {
        cTime = index
        cTime = cTime + 1

        slider(cTime)
        if(cTime > 3){
            cTime = 1
            console.log(`Ctime: ${cTime}`)
            console.log(`index: ${index}`)
        }
    }, 3000);*/