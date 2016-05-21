     var clothesTypes = ["hat", "shirt", "pants"];

     var data = {

         winter: {
             hat: ["images/winter/hat.png"],
             pants: ["images/winter/pant.png"],
             shirt: ["images/winter/shirt.png"],
             quote: "Brrr... I'm really cold what are you going to do about it."
         },

         gym: {
             hat: ["images/gym/hat.png"],
             pants: ["images/gym/pant.png"],
             shirt: ["images/gym/shirt.png"],
             quote: "Time to get my sweat on"
         },

         halloween: {
             hat: ["images/halloween/hat.png"],
             pants: ["images/halloween/hat.png"],
             shirt: ["images/halloween/pant.png"],
             quote: "I forgot about halloween, make yourself usefull and help me ."
        },

         wedding: {
             hat: ["images/wedding/hat.png"],
             pants: ["images/wedding/pant.png"],
             shirt: ["images/wedding/shirt.png"],
             quote: "I forgot my vows..."
         },

         business: {
             hat: ["images/business/hat.png"],
             pants: ["images/business/pant.png"],
             shirt: ["images/business/shirt.png"],
             quote: "I want to look professional, not like a hipster."
         },

         casual: {
             hat: ["images/casual/hat.png"],
             pants: ["images/casual/pant.png"],
             shirt: ["images/casual/shirt.png"],
             quote: "It's impossible for you to mess up a casual style."
         }
     };
     var styles= Object.keys(data)