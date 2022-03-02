Bangle.on('aiGesture',(gesture,raw)=>print(gesture,raw));
var counter = 0;
Bangle.on('aiGesture',(gesture)=>{
//  E.showMessage(gesture);

if(gesture == 'left' ){
 if(counter < 8){
    counter = counter + 1;
    E.showMessage(gesture);
    g.setColor(0xFFFF);
    g.setFont("Vector",40).setFontAlign(0,0);
    g.drawString(Math.floor(counter), g.getWidth()/2, 200);
  }
  
}

if(gesture == 'right'){

  if(counter > 0 ){
    counter = counter -1;
    E.showMessage(gesture);
    g.setColor(0xFFFF);
    g.setFont("Vector",40).setFontAlign(0,0);
    g.drawString(Math.floor(counter), g.getWidth()/2, 200);
  }
  


}
   
  setTimeout(()=>g.clear(), 1000);
});
