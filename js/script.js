console.log('app is alive');

function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    $('#channel-name').html(channelName);
    switchLocation('upgrading.never.helps');
    emptyChannelStar();
}

function switchLocation(locationName) {
    console.log('switched location to ' + locationName);
    $('#channel-location').html(locationName);
    $('#location-link').attr("href", "http://w3w.co/" + locationName);
}

function emptyChannelStar(){
    console.log('emptied Star');
    $('#channel-star').attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
}

function fillChannelStar(){
    console.log('filled Star');
    $('#channel-star').attr("src", "http://ip.lfe.mw.tum.de/sections/star.png")
}

function selectTab(buttonName){
    $('#tab-bar button').removeClass();
    $('#' + buttonName).addClass('selected');
    console.log('Changing to ' + buttonName);
}

function toggleEmojiBox(){
    $('#emojis').toggle();
}