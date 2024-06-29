let yes = 0
let no = 0

function ppp(){
    yes+=1
}

function ddd(){
    no+=1
}
function aaa(){
    alert('може ви передумали?')
    sss()
}
function sss(){
    let co = confirm('може хоч трохи')
    if(co){
        no = 0
        yes = 21
        xxx()
    }else{
        aaa()
    }
}
function xxx(){
    let rad1 = document.getElementById('rd')
    let rad2 = document.getElementById('dr')
    if(no > 0 && yes > 0){
        alert('ви вибрали два варіанти, або нажали почерзі обоє...')
        let zzz = prompt(`напишіть для точної перевірки що ви вибрали (напишіть, (yes) якщо вибрали yes, або (no) якщо вибрали 'no')`)
        if(zzz == 'yes'){
            no = 0
            yes = 21
            xxx()
        }else if(zzz == 'no'){
            no = 21
            yes = 0
            xxx()
            rad1.checked = false
            rad2.checked = false
        } else{
            alert('фу')
            rad1.checked = false
            rad2.checked = false
        }

        
    } else{
        if(yes > 0){
            let pr = parseInt(prompt('пишіть номер своєї картки'))
            let rp = parseInt(prompt('та CVV код (ми не підглядаємо можете писати)'))
        let beb = confirm(`Перевірте чи правильно все: ${pr}, ${rp}`);
                alert('з вашого рахунку списано всі гроші😊, дякуємо за підтримку')
                rad1.checked = false
            rad2.checked = false
            }
        }
        if(no > 0){
            sss()
    }
    
    }


