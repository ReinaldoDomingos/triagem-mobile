 var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        // alert('ok')
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

            alert('file system open: ' + fs.name);
            fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

                alert("fileEntry is file?" + fileEntry.isFile.toString());
        // fileEntry.name == 'someFile.txt'
        // fileEntry.fullPath == '/someFile.txt'
        writeFile(fileEntry, null);

    }, onErrorCreateFile);

        }, onErrorLoadFs);              
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

app.initialize();