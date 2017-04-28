   <script id="navItem" type="text/html">
                <a-plane 
                    scale= "3 3 3";
                    class="link" height=".25" width=".25" 
                    material="shader: flat; color:#333; opacity: .9" 
                    text="position: 0 0 0; anchor: center; width: .5; height:0.25; align:center; lineHeight: 50; letterSpacing: 5; color: white; wrapCount: 18; value: ${text}" 
                    event-set__1="_event: mousedown; scale: 3 3 3" 
                    event-set__2="_event: mouseup; scale: 3.4 3.4 3.4" 
                    event-set__3="_event: mouseenter; scale:  3.4 3.4 3.4 " 
                    event-set__4="_event: mouseleave; scale: 3 3 3" 
                    sound="on: click; src: #click-sound" 
                    update-raycaster="#cursor"
                         onClick="${link}"
                    >
                </a-plane>
            </script>