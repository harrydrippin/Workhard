<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Project extends CI_Controller {

	function __construct(){
		parent::__construct();
	}


	function info($idx){
		$data = $this->mongo_db->get_where('projects', array('idx'=>(int)$idx));
		echo json_encode(array('idx'=>$data[0]["idx"],
								'project_name'=>$data[0]["project_name"],
								'host_id'=>$data[0]["host_id"],
								'user_id'=>$data[0]["user_id"]));
	}
	
	function panels($idx){

		//var_dump($this->mongo_db->count("members"));
	}

	function panelDetail($project_idx, $panel_idx){
		//var_dump($this->mongo_db->count("members"));
	}

	function panelAdd() { //post
		$data = $this->mongo_db->get_where("members", array('id'=>$user_id));
		echo json_encode(array('name'=>$data[0]["name"],
								'id'=>$data[0]["id"],
								'project_list'=>$data[0]["project_list"],
								'isProf'=>$data[0]["isProf"],
								'school'=>$data[0]["school"]));
	}

	function panelPost(){

	}

	function setting(){

	}

	function add(){

	}

	function delete(){

	}

	function evalu($project_idx){
		$data = $this->mongo_db->get_where("projects",array('idx'=>(int)$project_idx));

		var_dump($data[0]["eval"]);	
	}

}
