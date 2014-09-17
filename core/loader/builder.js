define([
], function () {

    function load(name, localRequire, done, config) {
        if(name[0] !== "$"){
            localRequire([name], function () {
                done(name);
            });
        }else{
            done(name);
        }
    };

    return {
        load: load
    };
});