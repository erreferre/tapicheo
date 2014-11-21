
(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
      models: {
        home: {
          title: 'Inicio'
        },
        settings: {
          title: 'Bares'
        },
        contacts: {
          title: 'Rutas',
          ds: new kendo.data.DataSource({
              data: [{ id: 1, name: 'Azul', textareaValue: 'Valle Aguiada, O Descanso, DP Cristal, Tapería O Antoxo, Parisien, Albergue Credencial, Hotel Alfonso IX' }, { id: 2, name: 'Verde', textareaValue: 'Rosyl, DOrixen, La Polar, O Que Faltaba, Don Pepe, Central, Montecarlo' }, { id: 3, name: 'Amarela', textareaValue: 'Siete2, 8mm, O Faro, DPont, Vilas, Flavia' }, { id: 3, name: 'Vermella', textareaValue: 'Mesón Terras de Sarria, Atlántico, Travesía dos Soños, Anduriñas, Pulpería Pontenova, O Tapas, Matías Locanda' }, { id: 3, name: 'Laranxa', textareaValue: 'O Chanto, Meigallo, Mesón Roberto, Santiago, Next, Taberna da Pili, Salento' }]
          }),
//            ds: kendo.data.HierarchicalDataSource({
//                data: [{id: 1, name: 'Azul', items: [{bar: '8mm'},{bar: 'paris'}]},{id:2,name:'Verde',items:[{bar:'patulas',{bar:'modia'}}]}]  
//            }),
            alert: function(e) {
            alert(e.data.name);
          }
        }
      }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {  
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      app = new kendo.mobile.Application(document.body, {
        
        // you can change the default transition (slide, zoom or fade)
        transition: 'slide',
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/home.html'
      });

    }, false);


}());