const selectcolr = document.getElementById('colorSelect');
const btn = document.querySelector('input[type="button"]');

btn.addEventListener('click', ()=>{
    const selectedIndex = selectcolr.selectedIndex;

    if(selectedIndex !== -1){
        selectcolr.remove(selectedIndex)
    }
})
