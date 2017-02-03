<?php

class My_model extends CI_Model {

	function __construct(){
		parent::__construct();
	}

	public function getmember(){
		
		return $this->mongo_db->find_one("members"); 
	}

}
