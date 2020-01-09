
<script type="text/javascript">
            $(document).ready(function(){
                $("#videoSelect").change(function() {
                var videoValue = $(this).val();

                if(videoValue==1){
                    console.log("Inside"+videoValue);
                    $("#video2").attr('src','video/1.mp4');
                }
                else if(videoValue==2){
                    console.log("Inside"+videoValue);
                    $("#video2").attr('src','video/2.mp4');
                }
                else{
                    console.log("Inside"+videoValue);
                    $("#video2").attr('src','video/3.mp4');
                }

            }); 
            });
</script>