(function() {

    

    var data = [
        {
            name: '"Curly"',
            Make: 'Fender',
            Model: 'Deluxe Roadhouse Strat',
            Color: 'Olympic White',
            selector: 'p1'
        },
        {
            name: '"Thump"',
            Make: 'Fender',
            Model: 'Precision Bass Special',
            Color: 'Pearlescent Seafoam Green',
            selector: 'p2'
        },
        {
            name: '"Strum"',
            Make: 'Seagull',
            Model: 'S6',
            Color: 'Natural',
            selector: 'p3'
        }
    ];


    function Extension(data) {
        this.name = data.name;
        this.Make = data.Make;
        this.Model = data.Model;
        this.Color = data.Color;
        this.selector = data.selector;
    }

    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id) {
        return document.getElementById(id);
    };

    var writeExtensionInfo = function(extension) {
        var selector = extension.selector,
            nameEl = getEl(selector + '-name'),
            makeEl = getEl(selector + '-Make'),
            modelEL = getEl(selector + '-Model'),
            colorEl = getEl(selector + '-Color');

        nameEl.textContent = extension.name;
        makeEl.textContent = extension.Make;
        modelEL.textContent = extension.Model;
        colorEl.textContent = extension.Color;
    };

    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var strat = new Extension(data[0]);
    writeExtensionInfo(strat);

    var bass = new Extension(data[1]);
    writeExtensionInfo(bass);

    var acoustic = new Extension(data[2]);
    writeExtensionInfo(acoustic);


}());