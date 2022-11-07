const viewer = document.querySelector('.viewer');
const nbFrames = 14;
//le nombre de pixels à scroller entre chaque vue (plus le décalage est grand, plus l'animation est lente)
const decalage = 100;

// création du controller
const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        reverse: true
    }
})

// permet d'épingler la scène (pas de l'animer)
new ScrollMagic.Scene({
    //la scène se déclenche à l'élément #sticky et dure le temps de faire défiler toutes les frames
    triggerElement: '#sticky',
    duration: (nbFrames * decalage) + 'px'
})
//c'est l'élément sticky qui sera épinglé
.setPin('#sticky')
//.addIndicators()
//ajout de la scène au controller
.addTo(controller);

// boucle pour créer toutes les scenes (en changeant la classe du viewer) -> animation de la scène
for ( var i = 1; i <= nbFrames; i++) {
    new ScrollMagic.Scene({
        triggerElement: '#sticky',
        //création du décalage entre chaque scene
        offset: i * decalage
    })
    .setClassToggle(viewer, 'frame' + i)
    //crée autant d'indicateurs que de frames (avec le décalage) puisque bouclé
    //.addIndicators()
    .addTo(controller);
}