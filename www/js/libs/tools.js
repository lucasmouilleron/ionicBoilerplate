////////////////////////////////////////////////////////////////////
var c = console.log.bind(console);

var tools = {

        ////////////////////////////////////////////////////////////////////////////////
        isEmpty: function(obj) {
            for(var prop in obj) {
                if(obj.hasOwnProperty(prop))
                    return false;
            }

            return true;
        }
    };