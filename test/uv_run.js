//uv_run(0,function(option){log(option);});//UV_RUN_DEFAULT
//uv_run(function(option){log(option);});//UV_RUN_DEFAULT

uv_run(1, function (option) { log(option); });//UV_RUN_ONCE

//uv_run(2, function (option) { log(option); });//UV_RUN_NOWAIT ��֪�������