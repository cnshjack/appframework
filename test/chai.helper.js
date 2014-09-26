// turn on stack traces for errors thrown during chai assertions
chai.Assertion.includeStack = true;

// make API globally available
global.should = chai.should();
global.expect = chai.expect;
beforeEach(function() {
    $.afui.autoLaunch=false;
    $("#moo").remove();    
});

$.afui.autoLaunch=false;
