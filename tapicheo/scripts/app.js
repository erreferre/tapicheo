
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
            data: [{ id: 1, name: 'Azul' }, { id: 2, name: 'Verde' }, { id: 3, name: 'Amarela' }, { id: 3, name: 'Vermella' }, { id: 3, name: 'Laranxa' }]
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