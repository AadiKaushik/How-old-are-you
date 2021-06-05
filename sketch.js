 var yearInput,year
 var monthInput,month
 var week
 var days
 var hours
 var minutes
 var seconds
 var milliseconds
 var header,startB
 var current = new Date()
 var gameState = 0

 function preload(){
   bg = loadImage('bg.jpg')
 }

function setup(){
createCanvas(windowWidth,windowHeight)
header=createElement('h1')
header.position(450,0)
header.html('How old are you')

footer = createElement('h3')
footer.position(850,130)
footer.html('Made by - Aadi & Agam')

startB=createButton('Start')
startB.position(700,300)

y1=createElement('h2')
y1.position(490,200)
y1.html(' Enter the year you were born in ')

y2 = createInput('')
y2.position(630,280)


nextB=createButton('Next')
nextB.position(670,400)
}


 function draw (){
background(bg)
y1.hide();
y2.hide();
nextB.hide();

if (gameState===0)
{
  startB.show();

  startB.mousePressed(()=>{
    gameState=1
startB.hide();
})}

if (gameState===1){
y1.show();
y2.show();

nextB.show();
nextB.mousePressed(()=>{
  
    gameState=2;
     yearInput = y2.value();

})


}
if(gameState===2){
  year = current.getFullYear()-yearInput

  month = year*12 

  week = month*4 

  days = week*7

  hours = days*24

  minutes = hours*60

  seconds = minutes*60

  milliseconds = seconds*60

  y1.hide()
  nextB.hide()
  y2.hide()


  y=createElement('h2')
  y.position(550,200)
  y.html('Years -' )  
  y=createElement('h2')
  y.position(750,200)
  y.html(year )  
  
  m=createElement('h2')
  m.position(550,250)
  m.html('Months -' )  
  m=createElement('h2')
  m.position(750,250)
  m.html(month )  

  w=createElement('h2')
  w.position(550,300)
  w.html('Weeks -') 
  w=createElement('h2')
  w.position(750,300)
  w.html(week)  
  
  d=createElement('h2')
  d.position(550,350)
  d.html('Days -')
  d=createElement('h2')
  d.position(750,350)
  d.html(days )
  
  
  h=createElement('h2')
  h.position(550,400)
  h.html('Hours -')
  h=createElement('h2')
  h.position(750,400)
  h.html(hours)
  
  min=createElement('h2')
  min.position(550,450)
min.html('Minutes -' )
  min=createElement('h2')
  min.position(750,450)
min.html(minutes )
  
  
s=createElement('h2')
 s.position(550,500)
  s.html('Seconds -')
s=createElement('h2')
 s.position(750,500)
  s.html(seconds )
  
  ms=createElement('h2')
  ms.position(550,550)
  ms.html('MiliSeconds -' )          
  ms=createElement('h2')
  ms.position(750,550)
  ms.html(milliseconds )          

}

}