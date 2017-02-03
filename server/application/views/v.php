<!DOCTYPE html>
<html>
	<head>
    	<!-- JQuery -->
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

		<!-- Bootstrap -->
  		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    	<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.css" rel="stylesheet">
		
	
	    <!-- Custom CSS -->
		<link href="/static/css/style.css" rel="stylesheet">
    	
   
		


	</head>
	<body>





	<div class="container">
  		<div class="row">

  		<table class="table table-striped table-bordered table-hover ">
		  <thead>
		    <tr>
		      <th></th>
		      <th>김동현</th>
		      <th>박서희</th>
		      <th>김지은</th>
		      <th>홍승환</th>
  		      <th>공유</th>
  		      <th>이동욱</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th scope="row">김동현</th>
		      <td>X</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		    </tr>
		    <tr>
		      <th scope="row">박서희</th>
		      <td>50</td>
		      <td>X</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		    </tr>
		    <tr>
		      <th scope="row">김지은</th>
		      <td>50</td>
		      <td>50</td>
		      <td>X</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		    </tr>
		    <tr>
		      <th scope="row">홍승환</th>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>X</td>
		      <td>50</td>
		      <td>50</td>
		    </tr>
		    <tr>
		      <th scope="row">공유</th>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>X</td>
		      <td>50</td>
		    </tr>
		    <tr>
		      <th scope="row">이동욱</th>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>50</td>
		      <td>X</td>
		    </tr>
		  </tbody>
		</table>
  		</div>
  	</div>			


	<script>
	 function fresh_result(i){
	        $.ajax({
	            url:"/index.php/project/eval"
	            dataType:'json',
	            cache: false,
	            crossDomain: true,
	            contentType: 'application/json; charset=utf-8',
	            success:function(data){
	            	alert(data);
	            }
	        })
	    }

	</script>
  	</body>

</html>


