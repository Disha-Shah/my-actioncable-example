console.log('HI')

//App.cable.subscriptions.create { channel: "WaitingRoomChannel", room: "Best Room" },
//    connected: function() {
//        console.log('connected')
//    },
//    disconnected: function() {
//        console.log('disconnected')
//    },
//
//    received: function(data) {
//       console.log(data)
//    },
//    renderMessage: function(data) {
//        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
//    }
//};


App.cable.subscriptions.create({
    channel: "WaitingRoomChannel",
    auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aW1lc3RhbXAiOiIyMDE3LTA2LTAxIDExOjQ4OjExICswMDAwIiwiZW1haWwiOiJkaXNoYS5zaGFoQHNvbHV0ZWxhYnMuY29tIn0.1B3hSnpCnMLqqLEZEwte71UPWcFgf4rAQMpDDyjRayI",
    appointment_id: "16"
}, {
    connected: function(data) {
        console.log('connected')
        console.log(data)
    },
    disconnected: function() {
        console.log('disconnected')
    },

    received: function(data) {
       console.log(data)
    },
    renderMessage: function(data) {
        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
    }

});

//App.cable.subscriptions.create({
//    channel: "WaitingRoomChannel",
//    auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aW1lc3RhbXAiOiIyMDE3LTA1LTE5IDA2OjQyOjEyICswMDAwIiwiZW1haWwiOiJkaXNoYS5zaGFoQHNvbHV0ZWxhYnMuY29tIn0.HHp-Eu225V8sggSFKCALYIGn7sttCaRZaBsr6AKz_rY",
//    appointment_id: "27"
//}, {
//    connected: function() {
//        console.log('connected')
//    },
//    disconnected: function() {
//        console.log('disconnected')
//    },
//
//    received: function(data) {
//       console.log(data)
//    },
//    renderMessage: function(data) {
//        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
//    }
//
//});