/*var appList = [
    { label: "WhatsApp", packageName: "com.whatsapp", className: "com.whatsapp.HomeActivity", icon: "Img/frame.png" },
    { label: "Facebook", packageName: "com.facebook.katana", className: "com.facebook.katana.LoginActivity", icon: "Img/Base64.png" }
];

function showPackageName(packageName) {
    alert("Package Name: " + packageName);
    // Anda dapat mengganti alert box dengan cara lain untuk menampilkan nama package name
}

function OnStart() {
    var lay = app.CreateLayout("linear", "VCenter,FillXY");

    for (var i = 0; i < appList.length; i++) {
        var item = appList[i];

        var img = app.CreateImage(item.icon, 0.5, -1); // Atur ukuran icon sesuai keinginan

        img.setOnTouch = function(event) {
            if (event.action == "down") {
                showPackageName(this.packageName); // Gunakan 'this.packageName' untuk mengakses nama package name
            }
        };

        lay.AddChild(img);
    }

    app.AddLayout(lay);
}*/
/*
 This demonstrates a very basic app launcher (home screen).
 You can set this app as your home screen by adding the
 'homeScreen=true' option to your build.json file.
*/



var appList = [
    { label: "WhatsApp", packageName: "com.whatsapp", className: "com.whatsapp.HomeActivity", icon: "Img/frame.png" },
    { label: "Facebook", packageName: "com.facebook.katana", className: "com.facebook.katana.LoginActivity", icon: "Img/frame.png" },
    { label: "Keep", packageName: "com.google.android.keep", className: "com.google.android.keep.activities.BrowseActivity", icon: "Img/frame.png" },
    { label: "Signal", packageName: "app.signal.id", className: "com.signal.app.presentation.entrance.view.EntranceActivity", icon: "Img/frame.png" },
    { label: "myBCA", packageName: "com.bca.mybca.omni.android", className: "com.bca.mybca.omni.android.presentation.splashscreenrevamp.SplashScreenActivity", icon: "Img/frame.png" },
    { label: "YT Studio", packageName: "com.google.android.apps.youtube.creator", className: "com.google.android.apps.youtube.creator.main.MainActivity", icon: "Img/frame.png" },
    { label: "Serial USB Terminal", packageName: "de.kai_morich.serial_usb_terminal", className: "de.kai_morich.serial_usb_terminal.MainActivity", icon: "Img/frame.png" },
    { label: "Taxsee Driver", packageName: "com.taxsee.driver", className: "com.taxsee.driver.feature.login.phone.login.PhoneLoginActivity", icon: "Img/frame.png" },
    { label: "IPOT", packageName: "com.indopremier.ipot", className: "com.indopremier.ipot.MainActivity", icon: "Img/frame.png" },
    { label: "Grab Driver", packageName: "com.grabtaxi.driver2", className: "com.grab.driver.app.ui.v5.activities.landing.splash.SplashScreen", icon: "Img/frame.png" },
    { label: "Kompas", packageName: "com.transsion.compass", className: "com.transsion.compass.CompassActivity", icon: "Img/frame.png" },
    { label: "Traders Family", packageName: "com.tradersfamily.app", className: "io.flutter.embedding.android.FlutterActivity", icon: "Img/frame.png" },
    { label: "Traveloka", packageName: "com.traveloka.android", className: "com.traveloka.android.appentry.splash.SplashActivity", icon: "Img/frame.png" },
    { label: "Digital Korlantas", packageName: "id.qoin.korlantas.user", className: "id.qoin.korlantas.user.MainActivity", icon: "Img/frame.png" },
    { label: "TrebEdit", packageName: "com.teejay.trebedit", className: "com.teejay.trebedit.StartingActivity", icon: "Img/frame.png" },
    { label: "AudioLab", packageName: "com.hitrolab.audioeditor", className: "com.hitrolab.audioeditor.MainActivity", icon: "Img/frame.png" },
    { label: "MetaMask", packageName: "io.metamask", className: "io.metamask.MainActivity", icon: "Img/frame.png" },
    { label: "ZArchiver", packageName: "ru.zdevs.zarchiver", className: "ru.zdevs.zarchiver.ZArchiver", icon: "Img/frame.png" },
    { label: "Tokopedia", packageName: "com.tokopedia.tkpd", className: "com.tokopedia.tkpd.ConsumerSplashScreen", icon: "Img/frame.png" },
    { label: "X", packageName: "com.twitter.android", className: "com.twitter.android.StartActivity", icon: "Img/frame.png" },
    { label: "DANA", packageName: "id.dana", className: "id.dana.onboarding.splash.DanaSplashActivity", icon: "Img/frame.png" },
    { label: "Mobile JKN", packageName: "app.bpjs.mobile", className: "io.flutter.embedding.android.FlutterFragmentActivity", icon: "Img/frame.png" },
    { label: "Trust Wallet", packageName: "com.wallet.crypto.trustapp", className: "com.wallet.crypto.trustapp.ui.app.AppActivity", icon: "Img/frame.png" },
    { label: "Editorvideo", packageName: "com.frontrow.vlog", className: "com.frontrow.vlog.ui.splash.SplashActivity", icon: "Img/frame.png" },
    { label: "Lite", packageName: "com.facebook.lite", className: "com.facebook.lite.MainActivity", icon: "Img/frame.png" },
    { label: "Kencana", packageName: "com.kecap", className: "com.kecap.MainActivity", icon: "Img/frame.png" },
    { label: "Canva", packageName: "com.canva.editor", className: "com.canva.app.editor.splash.SplashActivity", icon: "Img/frame.png" },
    { label: "Discord", packageName: "com.discord", className: "com.discord.main.MainDefault", icon: "Img/frame.png" },
    { label: "Package Names", packageName: "com.csdroid.pkg", className: "com.csdroid.pkg.MainActivity", icon: "Img/frame.png" },
    { label: "MetaTrader 5", packageName: "net.metaquotes.metatrader5", className: "net.metaquotes.metatrader5.ui.MainActivity", icon: "Img/frame.png" },
    { label: "Zoom", packageName: "us.zoom.videomeetings", className: "com.zipow.videobox.LauncherActivity", icon: "Img/frame.png" },
    { label: "MetaTrader 4", packageName: "net.metaquotes.metatrader4", className: "net.metaquotes.metatrader4.ui.MainActivity", icon: "Img/frame.png" },
    { label: "Status, Sticker Saver", packageName: "com.lazygeniouz.saveit", className: "com.lazygeniouz.saveit.ui.activities.main.SplashCompatActivity", icon: "Img/frame.png" },
    { label: "Gmail", packageName: "com.google.android.gm.lite", className: "com.google.android.gm.ConversationListActivityGmail", icon: "Img/frame.png" },
    { label: "Macrorify", packageName: "com.kok_emm.mobile", className: "com.kok_emm.mobile.activity.ActivityMain", icon: "Img/frame.png" },
    { label: "Pengunduh Video", packageName: "video.downloader.videodownloader", className: "video.downloader.videodownloader.activity.MainActivity", icon: "Img/frame.png" },
    { label: "Pydroid 3", packageName: "ru.iiec.pydroid3", className: "ru.iiec.pydroid.MainActivity", icon: "Img/frame.png" },
    { label: "TikTok X Tokopedia Seller Center", packageName: "com.tiktokshop.seller", className: "com.tiktokshop.seller.AppLauncher.ID", icon: "Img/frame.png" },
    { label: "Pinterest", packageName: "com.pinterest", className: "com.pinterest.activity.PinterestActivity", icon: "Img/frame.png" },
    { label: "QPython", packageName: "org.qpython.qpy", className: "org.qpython.qpy.main.activity.SplashActivity", icon: "Img/frame.png" },
    { label: "Seller Center", packageName: "com.sc.lazada", className: "com.sc.lazada.app.activity.ad.SplashActivity", icon: "Img/frame.png" },
{ label: "Klik otomatis", packageName: "com.ksxkq.autoclick", className: "com.ksxkq.autoclick.MainActivity", icon: "Img/frame.png" },
{ label: "Telegram", packageName: "org.telegram.messenger", className: "org.telegram.messenger.LoginActivity", icon: "Img/frame.png" },
{ label: "Pydroid repository plugin", packageName: "ru.iiec.pydroid3.plugins", className: "ru.iiec.pydroid3.plugins.activity.SplashActivity", icon: "Img/frame.png" },
{ label: "Exness Go", packageName: "com.exness.exnessgo", className: "com.exness.exnessgo.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Halo BCA", packageName: "com.bca.halo.android", className: "com.bca.halo.android.presentation.splashscreen.SplashScreenActivity", icon: "Img/frame.png" },
{ label: "Facebook", packageName: "com.facebook.katana", className: "com.facebook.katana.LoginActivity", icon: "Img/frame.png" },
{ label: "CodeSnack IDE", packageName: "com.codesnack.ide", className: "com.codesnack.ide.ui.splash.SplashScreenActivity", icon: "Img/frame.png" },
{ label: "Access by KAI", packageName: "com.keretaapikita.access", className: "com.keretaapikita.access.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "FBS", packageName: "com.facebook.business", className: "com.facebook.business.activity.BusinessManagerActivity", icon: "Img/frame.png" },
{ label: "Pocket PHP", packageName: "com.pocketphp.editor", className: "com.pocketphp.editor.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Thunder VPN", packageName: "com.thunder.vpn.thundervpn", className: "com.thunder.vpn.thundervpn.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "BRImo", packageName: "com.bri.mobile.brimo", className: "com.bri.mobile.brimo.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Fake GPS", packageName: "com.fakegps.fakelocation", className: "com.fakegps.fakelocation.MainActivity", icon: "Img/frame.png" },
{ label: "Opera", packageName: "com.opera.mini.android", className: "com.opera.mini.android.browser.MainActivity", icon: "Img/frame.png" },
{ label: "App Inspector", packageName: "com.androhub.appinspector", className: "com.androhub.appinspector.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "SIAPkerja", packageName: "id.go.kemnaker.siapkerja", className: "id.go.kemnaker.siapkerja.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Fantech Smart Home", packageName: "com.fantech.smarthome", className: "com.fantech.smarthome.ui.splash.SplashActivity", icon: "Img/frame.png" },
/*
{ label: "AIDE", packageName: "com.aide.ui", className: "com.aide.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "OVO", packageName: "com.ovo.live", className: "com.ovo.live.app.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "TikTok", packageName: "com.bytedance.android.app", className: "com.bytedance.android.app.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Volume Lock", packageName: "com.thebubblenetwork.volumelock", className: "com.thebubblenetwork.volumelock.MainActivity", icon: "Img/frame.png" },
{ label: "ZFlasher AVR", packageName: "com.zafarakh.zflasheravr", className: "com.zafarakh.zflasheravr.MainActivity", icon: "Img/frame.png" },
{ label: "Octa", packageName: "com.octaapp.octa", className: "com.octaapp.octa.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Tetanggaku - Motor", packageName: "com.tetanggaku.motor", className: "com.tetanggaku.motor.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Pintu", packageName: "com.pintu.android", className: "com.pintu.android.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Termius", packageName: "com.termux.api", className: "com.termux.api.TermuxMainActivity", icon: "Img/frame.png" },
{ label: "Bluetooth Electronics", packageName: "com.bluetooth.le.explorer", className: "com.bluetooth.le.explorer.MainActivity", icon: "Img/frame.png" },
{ label: "Instagram", packageName: "com.instagram.android", className: "com.instagram.android.activity.LoginActivity", icon: "Img/frame.png" },
{ label: "LinkedIn", packageName: "com.linkedin.android", className: "com.linkedin.android.splash.LinkedInSplashActivity", icon: "Img/frame.png" },
{ label: "CoinMarketCap", packageName: "io.coinmarketcap", className: "io.coinmarketcap.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "DroidScript", packageName: "com.droidscript.app", className: "com.droidscript.app.Main", icon: "Img/frame.png" },
{ label: "Pure Tuber", packageName: "com.mobx.pure Tuber", className: "com.mobx.pure Tuber.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Fastwork", packageName: "com.fastwork.app", className: "com.fastwork.app.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "NordVPN", packageName: "com.nordvpn.vpn", className: "com.nordvpn.vpn.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "gaga-pro", packageName: "com.gaga.android", className: "com.gaga.android.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Bing", packageName: "com.microsoft.bing", className: "com.microsoft.bing.LoginActivity", icon: "Img/frame.png" },
{ label: "ArduinoDroid", packageName: "com.arduino.ide.arduino", className: "com.arduino.ide.arduino.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "POLRI", packageName: "id.polri.siap", className: "id.polri.siap.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Bukalapak", packageName: "com.bukalapak.android", className: "com.bukalapak.android.app.SplashActivity", icon: "Img/frame.png" },
{ label: "Flip", packageName: "com.flip.id", className: "com.flip.id.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "RTI Business", packageName: "com.rti.business.app", className: "com.rti.business.app.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "GitHub", packageName: "com.github.android", className: "com.github.android.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Parallel Space", packageName: "com.lwarteam.parallel", className: "com.lwarteam.parallel.app.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Binance", packageName: "com.binance.android", className: "com.binance.android.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Tokopedia Seller", packageName: "com.tokopedia.seller.merchant", className: "com.tokopedia.seller.merchant.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "GoPartner", packageName: "com.gojek.gopartner", className: "com.gojek.gopartner.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Gojek", packageName: "com.gojek.android", className: "com.gojek.android.app.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Lazada", packageName: "com.aliexpress.mobile.aliexpress", className: "com.aliexpress.mobile.aliexpress.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Shortcut Maker", packageName: "com.shortcut.maker", className: "com.shortcut.maker.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "SMS Activate", packageName: "com.smsactivate.ru", className: "com.smsactivate.ru.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "WhatsApp Business", packageName: "com.whatsapp.waba", className: "com.whatsapp.waba.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "myIM3", packageName: "com.mci.myim3", className: "com.mci.myim3.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "MacroDroid", packageName: "com.nedroid.macrodroid", className: "com.nedroid.macrodroid.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Investing", packageName: "com.investing.com", className: "com.investing.com.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Livin' by Mandiri", packageName: "com.mandiri.livin", className: "com.mandiri.livin.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "blu", packageName: "com.bkntkb.blu", className: "com.bkntkb.blu.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "BSI Mobile", packageName: "com.bsdm.mobileapp", className: "com.bsdm.mobileapp.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "JMO", packageName: "com.jcb.jmo", className: "com.jcb.jmo.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "BCA mobile", packageName: "com.bca.mobile", className: "com.bca.mobile.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Grab", packageName: "com.grabtaxi.passenger", className: "com.grab.passenger.app.ui.v5.activities.landing.splash.SplashScreen", icon: "Img/frame.png" },
{ label: "WhatsApp", packageName: "com.whatsapp", className: "com.whatsapp.HomeActivity", icon: "Img/frame.png" },
{ label: "Project IDX", packageName: "com.idx.android", className: "com.idx.android.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "INDODAX", packageName: "com.indodax.app", className: "com.indodax.app.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Shopee", packageName: "com.shopee.mobile", className: "com.shopee.mobile.ui.main.SplashActivity", icon: "Img/frame.png" },
{ label: "WPS Office", packageName: "kingsoft.wps.android.office", className: "kingsoft.wps.android.office.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Picsart", packageName: "com.picsart.studio", className: "com.picsart.studio.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Spreadsheet", packageName: "com.google.android.apps.docs.editors.sheets", className: "com.google.android.apps.docs.editors.sheets.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Editor Kode", packageName: "com.coding.editor", className: "com.coding.editor.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "#Countdown Widget", packageName: "com.kottler.countdownwidget", className: "com.kottler.countdownwidget.MainActivity", icon: "Img/frame.png" },
{ label: "ColorNote", packageName: "com.flycrew.colornote", className: "com.flycrew.colornote.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "Kaca pembesar & Mikroskop", packageName: "com.magnifier.microscope", className: "com.magnifier.microscope.ui.splash.SplashActivity", icon: "Img/frame.png" },
{ label: "SleepTimer", packageName: "com.coderzheaven.sleeptimer", className: "com.coderzheaven.sleeptimer.ui.splash.SplashActivity", icon: "Img/frame.png" },
*/
];



   



/*
//Called when application is started.
function OnStart()
{ 
    //Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" )
    
    //Create the main layout with background image.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    
    lay.SetBackground( "/res/drawable/pattern_carbon", "repeat" )

    //Create a full screen scroller.
    scroller = app.CreateScroller( 1.0, 1.0 )
    lay.AddChild( scroller )
        
    //Display selected activity icons.
    DisplayIcons( scroller )
    
    //Add layout to app.    
    app.AddLayout( lay )
}

//Draw the icons
function DisplayIcons( lay )
{
    //Create a layout to contain icons.
    layIcons = app.CreateLayout( "Linear" )
    layIcons.SetSize( 1,-1 )
    lay.AddChild( layIcons )
   
    //Set icons per row count.
    var iconsPerRow = 4;
    var iconW = 0.6/(iconsPerRow)
   
var appList = [
    { label: "WhatsApp", packageName: "com.whatsapp", className: "com.whatsapp.HomeActivity", icon: "Img/frame.png" },
    { label: "Facebook", packageName: "com.facebook.katana", className: "com.facebook.katana.LoginActivity", icon: "Img/Base64.png" }
];

    //Create an icon for each selected app.
    for( var i=0; i<appList.length; i++ )
    {
        //Get app info.
        var a = appList[i];
        
        //Create horizontal layout for rows.
        if( i%iconsPerRow==0 ) {
            var layIconsHoriz = app.CreateLayout( "Linear", "Horizontal" )
            layIcons.AddChild( layIconsHoriz )
        }
        //Create layout to wrap icon and text.
        var layIcon = app.CreateLayout( "Linear", "Vertical" )
        layIcon.SetMargins( 0.038/iconsPerRow, 0.015, 0.038/iconsPerRow, 0 )
        layIconsHoriz.AddChild( layIcon )
        
        //Load icon image from PNG file and set touch callbacks.
        var imgIcon = app.CreateImage( a.icon, iconW, -1 )
        imgIcon.SetOnTouchDown( img_OnTouchDown )
        imgIcon.SetOnTouchUp( img_OnTouchUp )
        imgIcon.SetOnLongTouch( img_OnLongTouch )
        layIcon.AddChild( imgIcon )
        
        //Store app info and icon layout in image object for convenience.
        imgIcon.label = a.label;
        imgIcon.packageName = a.packageName;
        imgIcon.className = a.className;
        imgIcon.layIcon = layIcon;
        
        //Create text label.
        var txtIcon = app.CreateText( a.label, iconW*1.5, -1, "Multiline" )
        txtIcon.SetTextSize( 14 )
        txtIcon.SetTextColor( "#ffeeeeee" )
        layIcon.AddChild( txtIcon )
    }
}

//Handle icon touch down.
function img_OnTouchDown()
{
    //Shrink and fade icon.
    this.Scale( 0.95, 0.95 )
    this.SetAlpha( 0.7 )
}

//Handle icon touch up.
function img_OnTouchUp()
{
    //Restore icon appearance.
    this.Scale( 1, 1 )
    this.SetAlpha( 1 )
    
    //Launch activity.
    var action = "android.intent.action.MAIN";
    app.SendIntent( this.packageName, this.className, action ) 
}

//Handle icon long touch.
function img_OnLongTouch()
{
    //Restore icon appearance.
    this.Scale( 1, 1 )
    this.SetAlpha( 1 )
    
    //Store current icon.
    curIcon = this;
    
    //Show options dialog.
    var list = "Remove,Uninstall,Info";
    lstOps = app.CreateListDialog( "", list, "AutoCancel" )
    lstOps.SetOnTouch( lstOps_Select ) 
    lstOps.Show()
}

//Called when icon long click option chosen.
function lstOps_Select( item )
{
    if( item=="Remove" )
    {
        curIcon.layIcon.SetVisibility( "Gone" )
    }
    else if( item=="Info" )
    {
        var msg = "Name: " + curIcon.label + 
            "\n\nPackage Name: " + curIcon.packageName + 
            "\n\nClass Name: " + curIcon.className;
        app.Alert( msg )
    }
}*/




//Called when application is started.
function OnStart()
{ 
    //Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" )
    
    //Create the main layout with background image.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    
    lay.SetBackground( "/res/drawable/pattern_carbon", "repeat" )

    //Create a full screen scroller.
    scroller = app.CreateScroller( 1.0, 1.0 )
    lay.AddChild( scroller )
        
    //Display selected activity icons.
    DisplayIcons( scroller )
    
    //Add layout to app.    
    app.AddLayout( lay )
}

//Draw the icons
function DisplayIcons( lay )
{
    //Create a layout to contain icons.
    layIcons = app.CreateLayout( "Linear" )
    layIcons.SetSize( 1,-1 )
    lay.AddChild( layIcons )
   
    //Set icons per row count.
    var iconsPerRow = 4;
    var iconW = 0.6/(iconsPerRow)

    //Create an icon for each selected app.
    for( var i=0; i<appList.length; i++ )
    {
        //Get app info.
        var a = appList[i];
        
        //Create horizontal layout for rows.
        if( i%iconsPerRow==0 ) {
            var layIconsHoriz = app.CreateLayout( "Linear", "Horizontal" )
            layIcons.AddChild( layIconsHoriz )
        }
        //Create layout to wrap icon and text.
        var layIcon = app.CreateLayout( "Linear", "Vertical" )
        layIcon.SetMargins( 0.038/iconsPerRow, 0.015, 0.038/iconsPerRow, 0 )
        layIconsHoriz.AddChild( layIcon )
        
        //Load icon image from PNG file and set touch callbacks.
        var imgIcon = app.CreateImage( a.icon, iconW, -1 )
        imgIcon.SetOnTouchDown( img_OnTouchDown )
        imgIcon.SetOnTouchUp( img_OnTouchUp )
        imgIcon.SetOnLongTouch( img_OnLongTouch )
        layIcon.AddChild( imgIcon )
        
        //Store app info and icon layout in image object for convenience.
        imgIcon.label = a.label;
        imgIcon.packageName = a.packageName;
        imgIcon.className = a.className;
        imgIcon.layIcon = layIcon;
        
        //Create text label.
        var txtIcon = app.CreateText( a.label, iconW*1.5, -1, "Multiline" )
        txtIcon.SetTextSize( 14 )
        txtIcon.SetTextColor( "#ffeeeeee" )
        layIcon.AddChild( txtIcon )
    }
}

//Handle icon touch down.
function img_OnTouchDown()
{
    //Shrink and fade icon.
    this.Scale( 0.95, 0.95 )
    this.SetAlpha( 0.7 )
}

//Handle icon touch up.
function img_OnTouchUp()
{
    //Restore icon appearance.
    this.Scale( 1, 1 )
    this.SetAlpha( 1 )
    
    //Launch activity.
    var action = "android.intent.action.MAIN";
    app.SendIntent( this.packageName, this.className, action ) 
}

//Handle icon long touch.
function img_OnLongTouch()
{
    //Restore icon appearance.
    this.Scale( 1, 1 )
    this.SetAlpha( 1 )
    
    //Store current icon.
    curIcon = this;
    
    //Show options dialog.
    var list = "Remove,Uninstall,Info";
    lstOps = app.CreateListDialog( "", list, "AutoCancel" )
    lstOps.SetOnTouch( lstOps_Select ) 
    lstOps.Show()
}

//Called when icon long click option chosen.
function lstOps_Select( item )
{
    if( item=="Remove" )
    {
        curIcon.layIcon.SetVisibility( "Gone" )
    }
    else if( item=="Info" )
    {
        var msg = "Name: " + curIcon.label + 
            "\n\nPackage Name: " + curIcon.packageName + 
            "\n\nClass Name: " + curIcon.className;
        app.Alert( msg )
    }
}