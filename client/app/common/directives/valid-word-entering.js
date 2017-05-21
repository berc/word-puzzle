let validWordEntering = function () {
    let validWord;
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.on('keypress', function(event) {
                let validWord = scope.$eval(attrs.validWordEntering);
                let char = String.fromCharCode(event.which);
                let testedSubWord = (elem[0].value ? elem[0].value : '') + char;
                if (validWord.indexOf(testedSubWord) !== 0) {
                    event.preventDefault();
                }
            })
        }
    }
};

export default validWordEntering;
