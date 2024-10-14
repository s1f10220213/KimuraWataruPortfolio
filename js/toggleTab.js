const conceptBtn = document.getElementById('tab-concept');
const conceptContent = document.getElementById('concept');

const detailBtn = document.getElementById('tab-detail');
const detailContent = document.getElementById('detail');

conceptBtn.addEventListener('click', function() {
    conceptContent.style.display = 'block'; 
    detailContent.style.display = 'none'; 
})

detailBtn.addEventListener('click', function() {
    conceptContent.style.display = 'none'; 
    detailContent.style.display = 'block'; 
})