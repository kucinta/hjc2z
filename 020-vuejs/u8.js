// Listing people component
var PeopleListing = Vue.extend({
  template: '#people-listing-template',
  data: function() {
      return {
        people: this.$parent.people
    }
  }
});

// Person detail
var PersonDetail = Vue.extend({
  template: '#people-detail-template',
  data: function() {
    var person;
    for (var i = 0; i < this.$parent.people.length; i++) {
      if(this.$parent.people[i].guid == this.$route.params.id) {
        person = this.$parent.people[i];
        break;
      }
    }

    return {
      person: person
    }
  }
});

// Create the router
var router = new VueRouter({
	mode: 'hash',
	base: window.location.href,
	routes: [
      {path: '/', component: PeopleListing},
      {name: 'person', path: '/:id', component: PersonDetail }
    ]
});


var app = new Vue({
    router,
	data: {
		people: [{"index":0,"guid":"ebee55c4-d685-4d77-a2bb-650283fb8753","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":"Hope Dennis","company":"ZORK","email":"hopedennis@zork.com","address":"127 Wortman Avenue, Corriganville, Marshall Islands, 5960","about":"Labore velit deserunt sunt labore nisi reprehenderit voluptate consequat laboris id minim. Elit tempor occaecat sunt enim irure aliqua eiusmod minim. Ad culpa laborum laborum anim proident duis ullamco. Sit ipsum id esse proident sunt et dolor excepteur Lorem irure anim. Lorem nisi eiusmod pariatur qui duis sint minim dolore.\r\n"},{"index":1,"guid":"c54ac0fd-5288-45e3-afa4-fa30c84a6a68","picture":"http://placehold.it/32x32","age":24,"eyeColor":"blue","name":"Coleen Kidd","company":"AFFLUEX","email":"coleenkidd@affluex.com","address":"138 Kane Place, Lowgap, Northern Mariana Islands, 5687","about":"Nisi quis dolor commodo qui consequat nostrud adipisicing minim aliqua id incididunt aliquip voluptate mollit. Ullamco dolore occaecat cupidatat velit quis. Magna velit anim et irure laboris excepteur ullamco in esse qui culpa ipsum. Veniam fugiat labore duis fugiat cillum cupidatat labore tempor eu cupidatat. Mollit veniam Lorem commodo magna minim labore veniam cillum irure. Deserunt amet deserunt et culpa elit magna ullamco. Occaecat ex esse nostrud ullamco aliquip sint aliqua culpa est ipsum aliqua reprehenderit esse incididunt.\r\n"},{"index":2,"guid":"d0a94124-efb7-4461-8d8d-f20466e7f9dd","picture":"http://placehold.it/32x32","age":26,"eyeColor":"brown","name":"Luella Camacho","company":"TECHMANIA","email":"luellacamacho@techmania.com","address":"615 Calder Place, Lupton, North Dakota, 3244","about":"Anim sint sunt amet labore incididunt cillum magna magna in esse ipsum. In cillum duis id magna minim. Mollit nisi Lorem incididunt enim aute Lorem. Pariatur laborum fugiat proident nulla aliqua laboris exercitation ex aliqua est elit. Voluptate eu incididunt sunt culpa mollit consectetur est voluptate nulla cupidatat nostrud do. Labore nisi aute cillum velit officia id. Incididunt labore in dolor laborum dolore sunt cupidatat.\r\n"},{"index":3,"guid":"b1a82dc0-74ce-4a34-9bc2-0eb0434f8170","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":"Avery Mckenzie","company":"QUOTEZART","email":"averymckenzie@quotezart.com","address":"675 Withers Street, Herlong, New Jersey, 3075","about":"Eu exercitation id incididunt irure ullamco veniam. Cillum eu ullamco dolor magna fugiat amet nulla laboris eiusmod. Dolor nostrud aliquip culpa tempor do quis enim ea esse amet. Tempor sit anim Lorem adipisicing. Voluptate quis labore reprehenderit sint est anim qui sit tempor dolore ullamco.\r\n"},{"index":4,"guid":"20889cdb-ba5d-4eae-a2e3-78347681d9fa","picture":"http://placehold.it/32x32","age":27,"eyeColor":"blue","name":"Clements Mckee","company":"GEOFORMA","email":"clementsmckee@geoforma.com","address":"778 Kensington Walk, Takilma, Massachusetts, 7235","about":"Commodo aliqua veniam Lorem anim. Exercitation in magna excepteur tempor dolore labore sit anim. In anim eu cillum quis occaecat anim enim est nostrud labore sint Lorem do officia. Voluptate adipisicing enim tempor sint anim culpa commodo commodo ullamco sunt ea irure. Ut quis enim occaecat ipsum eu esse qui eiusmod et Lorem sunt officia ad commodo.\r\n"},{"index":5,"guid":"1aa7bab5-026b-426d-ac11-fc34def982d7","picture":"http://placehold.it/32x32","age":28,"eyeColor":"brown","name":"Mcdaniel Justice","company":"QUILCH","email":"mcdanieljustice@quilch.com","address":"839 Billings Place, Whitewater, Florida, 3350","about":"Pariatur et eu dolor labore mollit tempor sunt laborum eiusmod deserunt enim ea eu excepteur. Aliquip id eiusmod dolore qui sit fugiat ut commodo. Ut est in aliquip non. Ut in quis in sunt. Cupidatat amet cupidatat mollit reprehenderit fugiat in duis. Dolore exercitation esse veniam duis velit excepteur mollit.\r\n"},{"index":6,"guid":"655efe68-f26c-4f36-a2bd-cbf4d7929b77","picture":"http://placehold.it/32x32","age":36,"eyeColor":"green","name":"Stone Watkins","company":"ROBOID","email":"stonewatkins@roboid.com","address":"927 Canda Avenue, Beyerville, Maine, 706","about":"Minim officia nisi in cupidatat eu. Veniam laborum aute voluptate officia laboris id reprehenderit. Elit sint do reprehenderit exercitation nostrud nisi.\r\n"}]
	}
}).$mount('#app');