const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');


tabItems.forEach(item=>{
  item.addEventListener('click',()=>{

    tabItems.forEach(item1=>{
      item1.classList.remove('tab-border','tab-item-click');
    })
    item.classList.add('tab-border','tab-item-click');


    tabContentItems.forEach(contentItem=>{
      contentItem.classList.remove('show');
    })
    const tabContentItem=document.getElementById(`${item.id}-content`);
    tabContentItem.classList.add('show');

  })

})

