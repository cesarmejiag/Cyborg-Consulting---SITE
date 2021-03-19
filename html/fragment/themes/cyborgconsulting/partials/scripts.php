<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6046ff77c13ec2bc"></script>
<!-- Pure chat -->
<script type='text/javascript' data-cfasync='false'>window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '4e85731d-595a-4d65-9e01-d5238a8c5689', f: true }); done = true; } }; })();</script>
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Page Scripts  -->
<script data-main="<?= JS_PATH ?>scripts.js" src="<?= JS_PATH ?>require.min.js"></script>
<script src="<?= JS_PATH ?>parallax.min.js"></script>
<script>
    requirejs(['scripts']);
</script>
<script>
    new universalParallax().init({
        speed: 1.4
    });
</script>