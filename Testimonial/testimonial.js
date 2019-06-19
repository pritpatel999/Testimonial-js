(function(){
let index = 0;
let customers = [];

//object customer function
function Customer(name,img,text){
    this.name = name;
    this.img = img;
    this.text = text;
}

//create customer function
function createCustomer(name,img,text){
    //full image
    let fullImg = `img/ps${img}.jpg`;

    //create a new custome instance
    const customer = new Customer(name,fullImg,text);
    
    //add to all customers
    customers.push(customer);
}

createCustomer('prit',1,' this is prit\'s fsdafd sf dsf dsa af dsf ds f sda fds fdfhkdjs kjsdfh jdsgu iewyilasj dlkshdfkjdgfuihx kc nsdf');
createCustomer('naruto',2,'this is naruto\'s fsdafd sf dsf dsa af dsf ds f sda fds fdfhkdjs kjsdfh jdsgu iewyilasj dlkshdfkjdgfuihx kc nsdf');
createCustomer('sasuke',3,'this is sasuke\'s fsdafd sf dsf dsa af dsf ds f sda fds fdfhkdjs kjsdfh jdsgu iewyilasj dlkshdfkjdgfuihx kc nsdf');
createCustomer('jiraya',4,'this is jiraya\'s fsdafd sf dsf dsa af dsf ds f sda fds fdfhkdjs kjsdfh jdsgu iewyilasj dlkshdfkjdgfuihx kc nsdf');
createCustomer('itachi',5,'this is itachi\'s fsdafd sf dsf dsa af dsf ds f sda fds fdfhkdjs kjsdfh jdsgu iewyilasj dlkshdfkjdgfuihx kc nsdf');

//console.log(customers);

document.querySelectorAll('.btn').forEach(function(item){
    item.addEventListener('click',function(event){
        event.preventDefault();
        //console.log(event.target);
        const value = event.target;
        
        if(value.classList.contains('fa-chevron-left')){
            if(index === 0){
                index = customers.length;
            }
            index--;
           document.getElementById('customer-img').src = customers[index].img;
            document.getElementById('customer-name').textContent = customers[index].name;
            document.getElementById('customer-text').textContent = customers[index].text;
        }
        
        if(value.classList.contains('fa-chevron-right')){
            if(index == (customers.length - 1 )){
                index = -1;
            }
            index++;
            document.getElementById('customer-img').src = customers[index].img;
            document.getElementById('customer-name').textContent = customers[index].name;
            document.getElementById('customer-text').textContent = customers[index].text;
        }

    })
})


})();





















