<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Member extends CI_Controller {

	function __construct(){
		parent::__construct();
	}
	function index(){
		$this->load->view('v');
	}

	function login(){
		$user_id = 'dhdh';//$this->input->post('user_id');
		$dbuser = $this->mongo_db->get_where("members", array('id'=>$user_id));

		//if (password_verify($this->input->post('password'), $dbuser->password)){
		if ('1q2w3e4r' == $dbuser[0]["password"]){
			session_start();
			$_SESSION['user_id'] = $user_id;
			$_SESSION['is_login'] = true;
			echo true;
		}
		else echo false;
	}
	
	function logout(){
		session_start();
		session_destroy();
	}

	function signup(){
		$user_id = 'dhdh';//$this->input->post('id');
		if($this->mongo_db->count('members',array('id'=>$user_id))>0){
			echo false;
			return ;
		}
		$password = $this->input->post('password');
		$school = $this->input->post('school');
		$name = $this->input->post('name');

		$this->mongo_db->insert("members", array('id'=>$user_id, 'password'=>$password, 'school'=>$school, 'name'=>$name));
		echo true;
	}

	function info($user_id) {
		$data = $this->mongo_db->get_where("members", array('id'=>$user_id));
		echo json_encode(array('name'=>$data[0]["name"],
								'id'=>$data[0]["id"],
								'project_list'=>$data[0]["project_list"],
								'isProf'=>$data[0]["isProf"],
								'school'=>$data[0]["school"]));
	}



}
