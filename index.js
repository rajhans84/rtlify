/* global __moduleName */
import rtlcss from 'rtlcss';
let fetch;
let translate;

fetch = function() {
    return '';
};

translate = function(load) {
    return System.import(__moduleName)
        .then(function(inject) {
            console.log("I am being called now....")
            return inject.default(load);
        })
        .then(function(css) {
                load.metadata.format = 'amd';
                const output = 'def' + 'ine(function() {\nreturn "' + rtlcss.process(css) + '";\n});';
                return (!!css) ? output : '';
        });
};

export {
    fetch,
    translate,
};