$fuction(){
	$var animal=$("#animals")

	$('button').onclick(fuction(){
		$.ajax{(
			type:'GET',
			url:'http:jsonplaceholder.typicode.com/todo',
			success:fuction(task){
				console,log("it works")
				$each(task,fuction(i,task){
					$animal.append('userid:'+task.userid+""+'id:'task.id+""+'title:'task.title+""+'complete:'task.complete)
				}
			}
		});
	};

};