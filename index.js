let object = ['greenCharacter','pillar','crate','well']

for (let index = 0; index < object.length;index++){
    const element = object[index];
}



function newImage(url,left,bottom) {


    let object = document.createElement('img')
    object.src = 'assets/green-character.gif'
    object.style.position = 'fixed'
    object.style.left = '100px'
    object.style.bottom = '100px'
    document.body.append(object)
    
  }
    
  newImage('$assets/tree.png,200,300')
  newImage('assets/pillar.png,350px,100px')
  newImage('assets/crate.png,150px,200px')

    
    
