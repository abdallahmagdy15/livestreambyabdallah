var BEIN_CH_List=[
"http://players.adnfast.com/players/CDN2.0/yall1/player16.1.htm",
"http://players.adnfast.com/players/CDN2.0/yall1/player16.0.htm",
"http://players.adnfast.com/players/CDN2.0/yall1/player16.0.htm",
"http://players.adnfast.com/players/CDN2.0/yall1/player16.0.htm"
];
var curr_channel=1;
function changePlayerSettings(id){
    $("#playerIframe").attr("src",BEIN_CH_List[id]);
    $(".playerTitle label").html("BEIN SPORTS HD"+ (id+1) );
}
function switchChannels(){
    switch(curr_channel){
        case 1:changePlayerSettings(0);break;
        case 2:changePlayerSettings(1);break;
        case 3:changePlayerSettings(2);break;
        case 4:changePlayerSettings(3);break;
    }
}
switchChannels();
