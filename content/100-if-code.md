---
title: 100 If'ов
---
Код написан [[intbyte]] в 30.06.2019

© Оригинальное форматирование сохранено.

```js
var water = 200;
var water1 = 100;
var wat = 0;
var wat2 = 1;

ModPE.setItem(500, 'water', 0, 'Бутылка с водой', 64);

function newLevel(){

ModPE.readData(1000);
ModPE.readData(2000);
ModPE.readData(3000);
ModPE.readData(4000);

}

 function modTick(){
 
 //во избежания случайностий 
 if(water1 == 101){
     water1 = 100;
 }
 
 if(water1 == 102){
     water1 = 100;
 }
 
 if(water1 == 103){
     water1 = 100;
 }
 
 if(water1 == 104){
     water1 = 100;
 }
 
 if(water1 == 105){
     water1 = 100;
 }
 
 if(water1 == 106){
     water1 = 100;
 }
 
 if(water1 == 107){
     water1 = 100;
 }
 
 if(water1 == 108){
     water1 = 100;
 }
 
 if(water1 == 109){
     water1 = 100;
 }
 
 if(water1 == 110){
     water1 = 100;
 }
 
 if(water1 == 111){
     water1 = 100;
 }
 
 if(water1 == 112){
     water1 = 100;
 }
 
 if(water1 == 113){
     water1 = 100;
 }
 
 if(water1 == 114){
     water1 = 100;
 }
 
 if(water1 == 115){
     water1 = 100;
 }
 
 if(water1 == 116){
     water1 = 100;
 }
 
 if(water1 == 117){
     water1 = 100;
 }
 
 if(water1 == 118){
     water1 = 100;
 }
 
 if(water1 == 119){
     water1 = 100;
 }
 
 if(water1 == 120){
     water1 = 100;
 }
 
 if(water1 == 121){
     water1 = 100;
 }
 
 if(water1 == 122){
     water1 = 100;
 }
 
 if(water1 == 123){
     water1 = 100;
 }
 
 if(water1 == 124){
     water1 = 100;
 }
 
 if(water1 == 125){
     water1 = 100;
 }
 
 if(water1 == 126){
     water1 = 100;
 }
 
 if(water1 == 127){
     water1 = 100;
 }
 
 if(water1 == 128){
     water1 = 100;
 }
 
 if(water1 == 129){
     water1 = 100;
 }
 
 if(water1 == 130){
     water1 = 100;
 }
 
 if(water1 == 131){
     water1 = 100;
 }
 
 if(water1 == 132){
     water1 = 100;
 }

 //таймер
 if(water == 0){
   water = 200;
   water1-=1;
   }
   water-=wat2;
   
   if(water == -1){
   water = 200;
   water1-=1;
   }
   
   if(water == -2){
   water = 200;
   water1-=1;
   }
   
   if(water == -3){
   water = 200;
   water1-=1;
   }
   
   if(water == -4){
   water = 200;
   water1-=1;
   }
   
   if(water == -5){
   water = 200;
   water1-=1;
   }
     
   if(water1 == -1){
       water1 = 0;
   }
   
   if(water1 == 0){           
      Entity.addEffect(getPlayerEnt(), 20, 4*20, 1, true);
   }
   
   if(Entity.getHealth(getPlayerEnt()) == 0){
       water1 = 100;
  }
  
     if(getTile(getPlayerX(),getPlayerY()-2,getPlayerZ()) == 12){
         wat = 100;
    }
    if(wat == 100){
        wat2 = 2;
    }
    if(wat == 0){
        wat2 = 1;
    }
   
    wat-=1
 
ModPE.showTipMessage(ChatColor.BLUE+"§l"+water1+" Boga");
}
   
   function chatHook(text){
       if(text =="/water"){
       clientMessage(wat2 +" "+ water+ " " +water1);
     }
     if(text == "/wat"){
          
          water1 =1;
       }
   }
 
 
   function useItem(x, y, z, itemId, blockId, side){
       
       if(itemId == 500){
           water1+=30;
       if(Entity.getCarriedItem(getPlayerEnt()) == 500){
           Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount() - 1 ,Player.getCarriedItemData());
       addItemInventory(374, 1, 0);
                
       }}
       
       if(itemId == 374&&blockId==8){
       if(Entity.getCarriedItem(getPlayerEnt()) == 374){
           Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount() - 1,Player.getCarriedItemData());
       addItemInventory(500, 1, 0);
   }}
   
   if(itemId == 374&&blockId==9){
       if(Entity.getCarriedItem(getPlayerEnt()) == 374){
           Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount() - 1,Player.getCarriedItemData());
       addItemInventory(500, 1, 0);
   }
       }
       
       }
       
       function leaveGame(){
           
ModPE.saveData(1000, water);
ModPE.saveData(2000, water1);
ModPE.saveData(3000, wat);
ModPE.saveData(4000, wat2);
}
```
