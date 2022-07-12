var index = 1

function bullet(n){
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
    var bullets = document.getElementsByClassName('bullet-single')
    var depoimentos = document.getElementsByClassName('boxs-depoimentos')
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

setInterval(() => {
        cTime = index
        cTime = cTime + 1

        slider(cTime)
        if(cTime > 3){
            cTime = 1
            console.log(`Ctime: ${cTime}`)
            console.log(`index: ${index}`)
        }
    }, 3000);