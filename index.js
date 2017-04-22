/**
 * Created by henry on 4/17/17.
 */

var designatedSurvivor = {
    status : "Ready",
    rescueSurvivor: function () {
        document.write("Locating his transponder ... initiating launch ...");
    }
}

if (designatedSurvivor.status === "Ready") {
    designatedSurvivor.rescueSurvivor();
}

var utilities = {
    printAllMembers : function (targetObject) {
        for (i in targetObject) {
            document.write("<br/> " + targetObject[i]);
        }
    }
}

//utilities.printAllMembers(designatedSurvivor);

/*
var i_am_empty = { };

utilities.printAllMembers(i_am_empty);*/

//object literal in java

var planet = {
    id: 100,
    name: "Mars",
    faction: {
        factionId:2,
        name: "Mars Rock",
        notification: function () {
            document.write("<br/>Mars Rock alliance unite!<br/>");
        }
    },
    cities: [
        {locationId: 15, name: "Kenya"},
        {locationId: 34, name: "Rwanda"},
        {locationId: 67, name: "Nairobi"}
    ]
};

planet.faction.notification();
document.write(planet.cities[1].name);


var z = planet;
document.write(z.name);

for (member in planet) {
    document.write('<br/>' + member + " ==> " + planet[member]);
}

//dealing with object

function  car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new car("Mercedes","E-class",1993);
var myOtherCar = new car("Audi","E-class",2008);

alert(myCar.make);
alert(myOtherCar.make);